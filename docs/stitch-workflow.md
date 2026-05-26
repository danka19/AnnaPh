# Stitch Workflow

## What Goes Where

The prompt for the AI designer goes into Stitch first, not directly into `DESIGN.md`.

`DESIGN.md` is the reusable design-system file. It should contain the final design rules: colors, typography, spacing, shapes, component behavior, and human-readable guidance.

## Steps

1. Open https://stitch.withgoogle.com/
2. Create a new web design project.
3. Paste the contents of `prompts/stitch-prompt.md` into Stitch.
4. Add reference images from `assets/` if needed.
5. Iterate until the generated site direction is right.
6. Export or copy `DESIGN.md` from Stitch.
7. Replace the root `DESIGN.md` in this folder.
8. Use the final `DESIGN.md` when generating frontend code.

## Notes

Google's DESIGN.md format has two parts:

- YAML front matter for machine-readable design tokens.
- Markdown body sections for human-readable design rationale.

The canonical section order is:

1. Overview
2. Colors
3. Typography
4. Layout
5. Elevation & Depth
6. Shapes
7. Components
8. Do's and Don'ts

