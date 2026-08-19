import { Container } from "@/components/layout/container"
import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t py-6">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {siteConfig.name}. 保留所有权利。
        </p>
        <p className="flex gap-1 typemake-brand">
          技术支持{" "}
          <a
            href="https://typemake.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary flex gap-1"
          >
            <img src="https://typemake.com/logo.svg" className="w-4" alt='搭站' /> 搭站
          </a>
        </p>
      </Container>
    </footer>
  )
}
