import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/site"

export default function Home() {
  return (
    <Container className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        欢迎使用{siteConfig.name}
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        {siteConfig.description}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button render={<Link href="/about" />} nativeButton={false} size="lg">
          了解更多
        </Button>
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
          variant="outline"
        >
          联系我们
        </Button>
      </div>
    </Container>
  )
}
