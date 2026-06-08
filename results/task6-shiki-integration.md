# Task 6: Markdown Integration with Shiki

## Summary

Configured Shiki syntax highlighting for markdown code blocks via vite-plugin-md.

## Changes

1. **vite.config.js** - Converted to async config to initialize Shiki highlighter at build time. Added `md.options.highlight` to use `github-dark` theme with 8 language grammars (javascript, html, css, json, bash, typescript, jsx, tsx).

2. **src/content/01-the-web-is-born.md** - Replaced placeholder content with full chapter including two code blocks (HTML and JavaScript) for syntax highlighting verification.

## Verification

- `npm run dev` starts without errors
- `npm run build` succeeds (286ms)
- Build output contains `<pre class="shiki` markup for both code blocks
- 41 modules transformed, output: dist/assets/01-the-web-is-born-mBVI2R5g.js (4.16 kB)
