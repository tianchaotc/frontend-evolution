# Task 8: CodeCompare Component

## Status: DONE

## What was implemented

- Created `CodeCompare.vue` component with tab-switching functionality
- Registered component globally in `main.js` alongside `CodeBlock`
- Added test content to `01-the-web-is-born.md` with jQuery vs Vue comparison

## Files changed

| File | Action |
|------|--------|
| `src/components/CodeCompare.vue` | Created |
| `src/main.js` | Modified (import + registration) |
| `src/content/01-the-web-is-born.md` | Modified (added test section) |

## Component API

```vue
<CodeCompare :tabs="[
  { label: 'jQuery', code: '...', lang: 'javascript' },
  { label: 'Vue', code: '...', lang: 'html' }
]" />
```

- `tabs` (Array, required): Array of tab objects with `label`, `code`, and optional `lang`
- Uses `ref` for active tab index
- Reuses existing `.code-compare-*` and `.code-block` CSS classes from `components.css`

## Verification

- Vite dev server started successfully, component compiled without errors
- Both `CodeCompare.vue` and `main.js` served correctly via Vite HMR
- No build or compilation errors detected
