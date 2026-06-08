# React 改变一切

## Facebook 的内部需求

2011 年，Facebook 面临一个棘手的问题：消息通知系统的 UI 总是不同步。当用户在 Instagram 上点赞时，通知计数不会实时更新；当消息状态变化时，界面显示的信息可能是过时的。工程师们不断修补 Bug，但问题的根源在于**手动 DOM 操作**太容易出错——你需要记住每一个状态变化对应的 DOM 更新，一旦遗漏就会出现不一致。

2013 年 5 月，Facebook 的工程师 **Jordan Walke** 发布了一个内部项目叫 **FaxJS**，后来更名为 **React**。他的思路很激进：与其手动操作 DOM 来反映状态变化，不如**把整个 UI 当作状态的函数**——给定一个状态，就能计算出完整的 UI。

```javascript
// React 的核心理念：UI = f(state)
// 状态变化时，重新计算整个 UI，而不是手动修改 DOM

function App(state) {
  return `
    <div>
      <h1>${state.title}</h1>
      <p>通知数: ${state.notifications}</p>
      <ul>
        ${state.messages.map(msg => `<li>${msg.text}</li>`).join('')}
      </ul>
    </div>
  `
}

// 状态变化时，重新调用 App 函数
state.notifications = 5
const newUI = App(state)
// 然后找到差异并更新 DOM
```

这个理念听起来简单，但 Facebook 团队知道，如果每次都重新渲染整个页面，性能会很糟糕。他们需要一个聪明的方式来计算"新旧 UI 的差异"。这就是 **Virtual DOM** 诞生的原因。

## Virtual DOM：核心思想

<ClientOnly>
<ConceptCard title="Virtual DOM" icon="💡">
<strong>Virtual DOM（虚拟 DOM）</strong>是用 JavaScript 对象表示 DOM 结构的一种方式。当状态变化时，React 会创建一棵新的虚拟 DOM 树，然后与旧树进行比较（diff），找出真正需要更新的部分（patch），最后只把差异应用到真实 DOM 上。<br><br>
核心流程：<strong>创建新虚拟 DOM -> Diff 比较 -> 最小化 DOM 更新</strong>
</ConceptCard>
</ClientOnly>

Virtual DOM 的工作原理可以用三个步骤来理解：

```javascript
// 1. 用 JavaScript 对象描述 DOM 结构
const virtualDOM = {
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', props: {}, children: ['Hello'] },
    { type: 'p', props: {}, children: ['World'] }
  ]
}

// 2. 状态变化后，生成新的虚拟 DOM
const newVirtualDOM = {
  type: 'div',
  props: { className: 'container' },
  children: [
    { type: 'h1', props: {}, children: ['Hello'] },      // 没变
    { type: 'p', props: {}, children: ['Hello World'] }   // 只改了这一个
  ]
}

// 3. Diff 比较发现只有第二个子节点的文本变了
// 于是只更新这个文本节点，而不是重新渲染整个 div
```

为什么不直接操作真实 DOM？因为 DOM 操作非常昂贵。每次修改 DOM，浏览器都需要重新计算布局（reflow）、重新绘制（repaint）。Virtual DOM 把多次 DOM 操作合并成一次，大幅提升了性能。

## JSX 争议：HTML in JavaScript？

React 引入了一种叫 **JSX** 的语法，它允许在 JavaScript 中直接写类似 HTML 的代码。这在当时引发了巨大争议。

```javascript
// JSX 语法：看起来像 HTML，但其实是 JavaScript
const element = (
  <div className="greeting">
    <h1>Hello, {name}</h1>
    <p>欢迎回来！</p>
  </div>
)

// JSX 会被编译成 React.createElement 调用
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello, ', name),
  React.createElement('p', null, '欢迎回来！')
)
```

<ClientOnly>
<InfoBox type="warning" title="JSX 的争议">
<strong>反对者的理由</strong>：JSX 把 HTML（结构）和 JavaScript（逻辑）混在一起，违背了"关注点分离"原则。前端开发十几年来一直强调结构、样式、行为分离，JSX 好像开倒车。<br><br>
<strong>支持者的理由</strong>：组件本身就是一个完整的关注点。一个按钮的结构、样式和行为本来就应该放在一起管理，分开反而增加了维护成本。JSX 让组件的逻辑更加内聚。
</InfoBox>
</ClientOnly>

事实证明，JSX 赢得了这场争论。如今不仅 React 使用 JSX，Vue 的模板编译器也支持 JSX，SolidJS、Preact 等框架也采用了类似的语法。

## 组件化思维

React 最深远的影响之一是推动了**组件化**成为前端开发的核心范式。组件是一个独立的、可复用的 UI 单元，它封装了自己的结构、逻辑和样式。

### Class Component

React 最初主要使用 Class Component：

```javascript
import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputValue: ''
    }
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.inputValue],
      inputValue: ''
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <button onClick={this.addTodo}>添加</button>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}
```

### Function Component

后来 React 引入了 Function Component，配合 Hooks，代码变得更简洁：

```javascript
import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
```

对比两段代码，Function Component 明显更简洁，也更容易理解。

## 单向数据流

React 采用了**单向数据流**（One-way Data Binding），数据只能从父组件流向子组件。

<ClientOnly>
<ConceptCard title="单向数据流" icon="💡">
在 React 中，数据通过 <strong>props</strong> 从父组件传递给子组件。子组件不能直接修改 props，只能通过调用父组件传递的回调函数来"通知"父组件更新数据。这种方式让数据流向清晰可追踪，便于调试。<br><br>
与 AngularJS 的双向绑定不同，React 明确区分了"读"（props）和"写"（回调函数），使状态变化更容易预测。
</ConceptCard>
</ClientOnly>

```javascript
// 父组件
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>计数器: {count}</h1>
      {/* 回调函数向下传递 */}
      <Counter count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  )
}

// 子组件：只能读 props，不能直接修改
function Counter({ count, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      点击了 {count} 次
    </button>
  )
}
```

这种设计的好处是：当 Bug 出现时，你可以从根组件开始，沿着数据流一步步追踪，找出哪里的数据出了问题。相比之下，双向绑定的数据流像蜘蛛网一样交织在一起，排查问题非常困难。

## React Hooks（2019）

2019 年 2 月，React 16.8 引入了 **Hooks**，这是 React 历史上最大的一次范式转变。

```javascript
// useState：管理状态
const [count, setCount] = useState(0)

// useEffect：处理副作用（类似生命周期）
useEffect(() => {
  document.title = `点击了 ${count} 次`

  // 返回清理函数
  return () => {
    document.title = 'React App'
  }
}, [count]) // 依赖数组：只在 count 变化时执行

// 自定义 Hook：提取可复用的逻辑
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// 使用自定义 Hook
function App() {
  const [name, setName] = useLocalStorage('name', '')
  return <input value={name} onChange={e => setName(e.target.value)} />
}
```

<ClientOnly>
<Timeline :events="[
  { year: &quot;2013&quot;, text: &quot;React 发布，Class Component 为主&quot; },
  { year: &quot;2016&quot;, text: &quot;React 16 发布，引入 Fiber 架构&quot; },
  { year: &quot;2018&quot;, text: &quot;React 16.6 发布，引入 React.memo 和 Context API&quot; },
  { year: &quot;2019&quot;, text: &quot;React 16.8 发布，Hooks 正式引入&quot; },
  { year: &quot;2020&quot;, text: &quot;React 17 发布，平滑升级，支持渐进式迁移&quot; },
  { year: &quot;2022&quot;, text: &quot;React 18 发布，引入并发渲染和自动批处理&quot; }
]" />
</ClientOnly>

Hooks 解决了 Class Component 的几个痛点：
- **逻辑复用**：不再需要 HOC（高阶组件）或 Render Props，自定义 Hook 就够了
- **状态逻辑分散**：Class Component 中同一个功能的代码可能分散在 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 中，Hooks 让它们聚合在一起
- **`this` 绑定问题**：Function Component 不需要处理 `this` 的指向

## jQuery vs React：两种范式

<ClientOnly>
<CodeCompare :tabs="[
  {
    label: 'jQuery',
    code: '// jQuery: 手动操作 DOM\ndocument.getElementById(&quot;add-btn&quot;)\n  .addEventListener(&quot;click&quot;, function() {\n  // 获取输入值\n  var input = document.getElementById(&quot;todo-input&quot;)\n  var text = input.value\n  \n  // 创建新元素\n  var li = document.createElement(&quot;li&quot;)\n  li.textContent = text\n  \n  // 手动插入 DOM\n  document.getElementById(&quot;todo-list&quot;)\n    .appendChild(li)\n  \n  // 手动清空输入框\n  input.value = &quot;&quot;\n  \n  // 手动更新计数\n  var count = document.getElementById(&quot;count&quot;)\n  count.textContent = parseInt(count.textContent) + 1\n})',
    lang: 'javascript'
  },
  {
    label: 'React',
    code: '// React: 声明式，状态驱动 UI\nfunction TodoApp() {\n  const [todos, setTodos] = useState([])\n  const [input, setInput] = useState(&quot;&quot;)\n\n  const addTodo = () =&gt; {\n    setTodos([...todos, input])\n    setInput(&quot;&quot;)\n  }\n\n  return (\n    &lt;div&gt;\n      &lt;input value={input}\n        onChange={e =&gt; setInput(e.target.value)} /&gt;\n      &lt;button onClick={addTodo}&gt;添加&lt;/button&gt;\n      &lt;ul&gt;\n        {todos.map((t, i) =&gt; (\n          &lt;li key={i}&gt;{t}&lt;/li&gt;\n        ))}\n      &lt;/ul&gt;\n      &lt;p&gt;共 {todos.length} 项&lt;/p&gt;\n    &lt;/div&gt;\n  )\n}',
    lang: 'jsx'
  }
]" />
</ClientOnly>

从上面的对比可以看出：jQuery 告诉浏览器"怎么做"（命令式），React 告诉浏览器"要什么"（声明式）。当应用变得复杂时，命令式代码会变得难以维护，而声明式代码始终保持清晰。

## 为什么 React "赢了"

React 发布后迅速成为最流行的前端框架，原因有很多：

- **生态系统**：React 的 npm 生态极其丰富，几乎所有 UI 需求都能找到成熟的库
- **React Native**：让前端开发者可以用 React 语法开发原生移动应用，极大扩展了应用范围
- **社区和人才**：React 开发者数量庞大，招聘和学习都很方便
- **大厂背书**：Facebook（Meta）、Netflix、Airbnb、Discord 等众多公司采用
- **持续创新**：从 Virtual DOM 到 Hooks，再到 Server Components，React 始终在引领方向

<ClientOnly>
<InfoBox type="tip" title="React 的影响力">
React 不仅是一个框架，更是一种思维范式。"组件化"、"声明式 UI"、"单向数据流"这些概念现在已经深入前端开发的方方面面。即使你最终选择了 Vue 或其他框架，理解 React 的思想也会让你成为更好的前端开发者。
</InfoBox>
</ClientOnly>

## 测试你的理解

<ClientOnly>
<Quiz question="Virtual DOM 解决的核心问题是什么？" :options="[
  { text: '让页面加载更快', correct: false },
  { text: '用 JavaScript 对象描述 DOM，通过 diff 算法最小化真实 DOM 操作', correct: true },
  { text: '替代 HTML，直接用 JavaScript 写页面', correct: false },
  { text: '让 CSS 可以用 JavaScript 编写', correct: false }
]" explanation="Virtual DOM 的核心是用 JavaScript 对象来描述 DOM 结构。状态变化时，React 生成新的虚拟 DOM 树，与旧树进行 diff 比较，找出真正需要变化的部分，然后只把差异应用到真实 DOM 上。这避免了不必要的 DOM 操作，提升了性能。" />
</ClientOnly>

<ClientOnly>
<Quiz question="React 采用单向数据流的主要好处是什么？" :options=" [
  { text: '性能更好', correct: false },
  { text: '代码更短', correct: false },
  { text: '数据流向清晰，便于追踪和调试', correct: true },
  { text: '不需要写回调函数', correct: false }
]" explanation="单向数据流让数据只能从父组件流向子组件，状态变化的路径是单向的、可预测的。当出现问题时，你可以沿着数据流从上到下追踪，找出哪里出了问题。相比之下，双向绑定的数据流向复杂，调试更困难。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="深入了解：React Fiber 架构">
React 16 引入了 Fiber 架构，这是一个完全重写的协调引擎。在旧架构中，React 的更新是同步的——一旦开始渲染，就无法中断。如果组件树很大，渲染过程会阻塞主线程，导致页面卡顿。<br><br>
Fiber 架构把渲染工作拆分成一个个小的任务单元（Fiber 节点），每个单元可以在完成后让出主线程，让浏览器处理用户输入、动画等紧急任务。这就是 React 18 中"并发渲染"的基础。<br><br>
简单来说，Fiber 让 React 能够"边渲染边响应"，而不是"渲染时卡住一切"。这在复杂应用中对用户体验的提升非常明显。
</ExpandableDetail>
</ClientOnly>

React 用 Virtual DOM 和组件化思想重新定义了前端开发，但前端框架的创新远不止于此。下一章，我们将看到 Vue 如何用"渐进式"的设计哲学和更友好的 API，让前端开发变得更加平易近人。
