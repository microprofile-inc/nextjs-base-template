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
        <p>
          技术支持{" "}
          <a
            href="https://typemake.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            typemake.com
          </a>
        </p>
      </Container>
    </footer>
  )
}
