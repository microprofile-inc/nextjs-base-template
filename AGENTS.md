<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

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
