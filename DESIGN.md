# System Architecture & Design Document

## 1. Project Overview
This document outlines the architecture, technology stack, and design decisions for the Personal Portfolio & Blog Website of an Android Platform Engineer. The goal is to present a highly technical, performant, and deeply professional brand identity.

## 2. Technology Stack
### Core Framework
- **Next.js 15+ (App Router)**: Provides robust file-based routing, Server Components (RSC), and Static Site Generation (SSG). Selected for superior SEO capabilities and performance.
- **React 19**: Used for the component architecture and client-side interactivity.
- **TypeScript**: Enforces strong typing across data models (especially for Blog frontmatter) and UI components.

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework natively integrated. `@tailwindcss/typography` is used to gracefully format Markdown content.
- **Framer Motion**: Handles physics-based, fluid micro-animations (e.g., active navigation indicators, mobile menu reveals).
- **Lucide React**: Provides clean, consistent SVG iconography. *(Note: Branded icons like GitHub/LinkedIn are deprecated in newer Lucide versions; generic fallbacks like `Code2` and `Globe` are utilized).*

### Content Management (Blog System)
- **Local Markdown (.md)**: Articles are stored natively in the repository. This is highly git-friendly and developer-centric.
- **gray-matter**: Parses frontmatter data (title, date, excerpt, tags) from markdown files.
- **react-markdown**: Transforms markdown AST to React elements.
- **remark-gfm**: Supports GitHub Flavored Markdown (tables, strikethrough, tasklists).
- **rehype-highlight**: Provides build-time syntax highlighting for code blocks using `highlight.js` with the Atom One Dark aesthetic.

---

## 3. Architecture & File Structure

```text
/home/duc/dev/portfolio
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout (Dark mode enforcement, Inter Font)
│   │   ├── page.tsx           # Home Page (Hero, Arsenal, Featured Work)
│   │   ├── about/             # About Page
│   │   ├── projects/          # Projects & Experiments directory
│   │   └── blog/
│   │       ├── page.tsx       # Blog listing page (sorts all .md files)
│   │       └── [slug]/        # Dynamic route for individual articles
│   ├── components/
│   │   └── Navigation.tsx     # Global top navbar with mobile responsiveness
│   ├── content/
│   │   └── blog/              # Raw Markdown files (*.md)
│   └── lib/
│       └── blog.ts            # Utility functions for parsing files and frontmatter
```

---

## 4. UI/UX Philosophy

### Design System
- **Theme**: Strict Dark Mode (`#0a0a0a` background, `#ededed` foreground text).
- **Accent Color**: Emerald Green (`text-emerald-400`). Chosen because it evokes terminal interfaces and system engineering, contrasting perfectly against dark backgrounds.
- **Typography**: 
  - Sans-serif: `Inter` (Provides optimal legibility and a modern structural feel).
  - Monospace: `JetBrains Mono` (Used for code blocks and branding accents).

### Component Decisions
- **Navigation**: Uses a `backdrop-blur-md` effect to ensure readability when scrolling over content while maintaining vertical screen real estate.
- **Cards**: All project and blog cards utilize subtle border-whites (`border-white/10`) with `group-hover` gradients. This prevents the UI from looking flat without relying on heavy shadows.

---

## 5. Rendering Strategy
The entire website leverages Next.js Static Site Generation (SSG).
1. **At Build Time**: `src/lib/blog.ts` uses `fs.readdirSync` to read all markdown files.
2. `generateStaticParams()` in `src/app/blog/[slug]/page.tsx` maps every filename to a `[slug]` route.
3. Next.js statically renders the HTML for every blog post.
4. **Result**: Zero database queries, instantaneous page loads, and perfect SEO.

---

## 6. Future Expansion (Phase 3 & 4)
- **SEO Optimization**: Next.js Metadata API integration for dynamic Open Graph tags per blog post.
- **Search**: A lightweight client-side fuzzy search (e.g., `fuse.js`) across the blog data.
- **RSS Feed**: Auto-generating an `rss.xml` file at build-time using the parsed `gray-matter` data.
