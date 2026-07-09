# 主题与风格定制指南

本项目所有视觉风格集中在一处可调。

## 1. 主题色（最快见效）

文件：`app/globals.css` 的 `:root` 块。

颜色用 **oklch** 色彩空间：`oklch(亮度 色彩浓度 色相)`

| 参数 | 范围 | 说明 |
|---|---|---|
| 亮度 | 0~1 | 0=纯黑，1=纯白 |
| 色彩浓度 | 0~0.4 | 0=纯灰，越大越鲜艳 |
| 色相 | 0~360 | 0/360=红，120=绿，240=蓝 |

### 改品牌主色

改这两行即可（`--primary` 是按钮/链接等主色，`--primary-foreground` 是主色上的文字色）：

```css
--primary: oklch(0.205 0 0);
--primary-foreground: oklch(0.985 0 0);
```

### 预设色值参考（复制替换即可）

| 风格 | `--primary` | `--primary-foreground` |
|---|---|---|
| 中性灰（默认） | `oklch(0.205 0 0)` | `oklch(0.985 0 0)` |
| 蓝色 | `oklch(0.55 0.18 255)` | `oklch(0.985 0 0)` |
| 紫色 | `oklch(0.55 0.22 295)` | `oklch(0.985 0 0)` |
| 绿色 | `oklch(0.6 0.17 150)` | `oklch(0.985 0 0)` |
| 玫瑰红 | `oklch(0.6 0.22 15)` | `oklch(0.985 0 0)` |
| 橙色 | `oklch(0.7 0.18 55)` | `oklch(0.205 0 0)` |

> 提示：主色较深时 foreground 用浅色（0.985），主色较浅时 foreground 用深色（0.205）。

### 其他色组

`:root` 里按注释分组：品牌主色 / 强调色 / 表面色 / 语义色 / 图表色 / 侧边栏。
一般只需改"品牌主色"和"强调色"两组，表面色保持中性灰即可。

## 2. 圆角

文件：`app/globals.css`

```css
--radius: 0.625rem; /* 改这一个值，全局圆角同比例变化 */
```

- `0` = 直角
- `0.375rem` = 小圆角
- `0.625rem` = 默认（中等）
- `1rem` = 大圆角

## 3. 字体

文件：`app/layout.tsx`

当前用 Google Fonts 的 `Inter`（正文）和 `Geist_Mono`（等宽）。换字体改这里：

```ts
import { Inter, Geist_Mono } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
```

映射关系在 `app/globals.css` 的 `@theme inline`：

- `--font-sans` → 正文字体
- `--font-geist-mono` → 等宽字体
- `--font-heading` → 标题字体（默认同正文）

## 4. 容器宽度

文件：`components/layout/container.tsx`

```tsx
className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)}
```

改 `max-w-5xl` 调整内容最大宽度（`max-w-4xl` 更窄，`max-w-7xl` 更宽）。

## 5. 站点信息

文件：`lib/site.ts`

集中管理站点名称、描述、导航项。header、footer、metadata 都引用它，改一处全站生效。

```ts
export const siteConfig = {
  name: "Type Make",
  description: "Type Make — 可灵活定制主题与风格。",
  nav: [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于" },
    { href: "/contact", label: "联系" },
  ],
}
```

## 6. 组件风格

本项目基于 shadcn（底层 `@base-ui/react`）。组件源码在 `components/ui/`，可直接修改。

新增组件：`npx shadcn@latest add <组件名> -p base-vega`
