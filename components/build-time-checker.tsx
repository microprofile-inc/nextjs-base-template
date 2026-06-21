"use client"

import { useEffect, useRef } from "react"

const POLL_INTERVAL = 30_000

export function BuildTimeChecker() {
  const currentValueRef = useRef<string | null>(null)

  useEffect(() => {
    async function checkBuildTime() {
      try {
        const res = await fetch(`/build_time.txt?t=${Date.now()}`)
        if (!res.ok) return
        const text = await res.text()
        const value = text.trim()
        if (!value) return

        if (currentValueRef.current === null) {
          currentValueRef.current = value
        } else if (currentValueRef.current !== value) {
          window.location.reload()
        }
      } catch {
        // ignore fetch errors
      }
    }

    function onVisibilityChange() {
      if (document.visibilityState === "visible") {
        checkBuildTime()
      }
    }

    checkBuildTime()
    const interval = setInterval(checkBuildTime, POLL_INTERVAL)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [])

  return null
}
