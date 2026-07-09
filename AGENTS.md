<!-- BEGIN:language-rules -->
# 语言规则

所有对话和思考过程请使用中文。
<!-- END:language-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:base-ui-rules -->
# Base UI 组件规则

本项目使用 `@base-ui/react` 作为 shadcn 底层，不是 Radix。常见陷阱：

- **没有 `asChild`** — 使用 `render` prop 代替：`<Button render={<Link href="/" />}>文字</Button>`
- **`nativeButton` 默认为 true** — 当 `render` 传入非 `<button>` 元素（如 Link 渲染的 `<a>`）时，必须显式设置 `nativeButton={false}`，否则控制台报错且语义丢失
- **Button 基于 `<ButtonPrimitive>`** — props 继承自 `@base-ui/react/button`，不是标准 HTML button

<!-- END:base-ui-rules -->

<!-- BEGIN:static-export-rules -->
# Static Export Mode

This project uses `output: "export"` — the entire site is generated as static HTML/CSS/JS into `out/`.

**Hard constraints (build will fail if violated):**
- No API Routes (`/api/*`)
- No Middleware
- No `cookies()` / `headers()` in dynamic server code
- No `getServerSideProps` / `getStaticProps` with revalidate (ISR)
- `next/image` requires `images.unoptimized: true` (already set)
- Dynamic routes must export `generateStaticParams`
- No `revalidate` or `dynamic = "force-dynamic"`

**Commands:**
- Build: `npm run build` — outputs static files to `out/`
- Preview locally: `npx serve@latest out` (NOT `npm run start` — `next start` does not work with static export)
- Dev: `npm run dev` still works for development

**Deployment:** Deploy the `out/` directory to any static hosting (GitHub Pages, Cloudflare Pages, S3+CloudFront, Nginx, etc.).
<!-- END:static-export-rules -->

<!-- BEGIN:shadcn-rules -->
# shadcn 组件优先规则

**开发新页面时，优先使用 `components/ui/` 下的 shadcn 组件，禁止手写原生 HTML 元素替代。**

可用组件清单（按需使用 `shadcn add` 安装）：
- `Button` — 已安装
- 其他：Card, Dialog, Select, Input, Label, Tabs, Accordion, Avatar 等（按需安装）

常见反模式：
- ❌ 使用 `<details>` 实现折叠 → ✅ 使用 `<Accordion>`

**如果在 `components/ui/` 中找不到所需组件，使用以下命令安装：**
```
npx shadcn@latest add <组件名> -p base-vega
```
安装后确保文件被正确移动到 `components/ui/` 目录。
<!-- END:shadcn-rules -->


# Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.
@STRICTLY.md
