# Web 的诞生

## 从一个想法开始

1991 年，Tim Berners-Lee 在 CERN（欧洲核子研究中心）提出了 World Wide Web 的概念。他的初衷非常朴素：让全球的科学家能够方便地共享和浏览文档。他发明了 HTML（超文本标记语言）、HTTP（超文本传输协议）和 URL（统一资源定位符），搭建了第一个 Web 服务器，也写出了第一个浏览器。

那时候的"网页"，就是一堆带超链接的文本。没有图片，没有样式，没有交互。但就是这样一个简单的想法，彻底改变了人类获取信息的方式。

<ClientOnly>
<Timeline :events="[
  { year: &quot;1991&quot;, text: &quot;Tim Berners-Lee 发布第一个网站&quot; },
  { year: &quot;1993&quot;, text: &quot;Mosaic 浏览器发布，支持图片显示&quot; },
  { year: &quot;1994&quot;, text: &quot;W3C 成立，Netscape 浏览器诞生&quot; },
  { year: &quot;1995&quot;, text: &quot;JavaScript 诞生（ Brendan Eich 用 10 天完成）&quot; },
  { year: &quot;1996&quot;, text: &quot;CSS1 规范发布，样式与结构分离&quot; },
  { year: &quot;1997&quot;, text: &quot;HTML 4.0 规范发布&quot; },
  { year: &quot;1999&quot;, text: &quot;XMLHttpRequest 出现，Ajax 概念萌芽&quot; },
  { year: &quot;2000&quot;, text: &quot;XHTML 1.0 发布&quot; },
  { year: &quot;2004&quot;, text: &quot;Gmail 上线，Ajax 技术正式进入大众视野&quot; },
  { year: &quot;2005&quot;, text: &quot;jQuery 发布前夕，前端进入新时代&quot; }
]" />
</ClientOnly>

## 三剑客：HTML / CSS / JavaScript

Web 前端的三大核心技术，各自负责不同的职责，共同构成了我们看到的每一个网页。

<ClientOnly>
<ConceptCard title="三端分工" icon="💡">
<strong>HTML（结构）</strong>：定义页面的内容和语义，比如标题、段落、链接、图片。它是页面的骨架。<br><br>
<strong>CSS（样式）</strong>：控制页面的外观，比如颜色、布局、字体。它是页面的皮肤。<br><br>
<strong>JavaScript（行为）</strong>：实现页面的交互逻辑，比如点击响应、数据请求、动画效果。它是页面的肌肉。
</ConceptCard>
</ClientOnly>

这三者的关系可以用一个类比来理解：HTML 就像一栋房子的钢筋混凝土结构，CSS 是装修风格和涂料，JavaScript 则是水电系统和智能开关。

```html
<!-- HTML: 定义结构 -->
<div class="card">
  <h2>文章标题</h2>
  <p>文章内容...</p>
  <button onclick="toggle()">展开</button>
</div>
```

```css
/* CSS: 定义样式 */
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
```

```javascript
// JavaScript: 定义行为
function toggle() {
  const card = document.querySelector('.card')
  card.classList.toggle('expanded')
}
```

## DOM -- 页面的树形结构

浏览器加载 HTML 后，会将其解析为一个树形数据结构，叫做 **DOM（Document Object Model）**。每个 HTML 标签都会变成树上的一个**节点（Node）**。

<ClientOnly>
<ConceptCard title="DOM 是什么" icon="💡">
DOM 是浏览器为 HTML 文档提供的编程接口。它把文档表示为一棵树，每个标签、文本、属性都是树上的节点。JavaScript 通过 DOM API 来读取和修改页面内容，而不需要重新加载整个页面。
</ConceptCard>
</ClientOnly>

一棵简单的 DOM 树看起来像这样：

```
document
 └── html
      ├── head
      │    └── title
      │         └── "我的页面"
      └── body
           ├── h1
           │    └── "欢迎"
           └── p
                └── "这是一段文字"
```

DOM 树中的节点分为几种类型：

- **元素节点**：对应 HTML 标签，如 `<div>`、`<p>`
- **文本节点**：标签内的文本内容
- **属性节点**：标签上的属性，如 `class="card"`

## 用原生 JavaScript 操作 DOM

早期的 Web 开发，一切都要手动操作 DOM。下面是一个典型的例子：

<ClientOnly>
<CodeBlock lang="javascript" title="原生 DOM 操作">
// 获取元素
var title = document.getElementById('title')
var btn = document.getElementById('myButton')
var list = document.getElementById('myList')

// 修改内容
title.textContent = '新的标题'

// 添加事件监听
btn.addEventListener('click', function () {
  // 创建新元素
  var newItem = document.createElement('li')
  newItem.textContent = '新的列表项 ' + Date.now()

  // 插入到列表末尾
  list.appendChild(newItem)

  // 修改样式
  newItem.style.backgroundColor = '#e0f0ff'
})

// 删除元素
function removeItem(el) {
  el.parentNode.removeChild(el)
}
</CodeBlock>
</ClientOnly>

这段代码在今天看来很基础，但在当时已经是"高级操作"了。每一个交互都需要手动获取元素、手动创建节点、手动绑定事件。

## 早期开发的痛点

如果你在 2000 年代初做前端开发，你会面临以下几个核心问题：

**浏览器兼容性噩梦**

不同的浏览器对 Web 标准的实现差异巨大。IE、Firefox、Chrome、Safari 各自为政。同一个 DOM 操作，在一个浏览器上能跑，在另一个上就报错。

```javascript
// 获取元素 -- 不同浏览器的写法不同
var el = document.getElementById('myDiv')          // 标准
var el = document.all['myDiv']                     // IE 旧版
var el = document.querySelector('#myDiv')          // 现代浏览器
```

**手动 DOM 操作繁琐**

添加一个列表项需要写 5-6 行代码。如果要实现拖拽排序，代码量会呈指数级增长。DOM 操作不仅写起来啰嗦，性能也是问题 -- 频繁操作 DOM 会导致页面重排重绘。

**缺乏模块化**

没有 npm，没有 import/export，所有 JavaScript 代码都通过 `<script>` 标签全局加载。项目一大，变量命名冲突、代码混乱就成了家常便饭。

```html
<!-- 全部依赖都在全局作用域 -->
<script src="lib/jquery-1.4.js"></script>
<script src="lib/plugin-a.js"></script>
<script src="lib/plugin-b.js"></script>
<script src="app.js"></script>
```

**没有开发工具**

没有 Chrome DevTools，没有热更新，没有 Source Map。调试就是 `alert()` 和 `console.log()`。

<ClientOnly>
<InfoBox type="warning" title="历史背景">
2005 年以前，前端开发者被称为"页面仔"，地位远不如后端工程师。前端代码被认为是"不需要架构"的简单胶水代码。这种观念直到 jQuery 和后续框架的出现才开始改变。
</InfoBox>
</ClientOnly>

## 测试你的理解

<ClientOnly>
<Quiz question="DOM 是什么？" :options="[
  { text: '一种编程语言', correct: false },
  { text: '浏览器对 HTML 文档的树形表示，提供编程接口', correct: true },
  { text: '一个 JavaScript 库', correct: false },
  { text: 'HTML 的新版本标准', correct: false }
]" explanation="DOM（Document Object Model）是浏览器将 HTML 文档解析后生成的树形数据结构，它提供了一套编程接口，让 JavaScript 可以动态读取和修改页面内容。" />
</ClientOnly>

<ClientOnly>
<Quiz question="HTML、CSS、JavaScript 分别负责什么？" :options="[
  { text: 'HTML 负责样式，CSS 负责结构，JS 负责行为', correct: false },
  { text: 'HTML 负责结构，CSS 负责样式，JS 负责行为', correct: true },
  { text: '三者可以互相替代', correct: false },
  { text: 'HTML 负责行为，CSS 负责逻辑，JS 负责结构', correct: false }
]" explanation="HTML 定义页面结构（骨架），CSS 定义外观样式（皮肤），JavaScript 定义交互行为（肌肉）。三者各司其职，共同构建 Web 页面。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="深入了解：JavaScript 的 10 天传奇">
JavaScript 由 Brendan Eich 在 Netscape 公司仅用 10 天就完成了初版设计。这个"仓促"的决定带来了许多历史包袱，比如 <code>typeof null === &quot;object&quot;</code> 这个著名的 bug，以及 <code>==</code> 和 <code>===</code> 两套相等比较运算符。<br><br>
Netscape 当时的竞争对手是微软的 JScript。为了标准化，两家公司推动成立了 ECMA 组织，制定了 ECMAScript 标准。我们今天说的 ES6、ES2020 等，都是这个标准的不同版本。<br><br>
尽管 JavaScript 诞生仓促，但它成为了浏览器唯一原生支持的编程语言，这一地位从未被动摇。
</ExpandableDetail>
</ClientOnly>

早期 Web 开发的这些痛点，催生了一个革命性的解决方案。下一章，我们将看到 jQuery 如何用一个简单的 <code>$()</code> 函数，改变了整个前端开发的世界。
