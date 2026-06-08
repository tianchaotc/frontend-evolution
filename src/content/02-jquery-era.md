# jQuery 时代

## 为什么需要 jQuery

2006 年之前，前端开发是一件痛苦的事。上一章我们提到，原生 JavaScript 操作 DOM 繁琐且浏览器兼容性差。开发者需要为不同浏览器写不同的代码，一个简单的 DOM 查询可能就要写好几行。

**John Resig** 在 2006 年 8 月发布了 jQuery，口号是 **"Write Less, Do More"**。这个小小的库彻底改变了前端开发的方式。

<ClientOnly>
<ConceptCard title="jQuery 是什么" icon="💡">
jQuery 是一个轻量级的 JavaScript 库，它封装了复杂的 DOM 操作和浏览器兼容性处理，提供简洁的 API 让开发者用更少的代码完成更多的事。它的核心是选择器引擎和链式调用，让操作 DOM 变得像写 SQL 一样直观。
</ConceptCard>
</ClientOnly>

## $ 魔法：选择器与 DOM 操作

jQuery 最标志性的设计就是 <code>$()</code> 函数。它能通过 CSS 选择器语法快速选中页面元素，然后对它们进行操作。

```javascript
// 原生 JavaScript
var items = document.getElementsByClassName('item')
for (var i = 0; i < items.length; i++) {
  items[i].style.color = 'red'
}

// jQuery
$('.item').css('color', 'red')
```

```javascript
// 更复杂的选择
$('ul.menu > li.active').addClass('highlight')
$('#login-form input[type="email"]').focus()
$('div[data-role="header"]').hide()
```

一个符号，省去了大量的样板代码。这就是 jQuery 魔法的核心。

## 链式调用

jQuery 的另一个革命性设计是**链式调用（chaining）**。每个 jQuery 方法执行完后会返回 jQuery 对象本身，因此可以连续调用多个方法。

<ClientOnly>
<CodeBlock lang="javascript" title="链式调用示例">
// 链式调用让代码读起来像自然语言
$('#modal')
  .fadeIn(300)
  .find('.title')
    .text('欢迎回来')
    .css('color', 'blue')
    .end()
  .find('.close-btn')
    .on('click', function () {
      $('#modal').fadeOut(200)
    })
</CodeBlock>
</ClientOnly>

没有链式调用之前，同样的逻辑需要写成一堆嵌套的回调，代码可读性极差。链式调用让代码既简洁又清晰。

## $.ajax -- 异步请求的标准化

在 jQuery 出现之前，<code>XMLHttpRequest</code> 的 API 在不同浏览器中的实现不一致。jQuery 用 <code>$.ajax</code> 封装了这个差异，提供了一致的接口。

```javascript
$.ajax({
  url: '/api/users',
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    // 渲染用户列表
    var html = ''
    $.each(data.users, function (i, user) {
      html += '<li>' + user.name + '</li>'
    })
    $('#user-list').html(html)
  },
  error: function (xhr, status, error) {
    alert('请求失败: ' + error)
  }
})
```

也有更简洁的快捷方法：

```javascript
$.get('/api/users', function (data) {
  console.log(data)
})

$.post('/api/submit', { name: '张三' }, function (res) {
  console.log(res)
})
```

## 浏览器兼容层

jQuery 最大的贡献之一是**抹平了浏览器差异**。开发者不需要关心底层实现，只需要调用 jQuery 的统一 API。

```javascript
// 事件绑定 -- 不用操心 addEventListener vs attachEvent
$('.btn').on('click', handler)

// 获取样式 -- 不用操心 getComputedStyle vs currentStyle
var width = $('.box').width()

// 动画 -- 不用操心 requestAnimationFrame vs setInterval
$('.box').slideUp(300)
```

## 插件生态

jQuery 的成功催生了庞大的插件生态系统。几乎任何功能都能找到现成的 jQuery 插件。

- **jQuery UI**：拖拽、排序、日期选择器等 UI 组件
- **bxSlider**：轮播图插件
- **Validate**：表单验证
- **Fancybox**：图片弹窗

```javascript
// 使用日期选择器插件
$('#datepicker').datepicker({
  dateFormat: 'yy-mm-dd',
  minDate: 0,
  onSelect: function (dateStr) {
    console.log('选择了:', dateStr)
  }
})
```

插件生态让 jQuery 的功能可以无限扩展，也让开发者越来越依赖 jQuery。

## 为什么 jQuery 最终成了问题

jQuery 解决了早期的问题，但随着 Web 应用变得越来越复杂，它也带来了新的问题。

<ClientOnly>
<InfoBox type="danger" title="jQuery 的三个致命问题">
<strong>1. 全局命名空间污染</strong>：jQuery 和所有插件都往全局作用域塞东西。<code>$</code> 是全局的，各种插件也注册全局变量，容易冲突。<br><br>
<strong>2. DOM 操作与状态不同步</strong>：数据存在 DOM 里（<code>.data()</code>、CSS 类名、HTML 属性），导致数据和视图经常不一致。当页面逻辑复杂时，你不知道哪个地方改了数据。<br><br>
<strong>3. 意大利面条式代码</strong>：事件回调里嵌套事件回调，DOM 操作散落各处，没有清晰的数据流。代码越写越乱，维护成本急剧上升。
</InfoBox>
</ClientOnly>

## 原生 JS vs jQuery

<ClientOnly>
<CodeCompare :tabs="[
  { label: &quot;原生 JS&quot;, code: &quot;// 获取并遍历元素\nvar items = document.querySelectorAll('.item');\nfor (var i = 0; i < items.length; i++) {\n  items[i].addEventListener('click', function() {\n    this.classList.toggle('active');\n  });\n}&quot;, lang: &quot;javascript&quot; },
  { label: &quot;jQuery&quot;, code: &quot;// 获取并遍历元素\n$('.item').on('click', function() {\n  $(this).toggleClass('active');\n});&quot;, lang: &quot;javascript&quot; }
]" />
</ClientOnly>

<ClientOnly>
<CodeCompare :tabs="[
  { label: &quot;原生 JS 发请求&quot;, code: &quot;var xhr = new XMLHttpRequest();\nxhr.open('GET', '/api/data');\nxhr.onload = function() {\n  if (xhr.status === 200) {\n    var data = JSON.parse(xhr.responseText);\n    console.log(data);\n  }\n};\nxhr.send();&quot;, lang: &quot;javascript&quot; },
  { label: &quot;jQuery 发请求&quot;, code: &quot;$.get('/api/data', function(data) {\n  console.log(data);\n});&quot;, lang: &quot;javascript&quot; }
]" />
</ClientOnly>

## 测试你的理解

<ClientOnly>
<Quiz question="jQuery 链式调用能工作的原因是什么？" :options="[
  { text: 'jQuery 使用了特殊的语法', correct: false },
  { text: '每个 jQuery 方法返回 jQuery 对象本身', correct: true },
  { text: 'JavaScript 原生支持链式调用', correct: false },
  { text: 'jQuery 重写了 JavaScript 引擎', correct: false }
]" explanation="链式调用能工作的关键是：jQuery 的每个方法（如 .find()、.css()、.on()）执行完操作后，都会返回 jQuery 对象本身（this），这样下一个方法可以继续在返回值上调用。" />
</ClientOnly>

<ClientOnly>
<Quiz question="以下哪项不是 jQuery 时代常见的问题？" :options="[
  { text: '全局命名空间污染', correct: false },
  { text: 'DOM 操作与数据状态不同步', correct: false },
  { text: '类型系统不够严格', correct: true },
  { text: '代码缺乏结构化组织', correct: false }
]" explanation="类型系统不是 jQuery 时代的核心痛点（虽然 JS 的弱类型确实是个问题）。jQuery 时代的主要问题是全局命名空间污染、数据和视图不同步、以及代码组织混乱（意大利面条代码）。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="深入了解：jQuery 与 $ 的设计">
<code>$</code> 不仅是 jQuery 的名字，它本质上就是一个函数。jQuery 允许你释放 <code>$</code> 这个全局变量：<code>jQuery.noConflict()</code>，然后用 <code>jQuery</code> 代替 <code>$</code> 来调用。这是因为很多其他库（如 Prototype.js）也使用 <code>$</code> 作为标识符，导致冲突。<br><br>
jQuery 内部的核心是 Sizzle 选择器引擎（后来独立出来），它实现了完整的 CSS 选择器规范，可以在不支持 <code>querySelectorAll</code> 的旧版 IE 上运行。这在当时是非常了不起的技术成就。
</ExpandableDetail>
</ClientOnly>

jQuery 让前端开发从"原始人"进化到了"农耕时代"，但随着 Web 应用的复杂度持续增长，人们开始思考：有没有更好的方式来构建前端应用？下一章，我们将看到 SPA（单页应用）革命如何重新定义前端的角色。
