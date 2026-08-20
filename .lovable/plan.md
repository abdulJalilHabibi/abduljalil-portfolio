# Convert portfolio to React (JSX) inside the current project

## Goal
Rebuild the existing `public/portfolio/` static site as a real React portfolio inside the TanStack Start project. The same design, content, and animations are preserved, but the page is now rendered with React components written in JavaScript (`.jsx`) instead of static HTML/JS.

## Important constraint: TypeScript stays for framework plumbing
TanStack Start's route tree and root route must remain TypeScript (`.tsx`). The route files `src/routes/index.tsx` and `src/routes/__root.tsx` cannot be plain JS without breaking the framework. However, every actual portfolio UI component will be written as `.jsx` JavaScript files, so the user's portfolio code itself is in React + JS.

## Plan

1. **Allow JSX in the build**
   - Update `tsconfig.json` to include `src/**/*.jsx` and allow JS.

2. **Create portfolio React components in `src/components/portfolio/` (all `.jsx`)**
   - `Navbar.jsx`
   - `Hero.jsx`
   - `About.jsx`
   - `Skills.jsx`
   - `Projects.jsx`
   - `Services.jsx`
   - `Contact.jsx`
   - `Footer.jsx`
   - `BackgroundFx.jsx`
   - `Loader.jsx`
   - `ScrollToTop.jsx`
   - `SocialLinks.jsx`

3. **Create custom React hooks in `src/hooks/` (all `.jsx`)**
   - `useTypingEffect.jsx` — replaces typing effect logic
   - `useReveal.jsx` — replaces IntersectionObserver reveal animation
   - `useCountUp.jsx` — replaces counter animation
   - `useMobileNav.jsx` — replaces mobile menu toggle
   - `useScrollActive.jsx` — replaces active nav link on scroll
   - `useSkillBars.jsx` — replaces skill bar fill observer

4. **Move styles into `src/styles.css`**
   - Merge the portfolio CSS variables, layout, components, animations, and responsive rules from `public/portfolio/style.css` into `src/styles.css`.
   - Keep the existing Tailwind setup intact at the top.
   - Ensure fonts and Font Awesome are loaded in the root route head.

5. **Update `src/routes/index.tsx`**
   - Replace the `<iframe>` with the new portfolio components.
   - Keep the existing `head()` SEO metadata.

6. **Update `src/routes/__root.tsx`**
   - Add Google Fonts (Inter, Poppins) and Font Awesome stylesheet links in the root head.
   - Ensure the root body still renders `<Outlet />`.

7. **Preserve interactions in React**
   - Loader hides after page load.
   - Typing effect cycles through phrases.
   - Scroll reveals, skill bars, counters animate on intersection.
   - Mobile nav toggles and closes on link click.
   - Active nav link updates on scroll.
   - Scroll-to-top button appears after 500px scroll.
   - Contact form validates and shows a success message (client-side, no backend).

8. **Clean up**
   - Remove or keep the old `public/portfolio/` files as a backup (decide during implementation; default is to keep them unchanged to avoid accidental data loss).

## Verification
- Run `bun run build` to confirm the project compiles.
- Open the preview to confirm the same dark glassmorphism portfolio renders, all sections are present, and animations work.

## Outcome
The portfolio will be a real React app rendered at `/`, with the visual content written in JavaScript/JSX. Only the TanStack Start framework routes remain TypeScript out of necessity.
