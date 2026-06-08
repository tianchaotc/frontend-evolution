# Web 的诞生

## 起源

1991 年，Tim Berners-Lee 在 CERN 发明了 World Wide Web。最初的设想很简单：用超文本链接文档。

## 三剑客

Web 由三项核心技术构成：

- **HTML** -- 结构（骨架）
- **CSS** -- 样式（皮肤）
- **JavaScript** -- 行为（肌肉）

## 第一个网页

```html
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

## 早期的痛点

当你想做一个简单的交互，比如点击按钮改变颜色，原生 JS 是这样的：

```javascript
var btn = document.getElementById('myButton')
btn.addEventListener('click', function() {
  this.style.backgroundColor = 'red'
})
```

看起来很简单对吧？但当页面变复杂，问题就来了...

> 这就是为什么后来会出现 jQuery。

## CodeBlock 测试

<ClientOnly>
<CodeBlock lang="javascript" title="example.js">
const greeting = "Hello, World!";
console.log(greeting);
</CodeBlock>
</ClientOnly>

## CodeCompare 测试

<ClientOnly>
<CodeCompare :tabs="[
  { label: 'jQuery', code: '$(&quot;#btn&quot;).click(function() {\n  $(this).hide();\n});', lang: 'javascript' },
  { label: 'Vue', code: '&lt;button @click=&quot;visible = false&quot;&gt;\n  Click me\n&lt;/button&gt;', lang: 'html' }
]" />
</ClientOnly>
