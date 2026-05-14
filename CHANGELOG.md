# Changelog

All notable changes to the David Portfolio Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-05-14
### Added (Phase 4 - Launch)
- **Deployment**: Codebase finalized and primed for Vercel edge deployment.

## [0.3.0] - 2026-05-14
### Added (Phase 3 - SEO & Polish)
- **Global SEO**: Implemented advanced Next.js Metadata API in `layout.tsx` targeting Android platform engineering, AOSP, and IPC keywords.
- **Dynamic SEO**: Implemented `generateMetadata` in `[slug]/page.tsx` for optimal OpenGraph and Twitter cards per article.
- **Search Engine Crawlability**: Auto-generated dynamic `sitemap.xml` and `robots.txt` endpoints in `src/app`.
- **Accessibility**: Added `aria-label` and `aria-hidden` tags to interactive icons and responsive menu toggles in `Navigation.tsx`.

## [0.2.0] - 2026-05-14
### Added (Phase 2 - Blog System)
- **Markdown Blog Engine**: Implemented `src/lib/blog.ts` using `gray-matter` to parse local `.md` files and frontmatter.
- **Blog Listing Page (`/blog`)**: Displays a chronologically sorted list of all technical articles.
- **Dynamic Blog Routes (`/blog/[slug]`)**: Implemented Next.js Static Site Generation (SSG) via `generateStaticParams` to pre-render articles.
- **Syntax Highlighting**: Integrated `react-markdown` with `remark-gfm` and `rehype-highlight`, utilizing the Atom One Dark theme for code blocks (`C++`, `Kotlin`, `Java`, etc.).
- **Typography Engine**: Integrated `@tailwindcss/typography` (`prose`, `prose-invert`) for beautiful, out-of-the-box markdown styling.
- **Sample Content**: Drafted two deep-dive articles (`binder-ipc-explained.md` and `surfaceview-vs-textureview.md`).

### Changed
- **Navigation**: Added a `Blog` tab to the global `Navigation.tsx` component.

## [0.1.0] - 2026-05-14
### Added (Phase 1 - MVP)
- **Next.js Initialization**: Scaffolded a Next.js 15+ App Router application with React 19, TypeScript, and Tailwind CSS v4.
- **Global Layout (`/`)**: Implemented `layout.tsx` enforcing a strict `#0a0a0a` dark mode, loading Google Fonts (`Inter` for sans, `JetBrains Mono` for monospace).
- **Navigation Component**: Built a sticky, frosted-glass top navigation bar using `framer-motion` for fluid tab selection animations and `lucide-react` for iconography.
- **Home Page (`/`)**: Added a Hero section, a "Technical Arsenal" grid, and a "Featured Work" highlight section focusing on AOSP/SystemUI.
- **About Page (`/about`)**: Structured technical background, core focus areas, and engineering philosophy.
- **Projects Page (`/projects`)**: Categorized layout for "AOSP & SystemUI", "Android Applications", and "Technical Experiments" with glowing hover states.
