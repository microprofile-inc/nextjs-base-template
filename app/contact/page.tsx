import { Container } from "@/components/layout/container"

export const metadata = {
  title: "联系",
  description: "联系方式。",
}

export default function ContactPage() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">联系</h1>
        <p className="text-muted-foreground">
          这里是联系页面的占位内容。请替换为你的联系方式。
        </p>
      </div>
    </Container>
  )
}
