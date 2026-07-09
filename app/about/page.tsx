import { Container } from "@/components/layout/container"

export const metadata = {
  title: "关于",
  description: "关于本站的介绍。",
}

export default function AboutPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">关于</h1>
        <p className="text-muted-foreground">
          这里是关于页面的占位内容。请替换为你自己的介绍文字。
        </p>
      </div>
    </Container>
  )
}
