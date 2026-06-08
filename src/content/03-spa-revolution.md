# SPA 革命

## 从 MPA 到 SPA

在传统 Web 中，每一次用户操作（点击链接、提交表单）都会触发一次完整的页面加载。浏览器向服务器请求一个全新的 HTML 页面，然后重新渲染整个页面。这就是 **MPA（Multi-Page Application，多页应用）** 的工作方式。

SPA 的思路完全不同：**整个应用只有一个 HTML 页面**，所有的交互都在这个页面内完成。JavaScript 负责根据用户操作动态更新页面内容，而不是每次都重新加载整个页面。

<ClientOnly>
<ConceptCard title="SPA vs MPA" icon="💡">
<strong>MPA（多页应用）</strong>：每次操作都加载新页面，浏览器负责导航和页面切换。传统的服务器渲染网站都是 MPA。<br><br>
<strong>SPA（单页应用）</strong>：只有一个页面，JavaScript 动态更新内容。页面切换不触发完整刷新，体验更流畅。Gmail、Twitter、YouTube 等都是 SPA。
</ConceptCard>
</ClientOnly>

## Ajax：改变一切的技术

2004 年，Google 发布了 **Gmail**。用户在 Gmail 中点击邮件时，页面不会刷新，邮件内容直接出现在下方。这背后的秘密武器就是 **Ajax（Asynchronous JavaScript and XML）**。

Ajax 的核心是 <code>XMLHttpRequest</code> 对象，它允许 JavaScript 在不刷新页面的情况下，向服务器发送请求并接收数据。

```javascript
// 传统方式：每次操作都刷新整个页面
window.location.href = '/inbox?page=2'

// Ajax 方式：只更新需要的部分
var xhr = new XMLHttpRequest()
xhr.open('GET', '/api/inbox?page=2')
xhr.onload = function () {
  var data = JSON.parse(xhr.responseText)
  // 只更新邮件列表，页面其他部分不变
  document.getElementById('email-list').innerHTML = renderEmails(data)
}
xhr.send()
```

<ClientOnly>
<Timeline :events="[
  { year: &quot;1999&quot;, text: &quot;Microsoft 在 IE5 中引入 XMLHttpRequest 对象&quot; },
  { year: &quot;2004&quot;, text: &quot;Gmail 上线，Ajax 技术进入大众视野&quot; },
  { year: &quot;2005&quot;, text: &quot;Jesse James Garrett 提出 Ajax 概念并命名&quot; },
  { year: &quot;2005&quot;, text: &quot;Google Maps 发布，展示 Ajax 的强大潜力&quot; },
  { year: &quot;2006&quot;, text: &quot;jQuery 发布，让 Ajax 调用变得简单&quot; }
]" />
</ClientOnly>

Ajax 是 SPA 的技术基础。没有 Ajax，SPA 就不可能实现。

## 前端路由：页面切换的革命

SPA 只有一个 HTML 页面，那如何实现"不同页面"之间的切换呢？答案是**前端路由**。

前端路由有两种主要方式：

### Hash 路由

通过 URL 中的 <code>#</code> 部分来标识不同的"页面"。<code>#</code> 后面的变化不会触发页面刷新。

```javascript
// 监听 hash 变化
window.addEventListener('hashchange', function () {
  var hash = window.location.hash
  switch (hash) {
    case '#/inbox':
      showInbox()
      break
    case '#/sent':
      showSent()
      break
    case '#/settings':
      showSettings()
      break
  }
})

// 手动切换路由
window.location.hash = '#/inbox'
```

```html
<!-- 使用 hash 路由的 SPA -->
<a href="#/inbox">收件箱</a>
<a href="#/sent">已发送</a>
<a href="#/settings">设置</a>

<div id="app">
  <!-- JavaScript 根据 hash 动态渲染内容 -->
</div>
```

### History API

HTML5 引入了 <code>History API</code>，可以修改 URL 而不触发页面刷新，同时 URL 看起来更干净（没有 <code>#</code>）。

```javascript
// 使用 History API
history.pushState({ page: 'inbox' }, '', '/inbox')

// 监听浏览器前进/后退
window.addEventListener('popstate', function (e) {
  console.log('用户导航到:', e.state)
})

// 拦截链接点击
document.addEventListener('click', function (e) {
  if (e.target.matches('a[data-link]')) {
    e.preventDefault()
    var url = e.target.getAttribute('href')
    history.pushState(null, '', url)
    // 根据 URL 渲染对应的内容
    renderPage(url)
  }
})
```

<ClientOnly>
<InfoBox type="tip" title="Hash 路由 vs History API">
<strong>Hash 路由</strong>的优点是兼容性好（支持 IE8+），缺点是 URL 不太美观（带 # 号）。<br><br>
<strong>History API</strong> 的优点是 URL 干净美观，缺点是需要服务器配合（所有路由都要返回同一个 HTML 文件）。现代前端框架（Vue Router、React Router）默认使用 History API。
</InfoBox>
</ClientOnly>

## Backbone.js：前端框架的先驱

2010 年，Jeremy Ashkenas 发布了 **Backbone.js**。它是最早将 **MVC 模式**引入前端的框架之一，为后续的 Angular、React、Vue 奠定了思想基础。

```javascript
// Backbone Model -- 数据层
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  toggle: function () {
    this.set('completed', !this.get('completed'))
  }
})

// Backbone View -- 视图层
var TodoView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click .toggle': 'toggleTodo'
  },
  toggleTodo: function () {
    this.model.toggle()
  },
  render: function () {
    this.$el.html(this.model.get('title'))
    return this
  }
})
```

Backbone 非常轻量（核心文件只有 7KB），但它提出了重要的概念：

- **Model**：管理数据和业务逻辑
- **View**：负责 UI 渲染和用户交互
- **Collection**：管理 Model 的集合
- **Router**：处理 URL 路由

这些概念至今仍影响着现代前端框架的设计。

## 前端的新角色

SPA 革命让前端从"切页面"变成了"做应用"。前端开发者不再只是写静态页面和简单交互，而是需要思考：

- **应用状态管理**：数据从哪里来，存在哪里，如何同步
- **路由设计**：URL 和页面状态如何对应
- **组件化**：如何把复杂的 UI 拆分成可复用的组件
- **性能优化**：首屏加载速度、代码分割、懒加载

```javascript
// 前端开始有了"应用层"的概念
var App = {
  state: {
    currentUser: null,
    messages: [],
    currentView: 'inbox'
  },
  init: function () {
    this.loadData()
    this.setupRouter()
    this.render()
  },
  render: function () {
    switch (this.state.currentView) {
      case 'inbox':
        this.renderInbox(this.state.messages)
        break
      case 'compose':
        this.renderCompose()
        break
    }
  }
}
```

## SPA 带来的新问题

SPA 解决了页面刷新的体验问题，但也引入了新的挑战。

<ClientOnly>
<InfoBox type="danger" title="SPA 的三个核心难题">
<strong>1. 状态管理</strong>：所有数据都在内存中，如何保证数据的一致性？多个组件共享数据时如何同步？页面崩溃后数据丢失怎么办？<br><br>
<strong>2. SEO 困境</strong>：搜索引擎爬虫看到的是空的 HTML，JavaScript 生成的内容无法被索引。这在内容型网站中是致命问题。<br><br>
<strong>3. 首屏性能</strong>：用户需要先下载并执行所有 JavaScript 后才能看到内容，首屏加载时间变长。在 3G 网络下体验尤其糟糕。
</InfoBox>
</ClientOnly>

这些问题推动了后续的技术演进：Vue 和 React 的 Virtual DOM 优化了渲染性能，SSR（服务端渲染）和 SSG（静态站点生成）解决了 SEO 问题，Pinia/Vuex/Redux 解决了状态管理问题。

## 测试你的理解

<ClientOnly>
<Quiz question="SPA（单页应用）的核心特征是什么？" :options="[
  { text: '页面加载速度比 MPA 快', correct: false },
  { text: '整个应用只有一个 HTML 页面，JavaScript 动态更新内容', correct: true },
  { text: '不需要服务器', correct: false },
  { text: '必须使用 Hash 路由', correct: false }
]" explanation="SPA 的核心特征是整个应用只有一个 HTML 页面，所有页面切换都通过 JavaScript 动态更新 DOM 来完成，而不是传统的页面跳转。SPA 并不保证加载速度快，也需要服务器提供 API。" />
</ClientOnly>

<ClientOnly>
<Quiz question="前端路由 History API 的主要优势是什么？" :options="[
  { text: '兼容性更好', correct: false },
  { text: 'URL 更干净美观，没有 # 号', correct: true },
  { text: '不需要服务器配合', correct: false },
  { text: '性能比 Hash 路由好', correct: false }
]" explanation="History API 的 URL 不带 # 号，看起来更自然（如 /inbox 而非 #/inbox）。但它的代价是需要服务器配合 -- 所有路由都必须返回同一个 HTML 文件。兼容性方面，Hash 路由反而更好（支持 IE8+）。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="深入了解：Gmail 如何改变了 Web">
2004 年 Gmail 发布时，大多数人用的是 Outlook 或 Yahoo Mail，每次查看邮件都要等待整个页面刷新。Gmail 用 Ajax 实现了邮件的即时加载，让 Web 邮件的体验接近桌面软件。<br><br>
Gmail 的成功证明了 Web 可以做到和桌面应用一样流畅的交互。这直接推动了 Ajax 技术的普及，也让开发者开始思考：既然 Web 可以做邮件客户端，那它还能做什么？这个思考最终催生了整个 SPA 生态。
</ExpandableDetail>
</ClientOnly>

SPA 革命让前端角色发生了根本变化。但 Backbone.js 太轻量，jQuery 太原始，开发者需要更强大的工具来管理复杂的应用逻辑。下一章，我们将看到 Google 如何用 AngularJS 引入了 MVVM 模式和双向数据绑定，让前端开发进入了框架化时代。
