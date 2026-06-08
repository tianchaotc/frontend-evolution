# 今天的前端

## 现代框架对比

2020 年代的前端框架格局已经相当成熟。每个框架都有自己的定位和哲学：

| 框架 | 发布年份 | 核心特点 | 适用场景 |
|------|---------|---------|---------|
| **React** | 2013 | Virtual DOM、单向数据流、Hooks | 大型应用、跨平台（React Native） |
| **Vue** | 2014 | 渐进式、模板语法、响应式 | 中小型到大型应用、快速原型 |
| **Angular** | 2016 | 全功能、TypeScript、依赖注入 | 企业级应用、大型团队协作 |
| **Svelte** | 2016 | 编译时框架、无 Virtual DOM | 轻量级应用、性能敏感场景 |
| **SolidJS** | 2021 | 细粒度响应式、无 Virtual DOM | 高性能交互应用 |

<ClientOnly>
<ConceptCard title="Virtual DOM vs 编译时" icon="💡">
<strong>React/Vue</strong>：运行时使用 Virtual DOM 做 diff 计算，有一定开销，但灵活性高。<br><br>
<strong>Svelte/SolidJS</strong>：在编译阶段就把更新逻辑生成为精确的 DOM 操作指令，运行时几乎零开销。Svelte 编译器会分析模板中的数据依赖，自动生成高效的更新代码。
</ConceptCard>
</ClientOnly>

```javascript
// Svelte 的写法：几乎没有框架概念
<script>
  let count = 0

  function increment() {
    count += 1  // 直接修改，编译器自动处理响应式
  }
</script>

<button on:click={increment}>
  点击了 {count} 次
</button>

<!-- Svelte 编译器会把上面的代码转换为精确的 DOM 操作 -->
<!-- 不需要 Virtual DOM，不需要 diff 算法 -->
```

## SSR：服务端渲染

SPA 的一个核心问题是**首屏性能**和 **SEO**。用户首次访问时需要等待 JavaScript 下载、解析、执行后才能看到内容。搜索引擎爬虫也可能无法正确索引 JavaScript 生成的内容。

**SSR（Server-Side Rendering，服务端渲染）** 在服务器端就把页面渲染成完整的 HTML，用户一打开就能看到内容。

```javascript
// SSR 工作流程
// 1. 用户请求页面
// 2. 服务器执行 React/Vue 代码，生成完整 HTML
// 3. 返回 HTML 给浏览器（用户立即看到内容）
// 4. 浏览器下载 JavaScript
// 5. JavaScript 接管页面（Hydration），绑定事件，变为可交互
```

### Next.js（React）

**Next.js** 是 React 生态中最流行的 SSR 框架，由 Vercel 公司维护。

```javascript
// app/page.js -- Next.js App Router
async function HomePage() {
  // 这个组件在服务器端执行
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())

  return (
    <main>
      <h1>我的博客</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  )
}

export default HomePage
```

### Nuxt（Vue）

**Nuxt** 是 Vue 生态中对应的 SSR 框架。

```html
<!-- pages/index.vue -- Nuxt 3 -->
<script setup>
// 在 Nuxt 3 中，setup 在服务器端执行
const { data: posts } = await useFetch('/api/posts')
</script>

<template>
  <main>
    <h1>我的博客</h1>
    <article v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
    </article>
  </main>
</template>
```

## SSG：静态站点生成

**SSG（Static Site Generation，静态站点生成）** 在构建时就把页面生成为静态 HTML 文件。用户访问时直接返回预生成的 HTML，速度极快。

```javascript
// SSG 工作流程
// 1. 构建时，遍历所有路由
// 2. 对每个路由执行组件代码，生成 HTML
// 3. 把所有 HTML 文件输出到 dist 目录
// 4. 部署到 CDN，用户访问时直接返回静态文件
// --- 不需要服务器，速度极快 ---
```

常见的 SSG 框架：

- **Astro**：专注于内容型网站，支持多种框架（React、Vue、Svelte）混合使用
- **VitePress**：基于 Vite 和 Vue，专为文档网站设计（本教程就是用 VitePress 构建的）
- **Gatsby**：基于 React 的 SSG 框架，有丰富的插件生态

```javascript
// Astro 的组件：默认零 JavaScript
---
// Astro 组件的 frontmatter 部分在构建时执行
const posts = await fetch('https://api.example.com/posts')
  .then(res => res.json())
---

<h1>我的博客</h1>
{posts.map(post => (
  <article>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </article>
))}

<!-- Astro 默认不发送任何 JavaScript 到浏览器 -->
<!-- 除非你显式添加 client:load 指令 -->
```

<ClientOnly>
<InfoBox type="tip" title="SSR vs SSG vs ISR">
<strong>SSR</strong>：每次请求都在服务器端渲染，适合数据频繁变化的页面（如社交媒体动态）。<br><br>
<strong>SSG</strong>：构建时生成静态文件，适合内容不经常变化的页面（如博客、文档）。<br><br>
<strong>ISR（Incremental Static Regeneration）</strong>：SSG 的增强版，允许静态页面在后台定期重新生成，兼顾了 SSG 的速度和 SSR 的数据新鲜度。Next.js 和 Nuxt 都支持 ISR。
</InfoBox>
</ClientOnly>

## React Server Components（RSC）

**React Server Components** 是 React 团队推出的新范式，它让组件可以在服务器端执行，直接访问数据库、文件系统等服务器资源，不需要把数据通过 API 传递给前端。

```javascript
// React Server Component（默认在服务器端执行）
// 不需要 useState，不需要 useEffect
// 可以直接访问数据库
import { db } from '@/lib/database'

async function ArticleList() {
  // 直接查询数据库，不需要 API 层
  const articles = await db.article.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  })

  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  )
}

// 这个组件在客户端执行（需要交互）
'use client'
function ArticleCard({ article }) {
  const [liked, setLiked] = useState(false)

  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={() => setLiked(!liked)}>
        {liked ? '取消点赞' : '点赞'}
      </button>
    </div>
  )
}
```

RSC 的核心思想是：**把组件分为服务器组件和客户端组件**。数据获取、数据库查询等逻辑放在服务器组件中，用户交互逻辑放在客户端组件中。这大幅减少了发送到浏览器的 JavaScript 代码量。

## Edge Computing

**Edge Computing（边缘计算）** 把计算从中心化的数据中心推到离用户最近的节点。

```javascript
// Cloudflare Workers -- 边缘函数
export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/hello') {
      return new Response(
        JSON.stringify({ message: 'Hello from the edge!' }),
        { headers: { 'Content-Type': 'application/json' } }
      )
    }

    // 边缘数据库查询
    if (url.pathname === '/api/user') {
      const user = await env.DB.prepare(
        'SELECT * FROM users WHERE id = ?'
      ).bind(1).first()

      return Response.json(user)
    }
  }
}
```

```javascript
// Vercel Edge Functions
export const config = {
  runtime: 'edge'
}

export default function handler(request) {
  const country = request.geo.country
  return new Response(`Hello from ${country}!`)
}
```

Edge Computing 对前端的意义：
- **更低延迟**：代码在离用户最近的节点执行，响应时间从几百毫秒降到几十毫秒
- **全球分布**：不需要自己搭建多区域服务器，平台自动处理
- **成本更低**：按请求计费，对于流量波动大的应用更经济

## AI 辅助前端开发

2022 年以来，AI 工具正在深刻改变前端开发方式。

**GitHub Copilot**：基于大语言模型的代码补全工具，能根据注释和上下文自动补全代码。它不只补全语法，还能理解你的意图，生成完整的函数、组件甚至测试用例。

**v0.dev**：Vercel 推出的 AI UI 生成工具。你用自然语言描述想要的界面，它就能生成可直接使用的 React + Tailwind CSS 代码。

```text
# 你给 v0.dev 的描述：
"设计一个现代化的登录页面，有邮箱和密码输入框，
支持 GitHub 和 Google 第三方登录，
底部有忘记密码和注册链接"

# v0.dev 会生成完整的 React 组件代码
# 包含响应式布局、表单验证、样式
```

<ClientOnly>
<InfoBox type="warning" title="AI 工具的边界">
AI 辅助工具非常强大，但它们也有局限：<br><br>
<strong>生成的代码需要审查</strong>：AI 可能生成有安全漏洞或性能问题的代码，开发者必须审查和测试。<br><br>
<strong>不能替代理解</strong>：如果你不理解 React 或 Vue 的基础概念，就无法判断 AI 生成的代码是否正确。<br><br>
<strong>架构决策仍需人类</strong>：选择技术栈、设计系统架构、规划项目结构等高层决策，目前仍需要人类开发者的经验判断。
</InfoBox>
</ClientOnly>

## 前端的未来方向

从本书介绍的历史演进来看，前端开发有几个明确的发展方向：

```javascript
// 方向 1：向服务器回归
// 从纯客户端 SPA -> SSR -> RSC -> Edge Functions
// 但不是回到 PHP 时代，而是"智能的"服务端渲染

// 方向 2：编译时优化
// 从运行时框架（React/Vue）-> 编译时框架（Svelte/SolidJS）
// 把工作从运行时转移到编译时，提升性能

// 方向 3：跨平台融合
// Web + 移动端 + 桌面端 + 小程序
// 一套代码，多个平台

// 方向 4：AI 深度集成
// 从辅助补全 -> 自动化开发流程
// AI 生成组件、编写测试、修复 Bug
```

- **WebAssembly**：让前端能运行接近原生性能的代码，C++、Rust、Go 等语言的代码可以直接在浏览器中运行
- **Web Components**：浏览器原生的组件标准，让不同框架的组件可以互操作
- **Micro Frontends**：微前端架构，让大型团队可以独立开发和部署各自的模块

<ClientOnly>
<ExpandableDetail title="深入了解：前端开发者的技能树">
现代前端开发者需要掌握的技能远比十年前多：<br><br>
<strong>核心</strong>：HTML、CSS、JavaScript（ES6+）<br>
<strong>框架</strong>：React 或 Vue（至少精通一个）<br>
<strong>语言</strong>：TypeScript<br>
<strong>构建</strong>：Vite / Webpack、Babel<br>
<strong>测试</strong>：Jest / Vitest、Cypress / Playwright<br>
<strong>CSS</strong>：Tailwind CSS、CSS Modules、Styled Components<br>
<strong>状态管理</strong>：Redux / Zustand / Pinia<br>
<strong>SSR</strong>：Next.js / Nuxt<br>
<strong>部署</strong>：Vercel / Cloudflare / Docker<br>
<strong>工具</strong>：Git、CI/CD、AI 辅助工具<br><br>
虽然看起来很多，但不需要一开始就全部掌握。从 HTML、CSS、JavaScript 和一个框架开始，逐步扩展技能树。
</ExpandableDetail>
</ClientOnly>

## 测试你的理解

<ClientOnly>
<Quiz question="SSR（服务端渲染）解决的核心问题是什么？" :options="[
  { text: '让页面更美观', correct: false },
  { text: '首屏加载速度和 SEO', correct: true },
  { text: '减少服务器成本', correct: false },
  { text: '替代前端框架', correct: false }
]" explanation="SSR 在服务器端把页面渲染成完整 HTML 后返回给浏览器。用户一打开就能看到内容，不需要等待 JavaScript 下载和执行，解决了首屏白屏问题。同时搜索引擎爬虫能直接看到完整内容，解决了 SPA 的 SEO 困境。" />
</ClientOnly>

<ClientOnly>
<Quiz question="React Server Components 的核心思想是什么？" :options=" [
  { text: '把所有组件都放在服务器端运行', correct: false },
  { text: '取消客户端渲染，回到传统服务端渲染', correct: false },
  { text: '区分服务器组件和客户端组件，数据获取在服务器，交互在客户端', correct: true },
  { text: '让 React 只能运行在 Node.js 服务器上', correct: false }
]" explanation="RSC 把组件分为服务器组件和客户端组件。服务器组件直接在服务器端执行，可以访问数据库等服务器资源，不需要把数据通过 API 传递。客户端组件负责用户交互。这大幅减少了发送到浏览器的 JavaScript 量。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="完整回顾：前端演进时间线">
<strong>1991</strong> -- HTML 诞生，Web 页面只有文字<br>
<strong>1995</strong> -- JavaScript 诞生，网页有了简单交互<br>
<strong>1996</strong> -- CSS 发布，样式与结构分离<br>
<strong>2006</strong> -- jQuery 发布，DOM 操作变得简单<br>
<strong>2008</strong> -- Chrome 发布，V8 引擎让 JavaScript 变快<br>
<strong>2010</strong> -- AngularJS 发布，前端进入框架化时代<br>
<strong>2011</strong> -- Backbone.js，前端 MVC 先驱<br>
<strong>2013</strong> -- React 发布，Virtual DOM 改变一切<br>
<strong>2014</strong> -- Vue 发布，渐进式方案登场；Webpack 发布<br>
<strong>2015</strong> -- ES6 正式发布，JavaScript 现代化<br>
<strong>2016</strong> -- Angular 2 发布；Svelte 发布<br>
<strong>2017</strong> -- Next.js 兴起，SSR 回归<br>
<strong>2019</strong> -- React Hooks 发布<br>
<strong>2020</strong> -- Vite 发布，构建工具革命<br>
<strong>2022</strong> -- React Server Components；AI 辅助开发兴起<br>
<strong>2023+</strong> -- 编译时框架、Edge Computing、AI 深度集成
</ExpandableDetail>
</ClientOnly>

从 1991 年的第一张网页到今天的 AI 辅助开发，前端走过了三十多年的历程。每一代技术都是对上一代问题的回答，每一个新工具都让开发者能更高效地构建更好的用户体验。前端的故事还在继续，而你，已经是这个故事的一部分了。
