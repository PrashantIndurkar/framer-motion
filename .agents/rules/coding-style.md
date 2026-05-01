---
trigger: always_on
---

# Antigravity Operational Rules — The Factual Holding co.

This project follows a strict **Shadcn UI + Tailwind CSS** architecture. Antigravity MUST adhere to these rules for every code modification.

## 1. UI Framework & Components
- **Primary Source**: [Shadcn UI](https://ui.shadcn.com/) is the mandatory component library.
- **Verification First**: Before creating any UI element, check `src/components/ui/` to see if it already exists.
- **Consistency**: All new components must be registered and integrated via the Shadcn workflow (components.json).

## 2. Styling & Design System
- **Engine**: Use **Tailwind CSS** for all styling. Avoid inline styles or custom CSS unless absolutely necessary for advanced animations.
- **Design Tokens**: Always use the brand tokens defined in `tailwind.config.ts`:
    - **Colors**: `brand-blue`, `brand-purple`, `brand-cyan`, `brand-green`.
    - **Backgrounds**: `background` (#F2F2F2) and `background-dark` (#0D0D0D).
    - **Fonts**: Use `font-outfit` for headings and `font-sans` (Inter) for body text.
    - **Radius**: Use `rounded-full` for buttons and `rounded-3xl`/`rounded-4xl` for cards/containers.
- **Aesthetic**: Maintain a "Premium" and "State-of-the-Art" look. Use `backdrop-blur`, subtle borders (`border-black/5`), and smooth transitions.

## 3. Component Integration Protocol
1.  **Search**: Check the Shadcn registry for a base component.
2.  **Download/Initialize**: Use `pnpm dlx shadcn@latest add [component]` (or manual implementation if network is unavailable).
3.  **Refine**: Do NOT use default Shadcn styles. Immediately refactor the component to match the "Whenevr" design system (e.g., change `rounded-md` to `rounded-full`).
4.  **Polish**: Add `framer-motion` for micro-animations on interactive elements.

## 4. Code Standards
- **Imports**: Use the `@/` alias for all internal paths (e.g., `@/components/ui/button`).
- **Utilities**: Always use the `cn()` utility from `@/lib/utils` for conditional class merging.
- **Responsiveness**: All components must be mobile-first and fully responsive.
- ** DOnt use [] this for tailwindcss use alwasy try to use default css classes or our customized added classes dont use px values
---
**Last Updated**: 2026-04-30
**Project Goal**: Pixel-perfect "Whenevr" design clone.
