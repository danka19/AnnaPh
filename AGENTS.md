# AGENTS.md - Frontend Website Rules

These rules apply when building or changing websites, landing pages, marketing pages,
frontend components, visual UI, and responsive web layouts.

## Always Do First

- If a `frontend-design` skill or equivalent design instruction file is available, load it before writing frontend code in every session.
- Inspect the existing project structure before choosing an implementation style.
- Check `brand_assets/` first, then `assets/`, then existing public/static folders. Use real brand assets before placeholders.
- Identify the target stack from the repository. For existing apps, follow the app's framework, routing, styling, and component patterns.
- For a brand-new static prototype, default to a single `index.html` with self-contained styles unless the user asks for a framework.

## Design Intent

- Build the actual usable page or interface first, not a marketing explanation of what the page could be.
- Treat the target audience and domain as design constraints. Operational tools should be dense, calm, and scannable; editorial or campaign sites can be more expressive.
- Make the primary subject visible in the first viewport: product, person, venue, brand, object, dashboard, tool, or gameplay state.
- Prefer precise, restrained composition over generic "AI landing page" patterns.

## Reference Images

- If a reference image is provided, match layout, spacing, typography, color, border radius, shadows, and image treatment as closely as possible.
- Do not add sections, features, decorative elements, or content that are not present in the reference unless the user asks.
- Do not "improve" a reference design. Recreate it faithfully.
- Screenshot the implementation, compare it against the reference, fix visible mismatches, and screenshot again.
- Run at least two comparison rounds unless the first pass is already visually indistinguishable or the user explicitly stops the process.
- When comparing, be concrete: note actual mismatches such as "heading is 32px but reference is about 24px" or "card gap is 16px but should be 24px".

## Local Server And Verification

- Always verify through `localhost` or the project's dev server URL. Do not rely on `file:///` screenshots for final visual QA.
- If the project has a dev command, use it. Examples: `npm run dev`, `pnpm dev`, `yarn dev`, `bun dev`, `astro dev`, `next dev`, or the repo's documented command.
- If the project includes a local static server script such as `serve.mjs`, use it rather than inventing another server.
- Before starting a server, check whether one is already running on the expected port.
- Keep one server instance per port.
- Capture screenshots from the served URL and inspect the actual image before declaring the work done.
- Verify at minimum one desktop viewport and one mobile viewport for layout, overflow, and text fitting.

## Screenshot Checklist

Check all of the following before finalizing:

- Spacing, padding, alignment, and grid rhythm.
- Font family, size, weight, line height, and letter spacing.
- Exact or intentionally derived colors, including hover and focus states.
- Border radius, borders, dividers, shadows, and depth.
- Image crop, aspect ratio, focal point, overlays, and loading behavior.
- Mobile stacking, tap targets, wrapping, and horizontal overflow.
- Header, navigation, sticky elements, modals, and menus across breakpoints.
- Empty, loading, error, and disabled states when the UI includes dynamic behavior.

## Output Defaults

- For new static pages, prefer one `index.html` with inline CSS or a minimal local CSS file.
- Tailwind CDN is acceptable for quick prototypes only: `<script src="https://cdn.tailwindcss.com"></script>`.
- For production or existing projects, use the project's installed styling system instead of adding Tailwind by default.
- Placeholder images may use `https://placehold.co/WIDTHxHEIGHT`, but only when no suitable real asset exists.
- Use mobile-first responsive CSS.
- Use semantic HTML first. Reach for JavaScript only when interaction or state requires it.
- Do not introduce new dependencies unless they materially improve the result and fit the project.

## Brand Assets

- Always inspect `brand_assets/` before designing.
- If a logo exists, use it.
- If a color palette, typography sample, style tile, or screenshot exists, derive the design from it.
- If assets exist in `assets/`, prefer them over remote placeholder media.
- Do not replace real assets with placeholders.
- If only a raster palette image is provided, sample colors from it and use explicit hex values.

## Visual Craft Guardrails

- Do not use default Tailwind blue/indigo/purple as the primary palette unless it is part of the brand.
- Avoid one-note palettes where the whole page is only one hue family.
- Pair typography intentionally. Do not use the exact same generic font treatment for headings and body unless the brand demands it.
- Use consistent spacing tokens. Do not scatter random one-off spacing values.
- Create a clear depth system: base, raised, overlay, and focus states.
- Avoid generic `shadow-md` styling. Use shadows that match the surface, background, and light model.
- Do not decorate pages with disconnected gradient orbs, bokeh blobs, or arbitrary abstract shapes.
- Gradients should support content or image treatment, not hide weak layout.
- Animate only `transform` and `opacity` by default.
- Do not use `transition-all`.
- Every clickable element needs hover, active, disabled where relevant, and keyboard-visible focus states.
- Text must fit inside its container at mobile and desktop widths. Do not let labels, buttons, nav items, or cards overlap.
- Do not put cards inside cards unless the nested card is a true repeated data item or modal content.
- Keep card radius at 8px or less unless the existing design system uses a different radius.

## Layout And Responsiveness

- Use explicit layout constraints: max widths, grid tracks, aspect ratios, min/max sizes, and stable component dimensions.
- Do not scale font sizes directly with viewport width.
- Keep letter spacing at `0` unless a specific type style requires otherwise.
- Hero sections must leave a hint of the next section visible on normal mobile and desktop viewports.
- Do not use split hero layouts with text on one side and a decorative mockup card on the other unless the reference requires it.
- For landing heroes, make the H1 the brand, product, person, place, or literal offer. Put value proposition details in supporting copy.

## Content Rules

- Use the user's supplied copy exactly when provided.
- If copy is missing, write concise, domain-appropriate placeholder copy that can survive visual QA.
- Do not invent claims, prices, metrics, testimonials, awards, legal statements, or integrations.
- Avoid visible instructional text explaining the UI, its styling, or how to use obvious controls.
- Prefer concrete labels over vague labels such as "Learn more" when the destination is known.

## Accessibility And UX

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`, and meaningful headings.
- Maintain a logical heading order.
- Provide alt text for meaningful images. Use empty alt text for purely decorative images.
- Ensure color contrast is readable for body text, controls, and critical UI.
- Use real buttons for actions and real links for navigation.
- Ensure forms have labels, clear errors, and visible focus states.
- Respect reduced-motion preferences for nonessential animations.

## Performance

- Use appropriately sized images and preserve aspect ratios to avoid layout shift.
- Lazy-load non-critical images.
- Avoid heavy animation, large libraries, and unnecessary client-side JavaScript.
- Keep critical above-the-fold content fast and stable.
- Do not block rendering with unused fonts, icon packs, or scripts.

## Hard Rules

- Do not stop after one screenshot pass when visual matching or high-polish design is required.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo/purple as the primary color unless it is a brand color.
- Do not ignore `brand_assets/` or `assets/`.
- Do not claim a screenshot or browser check was performed unless it was actually performed.
- Do not ship a layout with horizontal overflow, overlapping text, invisible focus, or broken mobile navigation.
- Do not rewrite unrelated project architecture to complete a visual task.
