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

<!-- BEGIN:redirect-rules -->
# 页面跳转规则

**禁止**直接使用 `window.location.href = "xxx"` 或 `window.location.replace("xxx")` 进行页面跳转。

请使用 `lib/redirect.ts` 中的 `redirectTo` 工具函数：

```ts
import { redirectTo } from "@/lib/redirect"

// 正确 ✅
redirectTo("/account")

// 错误 ❌
window.location.href = "/account"
```
<!-- END:redirect-rules -->

<!-- BEGIN:api-rules -->
# API 对接规则

**API 调用必须使用 `@/app/openapi` 中生成的客户端代码**，数据类型必须使用 `@/app/openapi` 定义的类型，严禁自定义类型。

```ts
import { WebsiteApi } from "@/app/openapi"
import type { Website } from "@/app/openapi"

// 正确 ✅
const api = new WebsiteApi()
const { data } = await api.websiteGet()
// data.records: Website[]

// 错误 ❌
interface MyWebsite { ... }
const res = await fetch("/api/website")
```
<!-- END:api-rules -->

<!-- BEGIN:format-date-rules -->
# 日期格式化规则

**日期展示必须使用 `FormatDate` 组件**，禁止手动拼接或格式化日期字符串。

```tsx
import { FormatDate } from "@/components/format-date"

// 正确 ✅
<FormatDate date={site.whenModified} />

// 错误 ❌
<span>{site.whenModified}</span>
<span>{new Date(site.whenModified).toLocaleDateString()}</span>
```
<!-- END:format-date-rules -->


<!-- BEGIN:shadcn-rules -->
# shadcn 组件优先规则

**开发新页面时，优先使用 `components/ui/` 下的 shadcn 组件，禁止手写原生 HTML 元素替代。**

可用组件清单（按需使用 `shadcn add` 安装）：
- `Button`, `Avatar` — 已安装
- `Accordion` — 用于 FAQ、折叠面板等（已安装）
- 其他：Card, Dialog, Select, Input, Label, Tabs 等

常见反模式：
- ❌ 使用 `<details>` 实现折叠 → ✅ 使用 `<Accordion>`
- ❌ 手动 `fetch` → 使用 `@/app/openapi` 生成的客户端

**如果在 `components/ui/` 中找不到所需组件，使用以下命令安装：**
```
npx shadcn@latest add <组件名> -p base-vega
```
安装后确保文件被正确移动到 `components/ui/` 目录。
<!-- END:shadcn-rules -->


# Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.
@STRICTLY.md
