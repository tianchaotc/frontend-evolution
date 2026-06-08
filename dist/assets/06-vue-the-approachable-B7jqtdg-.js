import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c,u as l}from"./index-ICnETHV6.js";var u={class:`markdown-body`},d={class:`shiki github-dark`,style:{"background-color":`#24292e`,color:`#e1e4e8`},tabindex:`0`},f={class:``},p={class:`line`},m={style:{color:`#E1E4E8`}},h={class:`shiki github-dark`,style:{"background-color":`#24292e`,color:`#e1e4e8`},tabindex:`0`},g={class:``},_={class:`line`},v={style:{color:`#E1E4E8`}},y={class:`line`},b={style:{color:`#E1E4E8`}},x={class:`shiki github-dark`,style:{"background-color":`#24292e`,color:`#e1e4e8`},tabindex:`0`},S={class:``},C={class:`line`},w={style:{color:`#E1E4E8`}},T={class:`shiki github-dark`,style:{"background-color":`#24292e`,color:`#e1e4e8`},tabindex:`0`},E={class:``},D={class:`line`},O={style:{color:`#E1E4E8`}},k={},A=``,j=a({__name:`06-vue-the-approachable`,setup(a,{expose:k}){return k({frontmatter:{},excerpt:void 0}),(a,k)=>{let A=t(`concept-card`),j=t(`client-only`),M=t(`info-box`),N=t(`code-compare`),P=t(`quiz`),F=t(`expandable-detail`);return s(),i(`div`,u,[k[31]||=c(`h1`,{id:`vue-%E2%80%93-%E6%B8%90%E8%BF%9B%E5%BC%8F%E6%96%B9%E6%A1%88`,tabindex:`-1`},`Vue – 渐进式方案`,-1),k[32]||=c(`h2`,{id:`%E5%B0%A4%E9%9B%A8%E6%BA%AA%E7%9A%84%E8%83%8C%E6%99%AF`,tabindex:`-1`},`尤雨溪的背景`,-1),k[33]||=c(`p`,null,[c(`strong`,null,`尤雨溪（Evan You）`),n(` 是 Vue.js 的创造者。在创建 Vue 之前，他在 Google 工作，参与了 Google Creative Lab 的多个项目，包括用 AngularJS 构建内部工具。这段经历让他对 AngularJS 有了深入的理解，也让他看到了它的不足。`)],-1),k[34]||=c(`p`,null,`尤雨溪发现 AngularJS 对于很多项目来说过于重量级了。他想要一个更轻量、更易上手的框架——既保留 AngularJS 的数据绑定和组件化优点，又不需要强制引入 TypeScript、依赖注入等重型概念。`,-1),k[35]||=c(`p`,null,[n(`2013 年 10 月，尤雨溪开始构思一个新框架；2014 年 2 月，`),c(`strong`,null,`Vue 0.x`),n(` 正式发布。它的名字来自法语单词 “vue”，意为"视图"。`)],-1),k[36]||=c(`h2`,{id:`%E6%B8%90%E8%BF%9B%E5%BC%8F%E6%A1%86%E6%9E%B6%E7%9A%84%E8%AE%BE%E8%AE%A1%E5%93%B2%E5%AD%A6`,tabindex:`-1`},`渐进式框架的设计哲学`,-1),k[37]||=c(`p`,null,`Vue 从一开始就确立了**渐进式框架（Progressive Framework）**的定位。`,-1),e(j,null,{default:r(()=>[e(A,{title:`渐进式框架`,icon:`💡`},{default:r(()=>[...k[0]||=[c(`strong`,null,`渐进式`,-1),n(`意味着 Vue 不强制你接受它的全部。你可以根据项目需求，逐步引入 Vue 的功能：`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 1. 只用核心库做简单的数据绑定（类似 jQuery 的增强版）`,-1),c(`br`,null,null,-1),n(` 2. 加上路由（Vue Router）做单页应用`,-1),c(`br`,null,null,-1),n(` 3. 加上状态管理（Pinia）做复杂应用`,-1),c(`br`,null,null,-1),n(` 4. 加上构建工具链做工程化开发`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 每一步都是可选的，你不需要一开始就学完所有东西。 `,-1)]]),_:1})]),_:1}),c(`pre`,d,[c(`code`,f,[k[5]||=o(`<span class="line"><span style="color:#6A737D;">&lt;!-- 最简单的 Vue：一个 CDN 引入就够了 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#B392F0;"> placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;输入点什么...&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
`,6),c(`span`,p,[k[1]||=c(`span`,{style:{color:`#E1E4E8`}},`  <`,-1),k[2]||=c(`span`,{style:{color:`#85E89D`}},`p`,-1),c(`span`,m,`>`+l(a.message)+`</`,1),k[3]||=c(`span`,{style:{color:`#85E89D`}},`p`,-1),k[4]||=c(`span`,{style:{color:`#E1E4E8`}},`>`,-1)]),k[6]||=o(`
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/vue@3&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  Vue.</span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">    data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> { message: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>`,22)])]),k[38]||=o(`<p>这种渐进式的设计让 Vue 的学习曲线非常平缓。你可以从一个 HTML 文件开始，逐步增加复杂度，而不需要一开始就搭建完整的工程化环境。</p><h2 id="%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86" tabindex="-1">响应式原理</h2><p>Vue 最核心的特性是<strong>响应式系统</strong>——当数据变化时，UI 自动更新。</p><h3 id="vue-2%EF%BC%9Aobject.defineproperty" tabindex="-1">Vue 2：Object.defineProperty</h3><p>Vue 2 使用 <code class="">Object.defineProperty</code> 来实现数据劫持：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// Vue 2 的响应式原理简化版</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> observe</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> key</span><span style="color:#F97583;"> in</span><span style="color:#E1E4E8;"> obj) {</span></span>
<span class="line"><span style="color:#F97583;">    let</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj[key]</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, key, {</span></span>
<span class="line"><span style="color:#B392F0;">      get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`读取了 \${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">}: \${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">        return</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#B392F0;">      set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">} 变为: \${</span><span style="color:#E1E4E8;">newValue</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue</span></span>
<span class="line"><span style="color:#6A737D;">        // 触发视图更新</span></span>
<span class="line"><span style="color:#B392F0;">        updateView</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> { message: </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">data.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;World&#39;</span><span style="color:#6A737D;"> // 自动触发 set，更新视图</span></span>
<span class="line"></span></code></pre>`,6),e(j,null,{default:r(()=>[e(M,{type:`warning`,title:`Vue 2 响应式的局限`},{default:r(()=>[...k[7]||=[c(`strong`,null,`无法检测新增属性`,-1),n(`：直接给对象添加新属性不会触发响应式更新，需要使用 `,-1),c(`code`,{class:``},`this.$set(obj, 'newKey', value)`,-1),n(`。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),c(`strong`,null,`无法检测数组索引修改`,-1),n(`：`,-1),c(`code`,{class:``},`this.arr[0] = 'new'`,-1),n(` 不会触发更新，需要用 `,-1),c(`code`,{class:``},`this.$set`,-1),n(` 或数组方法。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 这些限制是 Vue 2 最常见的"坑"，也是 Vue 3 改进的重点方向。 `,-1)]]),_:1})]),_:1}),k[39]||=o(`<h3 id="vue-3%EF%BC%9Aproxy" tabindex="-1">Vue 3：Proxy</h3><p>Vue 3 用 <code class="">Proxy</code> 替代了 <code class="">Object.defineProperty</code>，解决了上述所有问题：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// Vue 3 的响应式原理简化版</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> Proxy</span><span style="color:#E1E4E8;">(obj, {</span></span>
<span class="line"><span style="color:#B392F0;">    get</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`读取了 \${</span><span style="color:#B392F0;">String</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> Reflect.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(target, key, receiver)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">receiver</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#B392F0;">String</span><span style="color:#9ECBFF;">(</span><span style="color:#E1E4E8;">key</span><span style="color:#9ECBFF;">)</span><span style="color:#9ECBFF;">} 变为: \${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">      const</span><span style="color:#79B8FF;"> result</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> Reflect.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(target, key, value, receiver)</span></span>
<span class="line"><span style="color:#B392F0;">      updateView</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> data</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({ message: </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">data.message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;World&#39;</span><span style="color:#6A737D;">     // 触发 set</span></span>
<span class="line"><span style="color:#E1E4E8;">data.newKey </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;new&#39;</span><span style="color:#6A737D;">         // 也能检测到了！</span></span>
<span class="line"></span></code></pre><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// Vue 3 还提供了 ref 和 reactive</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, reactive } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ref：基本类型的响应式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">count.value</span><span style="color:#F97583;">++</span><span style="color:#6A737D;"> // .value 访问和修改</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// reactive：对象的响应式</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> state</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  todos: []</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">state.name </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;李四&#39;</span><span style="color:#6A737D;"> // 直接修改，不需要 .value</span></span>
<span class="line"></span></code></pre><h2 id="%E6%A8%A1%E6%9D%BF-vs-jsx-%E7%9A%84%E8%AE%BE%E8%AE%A1%E9%80%89%E6%8B%A9" tabindex="-1">模板 vs JSX 的设计选择</h2><p>Vue 选择了<strong>模板语法</strong>作为默认的视图定义方式，而 React 选择了 JSX。</p>`,6),c(`pre`,h,[c(`code`,g,[k[15]||=o(`<span class="line"><span style="color:#6A737D;">&lt;!-- Vue 模板：基于 HTML 扩展 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo-app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;newTodo&quot;</span><span style="color:#B392F0;"> @keyup.enter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;addTodo&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;addTodo&quot;</span><span style="color:#E1E4E8;">&gt;添加&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">li</span><span style="color:#B392F0;"> v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(todo, index) in todos&quot;</span><span style="color:#B392F0;"> :key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;"> type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;checkbox&quot;</span><span style="color:#B392F0;"> v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.done&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
`,16),c(`span`,_,[k[8]||=o(`<span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> :class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ done: todo.done }&quot;</span>`,5),c(`span`,v,`>`+l(a.todo.text)+`</`,1),k[9]||=c(`span`,{style:{color:`#85E89D`}},`span`,-1),k[10]||=c(`span`,{style:{color:`#E1E4E8`}},`>`,-1)]),k[16]||=o(`
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;removeTodo(index)&quot;</span><span style="color:#E1E4E8;">&gt;删除&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
`,7),c(`span`,y,[k[11]||=c(`span`,{style:{color:`#E1E4E8`}},`    <`,-1),k[12]||=c(`span`,{style:{color:`#85E89D`}},`p`,-1),c(`span`,b,`>共 `+l(a.todos.length)+` 项，未完成 `+l(a.remaining)+` 项</`,1),k[13]||=c(`span`,{style:{color:`#85E89D`}},`p`,-1),k[14]||=c(`span`,{style:{color:`#E1E4E8`}},`>`,-1)]),k[17]||=o(`
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      newTodo: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      todos: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#B392F0;">    remaining</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      return</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.todos.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">t</span><span style="color:#F97583;"> =&gt;</span><span style="color:#F97583;"> !</span><span style="color:#E1E4E8;">t.done).</span><span style="color:#79B8FF;">length</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    addTodo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">      if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.newTodo.</span><span style="color:#B392F0;">trim</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.todos.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ text: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.newTodo, done: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#79B8FF;">        this</span><span style="color:#E1E4E8;">.newTodo </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#B392F0;">    removeTodo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.todos.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.done</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  text-decoration</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">line-through</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#999</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>`,74)])]),k[40]||=o(`<p>Vue 的模板语法有明显的优势：</p><ul><li><strong>HTML 兼容</strong>：模板本质上是 HTML，前端设计师可以无缝参与</li><li><strong>IDE 支持更好</strong>：模板的结构更规则，代码提示和错误检查更容易实现</li><li><strong>性能优化</strong>：编译时可以做更多静态分析和优化</li></ul><p>当然，Vue 也完全支持 JSX，当你需要更灵活的逻辑时，可以自由切换。</p><h2 id="%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%EF%BC%88.vue%EF%BC%89" tabindex="-1">单文件组件（.vue）</h2><p>Vue 引入了**单文件组件（Single File Component，SFC）**的概念，把模板、逻辑、样式放在一个 <code class="">.vue</code> 文件中。</p>`,5),c(`pre`,x,[c(`code`,S,[k[21]||=o(`<span class="line"><span style="color:#6A737D;">&lt;!-- Counter.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;decrement&quot;</span><span style="color:#E1E4E8;">&gt;-&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
`,8),c(`span`,C,[k[18]||=o(`<span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#B392F0;"> class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;count&quot;</span>`,5),c(`span`,w,`>`+l(a.count)+`</`,1),k[19]||=c(`span`,{style:{color:`#85E89D`}},`span`,-1),k[20]||=c(`span`,{style:{color:`#E1E4E8`}},`>`,-1)]),k[22]||=o(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;increment&quot;</span><span style="color:#E1E4E8;">&gt;+&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> { count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">() { </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#B392F0;">    decrement</span><span style="color:#E1E4E8;">() { </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.counter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  gap</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.count</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1.5</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>`,56)])]),k[41]||=o(`<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">&lt;!-- 使用组件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;计数器应用&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Counter</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Counter</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Counter</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Counter </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./Counter.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { Counter }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span></code></pre><p><code class="">scoped</code> 样式确保样式只作用于当前组件，不会影响其他组件。这解决了 CSS 全局污染的老问题。</p><h2 id="vue-2-options-api-vs-vue-3-composition-api" tabindex="-1">Vue 2 Options API vs Vue 3 Composition API</h2><p>Vue 3 引入了 <strong>Composition API</strong>，与 Vue 2 的 Options API 形成了鲜明对比：</p>`,4),e(j,null,{default:r(()=>[e(N,{tabs:[{label:`Vue 2 Options API`,code:`export default {
  data() {
    return {
      count: 0,
      doubleCount: 0
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log("组件已挂载")
  },
  beforeUnmount() {
    console.log("即将卸载")
  }
}`,lang:`javascript`},{label:`Vue 3 Composition API`,code:`import { ref, computed, onMounted, onBeforeUnmount } from "vue"

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    }

    onMounted(() => {
      console.log("组件已挂载")
    })

    onBeforeUnmount(() => {
      console.log("即将卸载")
    })

    return { count, doubleCount, increment }
  }
}`,lang:`javascript`}]})]),_:1}),k[42]||=o(`<p>Composition API 的最大优势是<strong>逻辑复用</strong>。同一个功能的代码可以封装成一个函数，在多个组件间共享：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// useCounter.js -- 可复用的计数逻辑</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> useCounter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">initialValue</span><span style="color:#F97583;"> =</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(initialValue)</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> doubleCount</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> count.value </span><span style="color:#F97583;">*</span><span style="color:#79B8FF;"> 2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> increment</span><span style="color:#E1E4E8;">() { count.value</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> decrement</span><span style="color:#E1E4E8;">() { count.value</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#F97583;">  function</span><span style="color:#B392F0;"> reset</span><span style="color:#E1E4E8;">() { count.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> initialValue }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> { count, doubleCount, increment, decrement, reset }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre>`,2),c(`pre`,T,[c(`code`,E,[k[27]||=o(`<span class="line"><span style="color:#6A737D;">&lt;!-- 在组件中使用 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCounter } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./useCounter&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">doubleCount</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">increment</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> useCounter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
`,18),c(`span`,D,[k[23]||=c(`span`,{style:{color:`#E1E4E8`}},`    <`,-1),k[24]||=c(`span`,{style:{color:`#85E89D`}},`p`,-1),c(`span`,O,`>计数: `+l(a.count)+`，双倍: `+l(a.doubleCount)+`</`,1),k[25]||=c(`span`,{style:{color:`#85E89D`}},`p`,-1),k[26]||=c(`span`,{style:{color:`#E1E4E8`}},`>`,-1)]),k[28]||=o(`
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;increment&quot;</span><span style="color:#E1E4E8;">&gt;+1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>`,8)])]),k[43]||=o(`<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88-vue-%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%89%B9%E5%88%AB%E6%B5%81%E8%A1%8C" tabindex="-1">为什么 Vue 在中国特别流行</h2><p>Vue 在中国前端社区的占有率长期领先，原因有多个方面：</p><ul><li><strong>文档友好</strong>：Vue 的官方文档（尤其英文和中文版）质量极高，清晰易懂。对于初学者来说，好的文档就是最好的老师</li><li><strong>渐进式设计</strong>：不需要一开始就理解整个框架，从 CDN 引入做简单页面，到完整工程化项目，每一步都很平滑</li><li><strong>阿里/饿了么采用</strong>：饿了么前端团队是 Vue 的早期深度用户，贡献了 Element UI 等优秀组件库，推动了 Vue 在国内的普及</li><li><strong>中文社区活跃</strong>：Vue 有非常活跃的中文社区，大量教程、视频、书籍都是中文的</li><li><strong>学习曲线平缓</strong>：相比 Angular 的全套 TypeScript + RxJS + 依赖注入，Vue 对初学者更友好</li></ul>`,3),e(j,null,{default:r(()=>[e(M,{type:`tip`,title:`Vue 在全球`},{default:r(()=>[...k[29]||=[n(` 虽然 Vue 在中国的占有率很高，但它在全球范围内也是非常流行的框架。GitStar 上 Vue 是最受欢迎的前端框架之一。Vue 3 发布后，在日本、韩国、欧洲等地区的采用率也在持续增长。 `,-1)]]),_:1})]),_:1}),k[44]||=c(`h2`,{id:`%E6%B5%8B%E8%AF%95%E4%BD%A0%E7%9A%84%E7%90%86%E8%A7%A3`,tabindex:`-1`},`测试你的理解`,-1),e(j,null,{default:r(()=>[e(P,{question:`Vue 的渐进式框架是什么意思？`,options:[{text:`Vue 的版本会逐渐升级`,correct:!1},{text:`可以根据需求逐步引入 Vue 的功能，不需要一次性学完`,correct:!0},{text:`Vue 的性能会随时间慢慢提升`,correct:!1},{text:`Vue 只能用于小型项目`,correct:!1}],explanation:`渐进式意味着 Vue 不强制你使用它的全部功能。你可以从 CDN 引入做简单页面，逐步加入路由、状态管理、构建工具等。每一步都是可选的，按需引入即可。`})]),_:1}),e(j,null,{default:r(()=>[e(P,{question:`Vue 3 用 Proxy 替代 Object.defineProperty 的主要好处是什么？`,options:[{text:`代码更简洁`,correct:!1},{text:`可以检测对象属性的新增和删除`,correct:!0},{text:`运行速度更快`,correct:!1},{text:`支持 IE 浏览器`,correct:!1}],explanation:`Object.defineProperty 只能劫持已有的属性，无法检测新增或删除的属性。Proxy 可以拦截对象上的任何操作，包括属性的添加、删除、枚举等，解决了 Vue 2 中响应式的各种限制。`})]),_:1}),e(j,null,{default:r(()=>[e(F,{title:`深入了解：Pinia 与状态管理`},{default:r(()=>[...k[30]||=[n(` Vue 3 推荐的状态管理方案是 `,-1),c(`strong`,null,`Pinia`,-1),n(`，它是 Vuex 的继任者。Pinia 的设计更简洁，没有 mutations，直接通过 actions 修改状态。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` Pinia 的核心概念：State（状态）、Getters（计算属性）、Actions（方法）。它的 API 非常直观，TypeScript 支持也更好。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 在中小型项目中，你甚至可能不需要 Pinia——Vue 3 的 Composition API 配合 provide/inject 就能解决大部分状态共享问题。这也是"渐进式"的体现。 `,-1)]]),_:1})]),_:1}),k[45]||=c(`p`,null,`Vue 用渐进式的设计和友好的 API，让前端开发变得更加平易近人。但无论选择 React 还是 Vue，现代前端开发都离不开强大的工具链。下一章，我们将深入探索前端工具链的演进——从任务运行器到模块打包器，再到下一代构建工具 Vite。`,-1)])}}});export{j as default,A as excerpt,k as frontmatter};