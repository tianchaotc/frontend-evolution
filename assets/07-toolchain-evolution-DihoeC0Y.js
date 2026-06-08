import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./index-ICnETHV6.js";var l={class:`markdown-body`},u={},d=``,f=a({__name:`07-toolchain-evolution`,setup(a,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(a,u)=>{let d=t(`timeline`),f=t(`client-only`),p=t(`concept-card`),m=t(`info-box`),h=t(`quiz`),g=t(`expandable-detail`);return s(),i(`div`,l,[u[3]||=o(`<h1 id="%E5%B7%A5%E5%85%B7%E9%93%BE%E6%BC%94%E8%BF%9B" tabindex="-1">工具链演进</h1><h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7" tabindex="-1">为什么需要构建工具</h2><p>早期的前端开发很简单——写几个 HTML、CSS、JavaScript 文件，扔到服务器上就行了。但随着 Web 应用越来越复杂，原始的开发方式遇到了一系列问题：</p><ul><li><strong>文件太多</strong>：一个大型项目可能有几十甚至上百个 JavaScript 文件，手动管理 <code class="">&lt;script&gt;</code> 标签的加载顺序是噩梦</li><li><strong>新语法兼容</strong>：ES6+ 的箭头函数、模板字符串、解构赋值等新特性，老浏览器根本不认识</li><li><strong>性能优化</strong>：文件合并、压缩、缓存策略、按需加载，手动处理不现实</li><li><strong>CSS 问题</strong>：全局样式污染、代码重复、缺乏变量和混入</li></ul><p>构建工具就是为了解决这些问题而生的。它们构成了现代前端开发的<strong>工具链（Toolchain）</strong>。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// 没有构建工具时，你的 HTML 可能长这样：</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;lib/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;lib/underscore.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;lib/backbone.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;lib/ember.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/utils.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/models/user.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/models/todo.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/views/header.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/views/todo-list.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/views/footer.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// &lt;script src=&quot;app/app.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#6A737D;">// 加载顺序错一个就报错，依赖关系全靠人脑记忆</span></span>
<span class="line"></span></code></pre><h2 id="grunt-%2F-gulp%EF%BC%9A%E4%BB%BB%E5%8A%A1%E8%BF%90%E8%A1%8C%E5%99%A8%E6%97%B6%E4%BB%A3%EF%BC%882012%EF%BC%89" tabindex="-1">Grunt / Gulp：任务运行器时代（2012）</h2><p>最早的前端工具是<strong>任务运行器（Task Runner）</strong>，它们的核心功能是自动化重复性工作。</p><h3 id="grunt" tabindex="-1">Grunt</h3><p><strong>Grunt</strong>（2012）使用 JSON 配置文件定义任务：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// Gruntfile.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">grunt</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  grunt.</span><span style="color:#B392F0;">initConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    pkg: grunt.file.</span><span style="color:#B392F0;">readJSON</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;package.json&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#6A737D;">    // 压缩 JavaScript</span></span>
<span class="line"><span style="color:#E1E4E8;">    uglify: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        src: </span><span style="color:#9ECBFF;">&#39;src/**/*.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dest: </span><span style="color:#9ECBFF;">&#39;dist/app.min.js&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 编译 SASS</span></span>
<span class="line"><span style="color:#E1E4E8;">    sass: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dist: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        files: {</span></span>
<span class="line"><span style="color:#9ECBFF;">          &#39;dist/style.css&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;src/style.scss&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#6A737D;">    // 监听文件变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      scripts: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        files: [</span><span style="color:#9ECBFF;">&#39;src/**/*.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        tasks: [</span><span style="color:#9ECBFF;">&#39;uglify&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  grunt.</span><span style="color:#B392F0;">loadNpmTasks</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;grunt-contrib-uglify&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  grunt.</span><span style="color:#B392F0;">loadNpmTasks</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;grunt-contrib-sass&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  grunt.</span><span style="color:#B392F0;">registerTask</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&#39;uglify&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;sass&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;watch&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><h3 id="gulp" tabindex="-1">Gulp</h3><p><strong>Gulp</strong>（2013）用代码替代配置，使用流式处理，速度更快：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// gulpfile.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">dest</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">watch</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">series</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gulp&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> sass</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gulp-sass&#39;</span><span style="color:#E1E4E8;">)(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sass&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> uglify</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gulp-uglify&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> concat</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gulp-concat&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 编译 SASS</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> styles</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/styles/**/*.scss&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">sass</span><span style="color:#E1E4E8;">({ outputStyle: </span><span style="color:#9ECBFF;">&#39;compressed&#39;</span><span style="color:#E1E4E8;"> }))</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">dest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/css&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 压缩并合并 JS</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> scripts</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#B392F0;"> src</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/js/**/*.js&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;app.min.js&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">uglify</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">pipe</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">dest</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dist/js&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听文件变化</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> watchFiles</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#B392F0;">  watch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/styles/**/*.scss&#39;</span><span style="color:#E1E4E8;">, styles)</span></span>
<span class="line"><span style="color:#B392F0;">  watch</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/js/**/*.js&#39;</span><span style="color:#E1E4E8;">, scripts)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.default </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> series</span><span style="color:#E1E4E8;">(styles, scripts, watchFiles)</span></span>
<span class="line"></span></code></pre>`,14),e(f,null,{default:r(()=>[e(d,{events:[{year:`2012`,text:`Grunt 发布，任务运行器概念兴起`},{year:`2013`,text:`Gulp 发布，基于流的任务运行器，速度更快`},{year:`2014`,text:`Webpack 发布，模块打包器时代开始`},{year:`2015`,text:`Babel 普及，ES6+ 代码转译成为标配`},{year:`2016`,text:`Webpack 2 发布，支持 Tree Shaking 和 ES Modules`},{year:`2020`,text:`Vite 发布，基于 ESM 的新一代构建工具`}]})]),_:1}),u[4]||=o(`<p>Grunt 和 Gulp 解决了&quot;自动化&quot;问题，但它们有一个根本性的局限：<strong>不理解模块关系</strong>。它们只是按顺序执行任务，不知道文件之间的依赖关系。</p><h2 id="webpack%EF%BC%9A%E6%A8%A1%E5%9D%97%E6%89%93%E5%8C%85%E5%99%A8%EF%BC%882014%EF%BC%89" tabindex="-1">Webpack：模块打包器（2014）</h2><p><strong>Webpack</strong> 的出现彻底改变了前端开发。它不仅仅是一个任务运行器，而是一个<strong>模块打包器（Module Bundler）</strong>——它能理解文件之间的依赖关系，把所有资源打包成优化后的 bundle。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// webpack.config.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> path</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#6A737D;">            // 输出文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">jsx</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,              </span><span style="color:#6A737D;">// 处理 JavaScript/JSX</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#9ECBFF;"> /</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,              </span><span style="color:#6A737D;">// 处理 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">scss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,             </span><span style="color:#6A737D;">// 处理 SASS</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span><span style="color:#9ECBFF;">&#39;style-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;sass-loader&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#9ECBFF;"> /</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 处理图片</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;asset/resource&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><p>Webpack 的核心概念：</p><ul><li><strong>Entry</strong>：应用的入口文件，Webpack 从这里开始分析依赖</li><li><strong>Output</strong>：打包后的输出文件</li><li><strong>Loader</strong>：转换非 JavaScript 文件（CSS、图片、TypeScript 等）</li><li><strong>Plugin</strong>：执行更广泛的任务（代码压缩、环境变量注入、HTML 生成等）</li></ul><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// Webpack 能理解 import/export 依赖关系</span></span>
<span class="line"><span style="color:#6A737D;">// src/index.js（入口）</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { formatDate } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./utils/date.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fetchUsers } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./api/users.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#9ECBFF;"> &#39;./styles/main.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Webpack 会递归分析所有 import，把它们打包成一个文件</span></span>
<span class="line"><span style="color:#6A737D;">// 最终输出 bundle.js 包含了所有代码和依赖</span></span>
<span class="line"></span></code></pre><h2 id="babel%EF%BC%9Aes6%2B-%E8%BD%AC%E8%AF%91" tabindex="-1">Babel：ES6+ 转译</h2><p>2015 年，ES6（ES2015）正式发布，带来了大量新语法。但浏览器的支持参差不齐，<strong>Babel</strong> 应运而生——它是一个 JavaScript 编译器，能把新语法转换成老浏览器能运行的代码。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// 你写的代码（ES6+）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> greet</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> message</span><span style="color:#F97583;"> =</span><span style="color:#9ECBFF;"> \`Hello, \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}!\`</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> message</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">first</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">rest</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">    this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  sayHi</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#9ECBFF;"> \`Hi, I&#39;m \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Babel 转译后的代码（ES5）</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#B392F0;"> greet</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#B392F0;"> greet</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  var</span><span style="color:#E1E4E8;"> message </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;Hello, &#39;</span><span style="color:#F97583;"> +</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;!&#39;</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> message</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> first </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;"> 1</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> rest </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#79B8FF;">  this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">User</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">sayHi</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#9ECBFF;"> &quot;Hi, I&#39;m &quot;</span><span style="color:#F97583;"> +</span><span style="color:#79B8FF;"> this</span><span style="color:#E1E4E8;">.name</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><p>Babel 通过**插件（Plugin）<strong>和</strong>预设（Preset）**来配置：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// .babelrc</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;presets&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;targets&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&gt; 0.25%, not dead&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#79B8FF;">      &quot;useBuiltIns&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;usage&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;@babel/preset-react&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#79B8FF;">  &quot;plugins&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;@babel/plugin-proposal-optional-chaining&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><h2 id="eslint%EF%BC%9A%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83" tabindex="-1">ESLint：代码规范</h2><p>随着项目变大，代码风格的一致性变得至关重要。<strong>ESLint</strong>（2013）是目前最流行的 JavaScript 代码检查工具。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// .eslintrc.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    browser: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    es2021: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    node: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;eslint:recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;@vue/eslint-config-typescript&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;no-unused-vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,        </span><span style="color:#6A737D;">// 禁止未使用的变量</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;no-console&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">,             </span><span style="color:#6A737D;">// 警告 console.log</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;semi&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;never&#39;</span><span style="color:#E1E4E8;">],       </span><span style="color:#6A737D;">// 不加分号</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;quotes&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;single&#39;</span><span style="color:#E1E4E8;">],    </span><span style="color:#6A737D;">// 使用单引号</span></span>
<span class="line"><span style="color:#9ECBFF;">    &#39;indent&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]            </span><span style="color:#6A737D;">// 2 空格缩进</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><p>ESLint 不仅检查代码风格，还能发现潜在的 Bug（比如未使用的变量、未处理的 Promise 等）。配合编辑器的实时提示，能在写代码时就发现问题。</p><h2 id="typescript%EF%BC%9A%E7%B1%BB%E5%9E%8B%E5%AE%89%E5%85%A8%EF%BC%882012%EF%BC%89" tabindex="-1">TypeScript：类型安全（2012）</h2><p><strong>TypeScript</strong> 由微软的 <strong>Anders Hejlsberg</strong>（C# 的设计者）创造，2012 年发布。它是 JavaScript 的超集，添加了<strong>静态类型系统</strong>。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// JavaScript：运行时才发现错误</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 运行时得到 &quot;hello42&quot;，不会报错</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// TypeScript：编译时就能发现错误</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> add</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 编译错误：类型 &quot;string&quot; 不能赋值给类型 &quot;number&quot;</span></span>
<span class="line"></span></code></pre><p>TypeScript 的核心优势：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// 接口：定义对象的形状</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> User</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#FFAB70;">  id</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> number</span></span>
<span class="line"><span style="color:#FFAB70;">  name</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  email</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> string</span></span>
<span class="line"><span style="color:#FFAB70;">  avatar</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#6A737D;">  // 可选属性</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 泛型：编写灵活且类型安全的代码</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> first</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">arr</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">[])</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> T</span><span style="color:#F97583;"> |</span><span style="color:#79B8FF;"> undefined</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> arr[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> num</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> first</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])    </span><span style="color:#6A737D;">// 类型：number</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> str</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> first</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">])   </span><span style="color:#6A737D;">// 类型：string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 类型推断：很多时候不需要手动标注</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> user</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> User</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: </span><span style="color:#9ECBFF;">&#39;zhangsan@example.com&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 缺少 avatar 不会报错，因为它是可选的</span></span>
<span class="line"><span style="color:#6A737D;">// 但缺少 id 或 name 会报错</span></span>
<span class="line"></span></code></pre><p>TypeScript 已经成为现代前端开发的标配。React、Vue、Angular 都提供了一流的 TypeScript 支持。</p><h2 id="vite%EF%BC%9A%E4%B8%8B%E4%B8%80%E4%BB%A3%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%EF%BC%882020%EF%BC%89" tabindex="-1">Vite：下一代构建工具（2020）</h2><p>2020 年，Vue 的作者尤雨溪发布了 <strong>Vite</strong>（法语&quot;快速&quot;的意思）。它解决了 Webpack 在大型项目中启动慢、热更新慢的问题。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;"># 创建 Vite 项目</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> create</span><span style="color:#9ECBFF;"> vite@latest</span><span style="color:#9ECBFF;"> my-app</span><span style="color:#79B8FF;"> --</span><span style="color:#79B8FF;"> --template</span><span style="color:#9ECBFF;"> vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或 React 模板</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#9ECBFF;"> create</span><span style="color:#9ECBFF;"> vite@latest</span><span style="color:#9ECBFF;"> my-app</span><span style="color:#79B8FF;"> --</span><span style="color:#79B8FF;"> --template</span><span style="color:#9ECBFF;"> react</span></span>
<span class="line"></span></code></pre><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// vite.config.js -- 配置比 Webpack 简单得多</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#B392F0;"> defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;@&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/src&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span></code></pre><h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88-vite-%E6%AF%94-webpack-%E5%BF%AB" tabindex="-1">为什么 Vite 比 Webpack 快</h2>`,27),e(f,null,{default:r(()=>[e(p,{title:`Vite 的核心优势`,icon:`💡`},{default:r(()=>[...u[0]||=[c(`strong`,null,`Webpack 的问题`,-1),n(`：启动时需要把所有模块打包成 bundle，项目越大，启动越慢。1000 个文件可能要等几十秒。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),c(`strong`,null,`Vite 的方案`,-1),n(`：开发时不打包。利用浏览器原生的 ES Modules，按需加载模块。只有用户实际访问的页面才会编译对应的代码，启动时间从几十秒降到几百毫秒。 `,-1)]]),_:1})]),_:1}),u[5]||=o(`<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// Webpack 的工作方式（简化）</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 读取所有源文件</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 递归分析所有 import 依赖</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 转译所有文件（Babel）</span></span>
<span class="line"><span style="color:#6A737D;">// 4. 打包成一个或多个 bundle</span></span>
<span class="line"><span style="color:#6A737D;">// 5. 启动开发服务器</span></span>
<span class="line"><span style="color:#6A737D;">// --- 这个过程可能需要 30 秒 ---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Vite 的工作方式（简化）</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 启动开发服务器（几乎瞬间完成）</span></span>
<span class="line"><span style="color:#6A737D;">// 2. 当浏览器请求某个模块时，按需编译</span></span>
<span class="line"><span style="color:#6A737D;">// 3. 利用 esbuild 极速转译（比 Babel 快 10-100 倍）</span></span>
<span class="line"><span style="color:#6A737D;">// --- 启动时间 &lt; 1 秒 ---</span></span>
<span class="line"></span></code></pre><p>Vite 的两大技术支柱：</p><ul><li><strong>Native ESM</strong>：浏览器原生支持 ES Modules，Vite 不需要打包，直接把 import 链路交给浏览器处理</li><li><strong>esbuild</strong>：用 Go 语言编写的极速编译器，比 Babel 快 10-100 倍。Vite 用它来做依赖预构建</li></ul><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8;" tabindex="0"><code class=""><span class="line"><span style="color:#6A737D;">// 浏览器中的 Native ESM</span></span>
<span class="line"><span style="color:#6A737D;">// 当浏览器遇到这个 import 时：</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { formatDate } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> &#39;./utils/date.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 浏览器会自己去请求这个文件</span></span>
<span class="line"><span style="color:#6A737D;">// 服务器只返回编译后的单个模块</span></span>
<span class="line"><span style="color:#6A737D;">// 不需要像 Webpack 那样提前打包所有依赖</span></span>
<span class="line"></span></code></pre>`,4),e(f,null,{default:r(()=>[e(m,{type:`tip`,title:`Vite 的生态`},{default:r(()=>[...u[1]||=[n(` Vite 不仅用于 Vue，它是一个框架无关的构建工具。React、Vue、Svelte、Lit 等框架都有对应的 Vite 插件。目前 Vite 已经成为新建前端项目的首选构建工具，Create React App 已经被官方弃用，推荐使用 Vite。 `,-1)]]),_:1})]),_:1}),u[6]||=c(`h2`,{id:`%E6%B5%8B%E8%AF%95%E4%BD%A0%E7%9A%84%E7%90%86%E8%A7%A3`,tabindex:`-1`},`测试你的理解`,-1),e(f,null,{default:r(()=>[e(h,{question:`Webpack 与 Grunt/Gulp 最本质的区别是什么？`,options:[{text:`Webpack 速度更快`,correct:!1},{text:`Webpack 能理解模块依赖关系，把代码打包成优化后的 bundle`,correct:!0},{text:`Webpack 不需要配置文件`,correct:!1},{text:`Webpack 只能处理 JavaScript`,correct:!1}],explanation:`Grunt 和 Gulp 本质上是任务运行器，按顺序执行预定义的任务，不理解文件间的依赖关系。Webpack 是模块打包器，能递归分析 import/export 依赖，把所有模块打包成优化后的输出文件。这是它们最本质的区别。`})]),_:1}),e(f,null,{default:r(()=>[e(h,{question:`Vite 比 Webpack 快的主要原因是什么？`,options:[{text:`Vite 的配置文件更简单`,correct:!1},{text:`Vite 用 Go 语言编写`,correct:!1},{text:`开发时不打包，利用浏览器原生 ESM 按需加载`,correct:!0},{text:`Vite 的文件体积更小`,correct:!1}],explanation:`Vite 快的核心原因是它在开发时不打包。Webpack 需要在启动时分析并打包所有模块，而 Vite 利用浏览器原生的 ES Modules，只在浏览器请求时按需编译单个模块。配合 esbuild 极速的转译速度，启动时间从几十秒降到几百毫秒。`})]),_:1}),e(f,null,{default:r(()=>[e(g,{title:`深入了解：Webpack 的 Module Federation`},{default:r(()=>[...u[2]||=[n(` Webpack 5 引入了 `,-1),c(`strong`,null,`Module Federation`,-1),n(`（模块联邦），它允许不同的前端应用在运行时共享代码模块。比如一个微前端架构中，主应用可以动态加载子应用的组件，而不需要把子应用的代码打包到主应用中。`,-1),c(`br`,null,null,-1),c(`br`,null,null,-1),n(` 这是一个非常强大的功能，它让"微前端"架构变得更加可行。不同的团队可以用不同的技术栈开发各自的模块，然后在运行时组合在一起。不过在大多数中小型项目中，你不需要用到这个功能。 `,-1)]]),_:1})]),_:1}),u[7]||=c(`p`,null,`工具链的演进让前端开发变得越来越高效，但也意味着开发者需要学习的东西越来越多。下一章，我们将回到全局视角，看看今天的前端处于什么位置，以及未来的方向在哪里。`,-1)])}}});export{f as default,d as excerpt,u as frontmatter};