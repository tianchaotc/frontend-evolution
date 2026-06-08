import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import markdownItAnchor from 'markdown-it-anchor'
import { createHighlighter } from 'shiki'

export default defineConfig(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['javascript', 'html', 'css', 'json', 'bash', 'typescript', 'jsx', 'tsx'],
  })

  return {
    base: '/frontend-evolution/',
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Markdown({
        markdownItSetup(md) {
          md.use(markdownItAnchor)
          md.options.highlight = (code, lang) => {
            return highlighter.codeToHtml(code, {
              lang: lang || 'text',
              theme: 'github-dark',
            })
          }
        },
      }),
    ],
  }
})
