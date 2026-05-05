# Whenevr® — World-class design on demand

A pixel-perfect clone of the Whenevr landing page, built as a technical demonstration for The Factual Holding co. interview challenge.

**Live Demo:** [https://framer-motion-mocha.vercel.app/](https://framer-motion-mocha.vercel.app/)

---

## 🚀 Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🏗️ Architecture & Project Structure

The project follows a modular, component-driven architecture optimized for performance and readability.

### Core Architecture Principles:
1. **Component Atomicity:** Large sections (e.g., `HowItWorks`, `Pricing`) are broken down into internal sub-components to isolate complex logic and animation states.
2. **Responsive-First Design:** Leveraging Tailwind's utility-first approach to ensure a seamless experience across mobile, tablet, and desktop viewports.
3. **Advanced Physics-Based Animations:** Using `framer-motion` with custom spring physics and scroll-driven transforms for a premium, tactile feel.
4. **Theme Consistency:** Centralized design tokens in `tailwind.config.ts` for colors, typography (`font-outfit`, `font-serif`), and spacing.

### File Structure:
```text
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # UI Components
│   ├── ui/           # Shared primitive components (Buttons, Text, Containers)
│   └── [Section].tsx # Large feature sections with internal sub-components
├── lib/              # Utility functions (cn, blog-data)
└── styles/           # Global CSS and tailwind directives
```

---

## 📝 Development Approach

I first carefully reviewed the Framer design in detail to fully understand what needed to be built and where the complexity lies. This helped me identify that ~70% of the UI was straightforward, while ~30% (scroll behavior, menu animations, hover effects, avatar arc UI) would need more focus.

After that, I gathered all required assets (fonts, images, icons) upfront to avoid interruptions during development. I initially started with a desktop-first approach, but later realized a mobile-first strategy would have made spacing and typography easier to manage.

I used Next.js + React + Tailwind CSS and built reusable components for consistency. For complex parts like file card animations and avatar arc UI, I leveraged high-quality references to move faster while maintaining pixel-perfection. I focused on responsiveness and polish toward the end and iterated to get as close as possible to the design reference.

### The Hardest Part
The most challenging parts were the avatar arc UI, smooth scroll behavior, and interactive animations like menu transitions and hover effects. The avatar arc especially was difficult to get exactly right and required several iterations to achieve the correct alignment. I approached these by breaking them into smaller problems, researching existing implementation patterns, and experimenting multiple times to achieve a close result within the given timeframe.

### Key Learnings
I learned the importance of starting with a mobile-first approach, especially for handling spacing and typography efficiently in complex layouts. I also realized the value of balancing custom building with using robust existing patterns to move faster while maintaining elite quality.

---

## 🛠️ Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

Built with obsessiveness by Prashant Indurkar.
