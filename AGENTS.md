<!-- BEGIN:language-rules -->
# 语言规则

- **根据用户输入的语言选择对话语言**：用户使用中文时用中文回复，使用英文时用英文回复，其他语言同理
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

- ✅ 项目已安装 61 个官方 UI 组件（完整清单见下方 `ui-components-inventory` 块），**先查清单再动手，不要重复安装**
- 常见反模式：
  - ❌ 使用 `<details>` 实现折叠 → ✅ 使用 `<Accordion>`
  - ❌ 手写 `<div className="border-t">` → ✅ 使用 `<Separator>`
  - ❌ 自建 loading 动画 → ✅ 使用 `<Skeleton>` / `<Spinner>`
  - ❌ 自定义空状态块 → ✅ 使用 `<Empty>`

**新增组件（仅当清单中确实没有）：**
```
npx shadcn@latest add <组件名> -p base-vega
```

**新增 blocks（@7ovr 已注册，清单见下方 `blocks-inventory` 块）：**
```
npx shadcn@latest add @7ovr/<block名称>
```
<!-- END:shadcn-rules -->

<!-- BEGIN:ui-components-inventory -->
# UI 组件清单（61 个已全部安装）

以下组件位于 `components/ui/`，直接 `import { X } from "@/components/ui/x"` 使用。

**表单**：Input, Textarea, Select, NativeSelect, Combobox, Checkbox, RadioGroup, Switch, Slider, InputOTP, Label, Field, Form, InputGroup, ButtonGroup

**反馈**：Alert, AlertDialog, Badge, Skeleton, Spinner, Progress, Tooltip, Popover, HoverCard, Sonner, Toast, Empty

**覆盖层**：Dialog, Sheet, Drawer, Command, ContextMenu, DropdownMenu, Menubar

**导航**：Breadcrumb, Tabs, Pagination, NavigationMenu, Sidebar, Accordion, Collapsible

**数据展示**：Table, Card, Chart, Carousel, Calendar, Avatar, Separator, Resizable, ScrollArea, Kbd, Item, Marker

**其他**：AspectRatio, Toggle, ToggleGroup, Direction, Bubble, Message, MessageScroller, Attachment, Questionnaire

> `lib/utils.ts` 提供 `cn()`；`hooks/use-mobile.ts` 提供 `useIsMobile()`。
<!-- END:ui-components-inventory -->

<!-- BEGIN:blocks-inventory -->
# Blocks 使用规范（@7ovr，46 个已安装）

所有 blocks 位于 `components/*-block.tsx`，**默认导出、无 props、内容硬编码在文件顶部的数据常量中**。完整清单见 `components/README.md`。

## 使用方式

```tsx
import HeroBlock from "@/components/hero-block"
import FeaturesBlock from "@/components/features-block"

export default function Page() {
  return (
    <>
      <HeroBlock />
      <FeaturesBlock />
    </>
  )
}
```

- 18 个纯静态 blocks（无 `"use client"`）可在 Server 组件页面直接渲染
- 28 个含交互的 blocks（带 `"use client"`，内含 Dialog/Accordion/Tabs/Select 等）同样可被 Server 组件 import（Next.js 自动处理边界）

## 定制方式（重要）

blocks **没有 props**，定制必须直接编辑源码中的**数据常量**。示例：`components/pricing-block.tsx` 顶部：

```ts
// 改这里即可定制三个套餐
const plans = [
  { name: "Starter", price: "$0", note: "Free forever" },
  { name: "Pro", price: "$29", note: "Per month", featured: true },
  { name: "Enterprise", price: "Custom", note: "Contact us" },
]
```

各 block 的常用数据常量：pricing → `plans`/`groups`，hero → `LOGOS`，team → `members`/`socials`，blog → `posts`/`categories`/`tags`，faqs → `categories`，features → `TABS`，stats → `metrics`，search → `RECENT`/`SUGGESTIONS`，dashboard → `RANGES`/`STATS`。

## 已安装的 46 个 blocks（按类别）

| 类别 | blocks 文件 | 类型 |
|------|------------|------|
| 营销核心 | hero, features, pricing, faqs, testimonials, team, stats, cta, logo-cloud, comparison, bento, how-it-works, announcement, integrations, gallery, page-header | 混合（多为静态） |
| 内容 | blog, article, changelog, roadmap, timeline, profile, status, activity, careers, about, steps | 混合 |
| 应用 | dashboard, app-shell, sidebar, settings, billing, notifications, onboarding, command-palette, search, calendar, kanban, charts, table, file-upload, empty-states, error, cookie-consent, header, footer | 多为 client |

> `app-shell-block` 生成 `components/dashboard/` 目录（app-shell/charts/dashboard/table 四个子组件），仅由 `@7ovr/dashboard` 整页 block 使用，本模板已移除该目录。

## ⚠️ 未安装的表单类 blocks（勿假设存在）

以下含 `<form>` 的 blocks **未安装**，需要时再装：`auth-1~8`、`contact-1~3`、`newsletter-1~5`、`chat-1~4`、`ai-chat-1~3`、`coming-soon-1~5`、`error-2`、`cta-4`、`hero-4`、`faqs-3/4`、`footer-3`、`sidebar-2`、`saas-landing`、`startup`、`saas-landing-2`、`search-1~3` 等。

## 依赖约束

- `table-block` 依赖 **`@tanstack/react-table@8`**（`useReactTable` API）——**禁止升级到 v9**（API 已改为 `useTable`，会编译失败）
- blocks 图标用 **`@remixicon/react`**，项目另有 lucide——两者并存，**不要互相替换**
- 若新增 `@7ovr` blocks 后编译失败，优先检查是否为 react-table 版本问题
<!-- END:blocks-inventory -->


# Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.
@STRICTLY.md
