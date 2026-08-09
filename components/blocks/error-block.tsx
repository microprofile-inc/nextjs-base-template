import { RiToolsLine } from "@remixicon/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ErrorBlock() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <span
          className="flex size-14 items-center justify-center border border-border bg-muted/40"
          aria-hidden="true"
        >
          <RiToolsLine className="size-6" />
        </span>
        <Badge variant="secondary" className="mt-6">
          Scheduled maintenance
        </Badge>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          We&apos;ll be right back
        </h1>
        <p className="mt-3 text-sm text-pretty text-muted-foreground">
          Acme is down for planned maintenance while we ship some improvements.
          Everything should be back online shortly — thanks for your patience.
        </p>
        <p className="mt-5 text-sm text-foreground">
          Estimated back by{" "}
          <span className="font-semibold tabular-nums">2:00 PM UTC</span>
        </p>
        <div className="mt-8">
          <Button
            render={<a href="#" />}
            nativeButton={false}
            variant="outline"
          >
            View status page
          </Button>
        </div>
      </div>
    </section>
  )
}
