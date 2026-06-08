import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./index-ICnETHV6.js";var l={class:`markdown-body`},u={},d=``,f=a({__name:`05-react-changes-everything`,setup(a,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(a,u)=>{let d=t(`concept-card`),f=t(`client-only`),p=t(`info-box`),m=t(`timeline`),h=t(`code-compare`),g=t(`quiz`),_=t(`expandable-detail`);return s(),i(`div`,l,[u[5]||=o(`<h1 id="react-%E6%94%B9%E5%8F%98%E4%B8%80%E5%88%87" tabindex="-1">React 改变一切</h1><h2 id="facebook-%E7%9A%84%E5%86%85%E9%83%A8%E9%9C%80%E6%B1%82" tabindex="-1">Facebook 的内部需求</h2><p>2011 年，Facebook 面临一个棘手的问题：消息通知系统的 UI 总是不同步。当用户在 Instagram 上点赞时，通知计数不会实时更新；当消息状态变化时，界面显示的信息可能是过时的。工程师们不断修补 Bug，但问题的根源在于<strong>手动 DOM 操作</strong>太容易出错——你需要记住每一个状态变化对应的 DOM 更新，一旦遗漏就会出现不一致。</p><p>2013 年 5 月，Facebook 的工程师 <strong>Jordan Walke</strong> 发布了一个内部项目叫 <strong>FaxJS</strong>，后来更名为 <strong>React</strong>。他的思路很激进：与其手动操作 DOM 来反映状态变化，不如<strong>把整个 UI 当作状态的函数</strong>——给定一个状态，就能计算出完整的 UI。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// React 的核心理念：UI = f(state)</span></span>
<span class="line"><span style="color:#6A737D;">// 状态变化时，重新计算整个 UI，而不是手动修改 DOM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#9ECBFF;"> \`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;h1&gt;\${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">title</span><span style="color:#9ECBFF;">}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;p&gt;通知数: \${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">notifications</span><span style="color:#9ECBFF;">}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        \${</span><span style="color:#E1E4E8;">state</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">messages</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">map</span><span style="color:#9ECBFF;">(</span><span style="color:#79B8FF;">msg</span><span style="color:#F97583;"> =&gt;</span><span style="color:#9ECBFF;"> \`&lt;li&gt;\${</span><span style="color:#E1E4E8;">msg</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">text</span><span style="color:#9ECBFF;">}&lt;/li&gt;\`</span><span style="color:#9ECBFF;">).</span><span style="color:#B392F0;">join</span><span style="color:#9ECBFF;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">      &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 状态变化时，重新调用 App 函数</span></span>
<span class="line"><span style="color:#E1E4E8;">state.notifications </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 5</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> newUI</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">(state)</span></span>
<span class="line"><span style="color:#6A737D;">// 然后找到差异并更新 DOM</span></span>
<span class="line"></span></code></pre><p>这个理念听起来简单，但 Facebook 团队知道，如果每次都重新渲染整个页面，性能会很糟糕。他们需要一个聪明的方式来计算&quot;新旧 UI 的差异&quot;。这就是 <strong>Virtual DOM</strong> 诞生的原因。</p><h2 id="virtual-dom%EF%BC%9A%E6%A0%B8%E5%BF%83%E6%80%9D%E6%83%B3" tabindex="-1">Virtual DOM：核心思想</h2>`,7),e(f,null,{default:r(()=>[e(d,{title:`Virtual DOM`,icon:`💡`},{default:r(()=>[...u[0]||=[c(`strong`,null,`Virtual DOM（虚拟 DOM）`,-1),n(`是用 JavaScript 对象表示 DOM 结构的一种方式。当状态变化时，React 会创建一棵新的虚拟 DOM 树，然后与旧树进行比较（diff），找出真正需要更新的部分（patch），最后只把差异应用到真实 DOM 上。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 核心流程：`,-1),c(`strong`,null,`创建新虚拟 DOM -> Diff 比较 -> 最小化 DOM 更新`,-1)]]),_:1})]),_:1}),u[6]||=o(`<p>Virtual DOM 的工作原理可以用三个步骤来理解：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// 1. 用 JavaScript 对象描述 DOM 结构</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> virtualDOM</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: { className: </span><span style="color:#9ECBFF;">&#39;container&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { type: </span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">, props: {}, children: [</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { type: </span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">, props: {}, children: [</span><span style="color:#9ECBFF;">&#39;World&#39;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 状态变化后，生成新的虚拟 DOM</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> newVirtualDOM</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: { className: </span><span style="color:#9ECBFF;">&#39;container&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { type: </span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">, props: {}, children: [</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">] },      </span><span style="color:#6A737D;">// 没变</span></span>
<span class="line"><span style="color:#E1E4E8;">    { type: </span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">, props: {}, children: [</span><span style="color:#9ECBFF;">&#39;Hello World&#39;</span><span style="color:#E1E4E8;">] }   </span><span style="color:#6A737D;">// 只改了这一个</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. Diff 比较发现只有第二个子节点的文本变了</span></span>
<span class="line"><span style="color:#6A737D;">// 于是只更新这个文本节点，而不是重新渲染整个 div</span></span>
<span class="line"></span></code></pre><p>为什么不直接操作真实 DOM？因为 DOM 操作非常昂贵。每次修改 DOM，浏览器都需要重新计算布局（reflow）、重新绘制（repaint）。Virtual DOM 把多次 DOM 操作合并成一次，大幅提升了性能。</p><h2 id="jsx-%E4%BA%89%E8%AE%AE%EF%BC%9Ahtml-in-javascript%EF%BC%9F" tabindex="-1">JSX 争议：HTML in JavaScript？</h2><p>React 引入了一种叫 <strong>JSX</strong> 的语法，它允许在 JavaScript 中直接写类似 HTML 的代码。这在当时引发了巨大争议。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// JSX 语法：看起来像 HTML，但其实是 JavaScript</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> element</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;greeting&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;Hello, {name}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;欢迎回来！&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// JSX 会被编译成 React.createElement 调用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> element</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> React.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  { className: </span><span style="color:#9ECBFF;">&#39;greeting&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  React.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Hello, &#39;</span><span style="color:#E1E4E8;">, name),</span></span>
<span class="line"><span style="color:#E1E4E8;">  React.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;p&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;欢迎回来！&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span></code></pre>`,6),e(f,null,{default:r(()=>[e(p,{type:`warning`,title:`JSX 的争议`},{default:r(()=>[...u[1]||=[c(`strong`,null,`反对者的理由`,-1),n(`：JSX 把 HTML（结构）和 JavaScript（逻辑）混在一起，违背了"关注点分离"原则。前端开发十几年来一直强调结构、样式、行为分离，JSX 好像开倒车。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),c(`strong`,null,`支持者的理由`,-1),n(`：组件本身就是一个完整的关注点。一个按钮的结构、样式和行为本来就应该放在一起管理，分开反而增加了维护成本。JSX 让组件的逻辑更加内聚。 `,-1)]]),_:1})]),_:1}),u[7]||=o(`<p>事实证明，JSX 赢得了这场争论。如今不仅 React 使用 JSX，Vue 的模板编译器也支持 JSX，SolidJS、Preact 等框架也采用了类似的语法。</p><h2 id="%E7%BB%84%E4%BB%B6%E5%8C%96%E6%80%9D%E7%BB%B4" tabindex="-1">组件化思维</h2><p>React 最深远的影响之一是推动了<strong>组件化</strong>成为前端开发的核心范式。组件是一个独立的、可复用的 UI 单元，它封装了自己的结构、逻辑和样式。</p><h3 id="class-component" tabindex="-1">Class Component</h3><p>React 最初主要使用 Class Component：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> React, { Component } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> TodoList</span><span style="color:#F97583;"> extends</span><span style="color:#B392F0;"> Component</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    super</span><span style="color:#E1E4E8;">(props)</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.state </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputValue: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  addTodo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setState</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: [</span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.todos, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.inputValue],</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputValue: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  render</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">          value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.inputValue}</span></span>
<span class="line"><span style="color:#B392F0;">          onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setState</span><span style="color:#E1E4E8;">({ inputValue: e.target.value })}</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.addTodo}&gt;添加&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.todos.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">todo</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{i}&gt;{todo}&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><h3 id="function-component" tabindex="-1">Function Component</h3><p>后来 React 引入了 Function Component，配合 Hooks，代码变得更简洁：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useState } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> TodoList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">todos</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setTodos</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">inputValue</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setInputValue</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#B392F0;"> addTodo</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    setTodos</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">todos, inputValue])</span></span>
<span class="line"><span style="color:#B392F0;">    setInputValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span></span>
<span class="line"><span style="color:#B392F0;">        value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{inputValue}</span></span>
<span class="line"><span style="color:#B392F0;">        onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setInputValue</span><span style="color:#E1E4E8;">(e.target.value)}</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{addTodo}&gt;添加&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {todos.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">todo</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">i</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> key</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{i}&gt;{todo}&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ))}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><p>对比两段代码，Function Component 明显更简洁，也更容易理解。</p><h2 id="%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81" tabindex="-1">单向数据流</h2><p>React 采用了<strong>单向数据流</strong>（One-way Data Binding），数据只能从父组件流向子组件。</p>`,12),e(f,null,{default:r(()=>[e(d,{title:`单向数据流`,icon:`💡`},{default:r(()=>[...u[2]||=[n(` 在 React 中，数据通过 `,-1),c(`strong`,null,`props`,-1),n(` 从父组件传递给子组件。子组件不能直接修改 props，只能通过调用父组件传递的回调函数来"通知"父组件更新数据。这种方式让数据流向清晰可追踪，便于调试。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 与 AngularJS 的双向绑定不同，React 明确区分了"读"（props）和"写"（回调函数），使状态变化更容易预测。 `,-1)]]),_:1})]),_:1}),u[8]||=o(`<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;计数器: {count}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span><span style="color:#6A737D;">/* 回调函数向下传递 */</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">Counter</span><span style="color:#B392F0;"> count</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{count} </span><span style="color:#B392F0;">onIncrement</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setCount</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">+</span><span style="color:#79B8FF;"> 1</span><span style="color:#E1E4E8;">)} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件：只能读 props，不能直接修改</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Counter</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">onIncrement</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> onClick</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{onIncrement}&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      点击了 {count} 次</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><p>这种设计的好处是：当 Bug 出现时，你可以从根组件开始，沿着数据流一步步追踪，找出哪里的数据出了问题。相比之下，双向绑定的数据流像蜘蛛网一样交织在一起，排查问题非常困难。</p><h2 id="react-hooks%EF%BC%882019%EF%BC%89" tabindex="-1">React Hooks（2019）</h2><p>2019 年 2 月，React 16.8 引入了 <strong>Hooks</strong>，这是 React 历史上最大的一次范式转变。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// useState：管理状态</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setCount</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// useEffect：处理副作用（类似生命周期）</span></span>
<span class="line"><span style="color:#B392F0;">useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  document.title </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> \`点击了 \${</span><span style="color:#E1E4E8;">count</span><span style="color:#9ECBFF;">} 次\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 返回清理函数</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.title </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;React App&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}, [count]) </span><span style="color:#6A737D;">// 依赖数组：只在 count 变化时执行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 自定义 Hook：提取可复用的逻辑</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> useLocalStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">initialValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setValue</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useState</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> saved</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> localStorage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> saved </span><span style="color:#F97583;">?</span><span style="color:#79B8FF;"> JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(saved) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> initialValue</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  useEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    localStorage.</span><span style="color:#B392F0;">setItem</span><span style="color:#E1E4E8;">(key, </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(value))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, [key, value])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> [value, setValue]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用自定义 Hook</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setName</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useLocalStorage</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{name} </span><span style="color:#B392F0;">onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#FFAB70;">e</span><span style="color:#F97583;"> =&gt;</span><span style="color:#B392F0;"> setName</span><span style="color:#E1E4E8;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre>`,5),e(f,null,{default:r(()=>[e(m,{events:[{year:`2013`,text:`React 发布，Class Component 为主`},{year:`2016`,text:`React 16 发布，引入 Fiber 架构`},{year:`2018`,text:`React 16.6 发布，引入 React.memo 和 Context API`},{year:`2019`,text:`React 16.8 发布，Hooks 正式引入`},{year:`2020`,text:`React 17 发布，平滑升级，支持渐进式迁移`},{year:`2022`,text:`React 18 发布，引入并发渲染和自动批处理`}]})]),_:1}),u[9]||=o(`<p>Hooks 解决了 Class Component 的几个痛点：</p><ul><li><strong>逻辑复用</strong>：不再需要 HOC（高阶组件）或 Render Props，自定义 Hook 就够了</li><li><strong>状态逻辑分散</strong>：Class Component 中同一个功能的代码可能分散在 <code class="">componentDidMount</code>、<code class="">componentDidUpdate</code>、<code class="">componentWillUnmount</code> 中，Hooks 让它们聚合在一起</li><li><strong><code class="">this</code> 绑定问题</strong>：Function Component 不需要处理 <code class="">this</code> 的指向</li></ul><h2 id="jquery-vs-react%EF%BC%9A%E4%B8%A4%E7%A7%8D%E8%8C%83%E5%BC%8F" tabindex="-1">jQuery vs React：两种范式</h2>`,3),e(f,null,{default:r(()=>[e(h,{tabs:[{label:`jQuery`,code:`// jQuery: 手动操作 DOM
document.getElementById("add-btn")
  .addEventListener("click", function() {
  // 获取输入值
  var input = document.getElementById("todo-input")
  var text = input.value
  
  // 创建新元素
  var li = document.createElement("li")
  li.textContent = text
  
  // 手动插入 DOM
  document.getElementById("todo-list")
    .appendChild(li)
  
  // 手动清空输入框
  input.value = ""
  
  // 手动更新计数
  var count = document.getElementById("count")
  count.textContent = parseInt(count.textContent) + 1
})`,lang:`javascript`},{label:`React`,code:`// React: 声明式，状态驱动 UI
function TodoApp() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    setTodos([...todos, input])
    setInput("")
  }

  return (
    <div>
      <input value={input}
        onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <p>共 {todos.length} 项</p>
    </div>
  )
}`,lang:`jsx`}]})]),_:1}),u[10]||=o(`<p>从上面的对比可以看出：jQuery 告诉浏览器&quot;怎么做&quot;（命令式），React 告诉浏览器&quot;要什么&quot;（声明式）。当应用变得复杂时，命令式代码会变得难以维护，而声明式代码始终保持清晰。</p><h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88-react-%E2%80%9C%E8%B5%A2%E4%BA%86%E2%80%9D" tabindex="-1">为什么 React “赢了”</h2><p>React 发布后迅速成为最流行的前端框架，原因有很多：</p><ul><li><strong>生态系统</strong>：React 的 npm 生态极其丰富，几乎所有 UI 需求都能找到成熟的库</li><li><strong>React Native</strong>：让前端开发者可以用 React 语法开发原生移动应用，极大扩展了应用范围</li><li><strong>社区和人才</strong>：React 开发者数量庞大，招聘和学习都很方便</li><li><strong>大厂背书</strong>：Facebook（Meta）、Netflix、Airbnb、Discord 等众多公司采用</li><li><strong>持续创新</strong>：从 Virtual DOM 到 Hooks，再到 Server Components，React 始终在引领方向</li></ul>`,4),e(f,null,{default:r(()=>[e(p,{type:`tip`,title:`React 的影响力`},{default:r(()=>[...u[3]||=[n(` React 不仅是一个框架，更是一种思维范式。"组件化"、"声明式 UI"、"单向数据流"这些概念现在已经深入前端开发的方方面面。即使你最终选择了 Vue 或其他框架，理解 React 的思想也会让你成为更好的前端开发者。 `,-1)]]),_:1})]),_:1}),u[11]||=c(`h2`,{id:`%E6%B5%8B%E8%AF%95%E4%BD%A0%E7%9A%84%E7%90%86%E8%A7%A3`,tabindex:`-1`},`测试你的理解`,-1),e(f,null,{default:r(()=>[e(g,{question:`Virtual DOM 解决的核心问题是什么？`,options:[{text:`让页面加载更快`,correct:!1},{text:`用 JavaScript 对象描述 DOM，通过 diff 算法最小化真实 DOM 操作`,correct:!0},{text:`替代 HTML，直接用 JavaScript 写页面`,correct:!1},{text:`让 CSS 可以用 JavaScript 编写`,correct:!1}],explanation:`Virtual DOM 的核心是用 JavaScript 对象来描述 DOM 结构。状态变化时，React 生成新的虚拟 DOM 树，与旧树进行 diff 比较，找出真正需要变化的部分，然后只把差异应用到真实 DOM 上。这避免了不必要的 DOM 操作，提升了性能。`})]),_:1}),e(f,null,{default:r(()=>[e(g,{question:`React 采用单向数据流的主要好处是什么？`,options:[{text:`性能更好`,correct:!1},{text:`代码更短`,correct:!1},{text:`数据流向清晰，便于追踪和调试`,correct:!0},{text:`不需要写回调函数`,correct:!1}],explanation:`单向数据流让数据只能从父组件流向子组件，状态变化的路径是单向的、可预测的。当出现问题时，你可以沿着数据流从上到下追踪，找出哪里出了问题。相比之下，双向绑定的数据流向复杂，调试更困难。`})]),_:1}),e(f,null,{default:r(()=>[e(_,{title:`深入了解：React Fiber 架构`},{default:r(()=>[...u[4]||=[n(` React 16 引入了 Fiber 架构，这是一个完全重写的协调引擎。在旧架构中，React 的更新是同步的——一旦开始渲染，就无法中断。如果组件树很大，渲染过程会阻塞主线程，导致页面卡顿。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` Fiber 架构把渲染工作拆分成一个个小的任务单元（Fiber 节点），每个单元可以在完成后让出主线程，让浏览器处理用户输入、动画等紧急任务。这就是 React 18 中"并发渲染"的基础。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 简单来说，Fiber 让 React 能够"边渲染边响应"，而不是"渲染时卡住一切"。这在复杂应用中对用户体验的提升非常明显。 `,-1)]]),_:1})]),_:1}),u[12]||=c(`p`,null,`React 用 Virtual DOM 和组件化思想重新定义了前端开发，但前端框架的创新远不止于此。下一章，我们将看到 Vue 如何用"渐进式"的设计哲学和更友好的 API，让前端开发变得更加平易近人。`,-1)])}}});export{f as default,d as excerpt,u as frontmatter};