# Blocks 组件速查表

本目录下的 `*-block.tsx` 是来自 **@7ovr**（`https://7ovr.com`，MIT-0 许可）的 blocks 组件。

**通用规则：**
- 全部为**默认导出、无 props** 的组件
- 内容硬编码在文件顶部的数据常量中，定制需**直接编辑源码**（见文末"定制方式"）
- `🔧 含交互` 的 blocks 带 `"use client"`（内含 Dialog/Accordion/Tabs/Select 等交互）
- `⚡ 纯静态` 的 blocks 无 `"use client"`，可在 Server 组件页面直接渲染

## 完整清单（46 个）

### 营销核心

| 文件 | 导出组件 | 类型 | 可定制常量 |
|------|---------|------|-----------|
| `hero-block.tsx` | `HeroBlock` | 🔧 | `LOGOS` |
| `features-block.tsx` | `FeaturesBlock` | ⚡ | `TABS` |
| `pricing-block.tsx` | `PricingBlock` | ⚡ | `plans`、`groups` |
| `faqs-block.tsx` | `FaqsBlock` | 🔧 | `categories` |
| `testimonials-block.tsx` | `TestimonialsBlock` | ⚡ | `testimonials` |
| `team-block.tsx` | `TeamBlock` | ⚡ | `members`、`socials` |
| `stats-block.tsx` | `StatsBlock` | 🔧 | `metrics` |
| `cta-block.tsx` | `CtaBlock` | ⚡ | — |
| `logo-cloud-block.tsx` | `LogoCloudBlock` | 🔧 | — |
| `comparison-block.tsx` | `ComparisonBlock` | ⚡ | — |
| `bento-block.tsx` | `BentoBlock` | ⚡ | — |
| `how-it-works-block.tsx` | `HowItWorksBlock` | ⚡ | — |
| `announcement-block.tsx` | `AnnouncementBlock` | 🔧 | `SALE` |
| `integrations-block.tsx` | `IntegrationsBlock` | 🔧 | — |
| `gallery-block.tsx` | `GalleryBlock` | 🔧 | `ALL` |
| `page-header-block.tsx` | `PageHeaderBlock` | ⚡ | — |

### 内容

| 文件 | 导出组件 | 类型 | 可定制常量 |
|------|---------|------|-----------|
| `blog-block.tsx` | `BlogBlock` | ⚡ | `posts`、`categories`、`popular`、`tags` |
| `article-block.tsx` | `ArticleBlock` | ⚡ | — |
| `changelog-block.tsx` | `ChangelogBlock` | ⚡ | — |
| `roadmap-block.tsx` | `RoadmapBlock` | 🔧 | — |
| `timeline-block.tsx` | `TimelineBlock` | ⚡ | — |
| `profile-block.tsx` | `ProfileBlock` | 🔧 | — |
| `status-block.tsx` | `StatusBlock` | ⚡ | — |
| `activity-block.tsx` | `ActivityBlock` | ⚡ | — |
| `careers-block.tsx` | `CareersBlock` | 🔧 | — |
| `about-block.tsx` | `AboutBlock` | ⚡ | — |
| `steps-block.tsx` | `StepsBlock` | 🔧 | — |

### 应用

| 文件 | 导出组件 | 类型 | 可定制常量 |
|------|---------|------|-----------|
| `dashboard-block.tsx` | `DashboardBlock` | 🔧 | `RANGES`、`STATS` |
| `app-shell-block.tsx` | `AppShellBlock` | 🔧 | — |
| `sidebar-block.tsx` | `SidebarBlock` | 🔧 | — |
| `settings-block.tsx` | `SettingsBlock` | 🔧 | — |
| `billing-block.tsx` | `BillingBlock` | 🔧 | — |
| `notifications-block.tsx` | `NotificationsBlock` | 🔧 | — |
| `onboarding-block.tsx` | `OnboardingBlock` | 🔧 | — |
| `command-palette-block.tsx` | `CommandPaletteBlock` | 🔧 | `COMMAND` |
| `search-block.tsx` | `SearchBlock` | 🔧 | `RECENT`、`SUGGESTIONS` |
| `calendar-block.tsx` | `CalendarBlock` | 🔧 | `STANDUP`、`WEEKS`、`TODAY`、`STATUS` |
| `kanban-block.tsx` | `KanbanBlock` | 🔧 | — |
| `charts-block.tsx` | `ChartsBlock` | 🔧 | — |
| `table-block.tsx` | `TableBlock` | 🔧 | — |
| `file-upload-block.tsx` | `FileUploadBlock` | 🔧 | `DEMO` |
| `empty-states-block.tsx` | `EmptyStatesBlock` | ⚡ | — |
| `error-block.tsx` | `ErrorBlock` | ⚡ | — |
| `cookie-consent-block.tsx` | `CookieConsentBlock` | 🔧 | — |
| `header-block.tsx` | `HeaderBlock` | 🔧 | — |
| `footer-block.tsx` | `FooterBlock` | 🔧 | — |

> `app-shell-block.tsx` 生成 `components/dashboard/` 目录（app-shell/charts/dashboard/table 四个子组件），仅由 `@7ovr/dashboard` 整页 block 使用，本模板已移除该目录。

## 使用方式

```tsx
// 任意页面（Server 或 Client 均可 import）
import HeroBlock from "@/components/hero-block"
import PricingBlock from "@/components/pricing-block"
import FaqsBlock from "@/components/faqs-block"

export default function Page() {
  return (
    <>
      <HeroBlock />
      <PricingBlock />
      <FaqsBlock />
    </>
  )
}
```

## 定制方式

blocks 没有 props，修改内容需直接编辑源码中的数据常量。示例（`pricing-block.tsx`）：

```ts
// 改这里即可定制三个套餐
const plans = [
  { name: "Starter", price: "$0", note: "Free forever" },
  { name: "Pro", price: "$29", note: "Per month", featured: true },
  { name: "Enterprise", price: "Custom", note: "Contact us" },
]
```

## 安装新 blocks

```
npx shadcn@latest add @7ovr/<block名称>
```

@7ovr registry 已在 `components.json` 中注册。

## ⚠️ 未安装的表单类 blocks

以下含 `<form>` 的 blocks 未安装（需要时再装）：`auth-1~8`、`contact-1~3`、`newsletter-1~5`、`chat-1~4`、`ai-chat-1~3`、`coming-soon-1~5`、`error-2`、`cta-4`、`hero-4`、`faqs-3/4`、`footer-3`、`sidebar-2`、`saas-landing`、`startup`、`saas-landing-2`、`search-1~3` 等。

## 依赖约束

- `table-block` 依赖 **`@tanstack/react-table@8`**（`useReactTable` API）——**禁止升级到 v9**
- blocks 图标用 **`@remixicon/react`**，与项目中的 lucide 并存，不要互相替换
