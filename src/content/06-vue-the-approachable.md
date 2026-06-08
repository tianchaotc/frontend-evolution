# Vue -- 渐进式方案

## 尤雨溪的背景

**尤雨溪（Evan You）** 是 Vue.js 的创造者。在创建 Vue 之前，他在 Google 工作，参与了 Google Creative Lab 的多个项目，包括用 AngularJS 构建内部工具。这段经历让他对 AngularJS 有了深入的理解，也让他看到了它的不足。

尤雨溪发现 AngularJS 对于很多项目来说过于重量级了。他想要一个更轻量、更易上手的框架——既保留 AngularJS 的数据绑定和组件化优点，又不需要强制引入 TypeScript、依赖注入等重型概念。

2013 年 10 月，尤雨溪开始构思一个新框架；2014 年 2 月，**Vue 0.x** 正式发布。它的名字来自法语单词 "vue"，意为"视图"。

## 渐进式框架的设计哲学

Vue 从一开始就确立了**渐进式框架（Progressive Framework）**的定位。

<ClientOnly>
<ConceptCard title="渐进式框架" icon="💡">
<strong>渐进式</strong>意味着 Vue 不强制你接受它的全部。你可以根据项目需求，逐步引入 Vue 的功能：<br><br>
1. 只用核心库做简单的数据绑定（类似 jQuery 的增强版）<br>
2. 加上路由（Vue Router）做单页应用<br>
3. 加上状态管理（Pinia）做复杂应用<br>
4. 加上构建工具链做工程化开发<br><br>
每一步都是可选的，你不需要一开始就学完所有东西。
</ConceptCard>
</ClientOnly>

```html
<!-- 最简单的 Vue：一个 CDN 引入就够了 -->
<div id="app">
  <input v-model="message" placeholder="输入点什么...">
  <p>{{ message }}</p>
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
  Vue.createApp({
    data() {
      return { message: '' }
    }
  }).mount('#app')
</script>
```

这种渐进式的设计让 Vue 的学习曲线非常平缓。你可以从一个 HTML 文件开始，逐步增加复杂度，而不需要一开始就搭建完整的工程化环境。

## 响应式原理

Vue 最核心的特性是**响应式系统**——当数据变化时，UI 自动更新。

### Vue 2：Object.defineProperty

Vue 2 使用 `Object.defineProperty` 来实现数据劫持：

```javascript
// Vue 2 的响应式原理简化版
function observe(obj) {
  for (const key in obj) {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        console.log(`读取了 ${key}: ${value}`)
        return value
      },
      set(newValue) {
        console.log(`${key} 变为: ${newValue}`)
        value = newValue
        // 触发视图更新
        updateView()
      }
    })
  }
}

const data = { message: 'Hello' }
observe(data)

data.message = 'World' // 自动触发 set，更新视图
```

<ClientOnly>
<InfoBox type="warning" title="Vue 2 响应式的局限">
<strong>无法检测新增属性</strong>：直接给对象添加新属性不会触发响应式更新，需要使用 <code>this.$set(obj, 'newKey', value)</code>。<br><br>
<strong>无法检测数组索引修改</strong>：<code>this.arr[0] = 'new'</code> 不会触发更新，需要用 <code>this.$set</code> 或数组方法。<br><br>
这些限制是 Vue 2 最常见的"坑"，也是 Vue 3 改进的重点方向。
</InfoBox>
</ClientOnly>

### Vue 3：Proxy

Vue 3 用 `Proxy` 替代了 `Object.defineProperty`，解决了上述所有问题：

```javascript
// Vue 3 的响应式原理简化版
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      console.log(`读取了 ${String(key)}`)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      console.log(`${String(key)} 变为: ${value}`)
      const result = Reflect.set(target, key, value, receiver)
      updateView()
      return result
    }
  })
}

const data = reactive({ message: 'Hello' })

data.message = 'World'     // 触发 set
data.newKey = 'new'         // 也能检测到了！
```

```javascript
// Vue 3 还提供了 ref 和 reactive
import { ref, reactive } from 'vue'

// ref：基本类型的响应式
const count = ref(0)
count.value++ // .value 访问和修改

// reactive：对象的响应式
const state = reactive({
  name: '张三',
  todos: []
})
state.name = '李四' // 直接修改，不需要 .value
```

## 模板 vs JSX 的设计选择

Vue 选择了**模板语法**作为默认的视图定义方式，而 React 选择了 JSX。

```html
<!-- Vue 模板：基于 HTML 扩展 -->
<template>
  <div class="todo-app">
    <input v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">添加</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">删除</button>
      </li>
    </ul>
    <p>共 {{ todos.length }} 项，未完成 {{ remaining }} 项</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(t => !t.done).length
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, done: false })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}
</style>
```

Vue 的模板语法有明显的优势：
- **HTML 兼容**：模板本质上是 HTML，前端设计师可以无缝参与
- **IDE 支持更好**：模板的结构更规则，代码提示和错误检查更容易实现
- **性能优化**：编译时可以做更多静态分析和优化

当然，Vue 也完全支持 JSX，当你需要更灵活的逻辑时，可以自由切换。

## 单文件组件（.vue）

Vue 引入了**单文件组件（Single File Component，SFC）**的概念，把模板、逻辑、样式放在一个 `.vue` 文件中。

```html
<!-- Counter.vue -->
<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span class="count">{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ },
    decrement() { this.count-- }
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.count {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
```

```html
<!-- 使用组件 -->
<template>
  <div>
    <h1>计数器应用</h1>
    <Counter />
    <Counter />
    <Counter />
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  components: { Counter }
}
</script>
```

`scoped` 样式确保样式只作用于当前组件，不会影响其他组件。这解决了 CSS 全局污染的老问题。

## Vue 2 Options API vs Vue 3 Composition API

Vue 3 引入了 **Composition API**，与 Vue 2 的 Options API 形成了鲜明对比：

<ClientOnly>
<CodeCompare :tabs="[
  {
    label: 'Vue 2 Options API',
    code: 'export default {\n  data() {\n    return {\n      count: 0,\n      doubleCount: 0\n    }\n  },\n  computed: {\n    doubleCount() {\n      return this.count * 2\n    }\n  },\n  methods: {\n    increment() {\n      this.count++\n    }\n  },\n  mounted() {\n    console.log(&quot;组件已挂载&quot;)\n  },\n  beforeUnmount() {\n    console.log(&quot;即将卸载&quot;)\n  }\n}',
    lang: 'javascript'
  },
  {
    label: 'Vue 3 Composition API',
    code: 'import { ref, computed, onMounted, onBeforeUnmount } from &quot;vue&quot;\n\nexport default {\n  setup() {\n    const count = ref(0)\n    const doubleCount = computed(() =&gt; count.value * 2)\n\n    const increment = () =&gt; {\n      count.value++\n    }\n\n    onMounted(() =&gt; {\n      console.log(&quot;组件已挂载&quot;)\n    })\n\n    onBeforeUnmount(() =&gt; {\n      console.log(&quot;即将卸载&quot;)\n    })\n\n    return { count, doubleCount, increment }\n  }\n}',
    lang: 'javascript'
  }
]" />
</ClientOnly>

Composition API 的最大优势是**逻辑复用**。同一个功能的代码可以封装成一个函数，在多个组件间共享：

```javascript
// useCounter.js -- 可复用的计数逻辑
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = initialValue }

  return { count, doubleCount, increment, decrement, reset }
}
```

```html
<!-- 在组件中使用 -->
<script setup>
import { useCounter } from './useCounter'

const { count, doubleCount, increment } = useCounter(10)
</script>

<template>
  <div>
    <p>计数: {{ count }}，双倍: {{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </div>
</template>
```

## 为什么 Vue 在中国特别流行

Vue 在中国前端社区的占有率长期领先，原因有多个方面：

- **文档友好**：Vue 的官方文档（尤其英文和中文版）质量极高，清晰易懂。对于初学者来说，好的文档就是最好的老师
- **渐进式设计**：不需要一开始就理解整个框架，从 CDN 引入做简单页面，到完整工程化项目，每一步都很平滑
- **阿里/饿了么采用**：饿了么前端团队是 Vue 的早期深度用户，贡献了 Element UI 等优秀组件库，推动了 Vue 在国内的普及
- **中文社区活跃**：Vue 有非常活跃的中文社区，大量教程、视频、书籍都是中文的
- **学习曲线平缓**：相比 Angular 的全套 TypeScript + RxJS + 依赖注入，Vue 对初学者更友好

<ClientOnly>
<InfoBox type="tip" title="Vue 在全球">
虽然 Vue 在中国的占有率很高，但它在全球范围内也是非常流行的框架。GitStar 上 Vue 是最受欢迎的前端框架之一。Vue 3 发布后，在日本、韩国、欧洲等地区的采用率也在持续增长。
</InfoBox>
</ClientOnly>

## 测试你的理解

<ClientOnly>
<Quiz question="Vue 的渐进式框架是什么意思？" :options="[
  { text: 'Vue 的版本会逐渐升级', correct: false },
  { text: '可以根据需求逐步引入 Vue 的功能，不需要一次性学完', correct: true },
  { text: 'Vue 的性能会随时间慢慢提升', correct: false },
  { text: 'Vue 只能用于小型项目', correct: false }
]" explanation="渐进式意味着 Vue 不强制你使用它的全部功能。你可以从 CDN 引入做简单页面，逐步加入路由、状态管理、构建工具等。每一步都是可选的，按需引入即可。" />
</ClientOnly>

<ClientOnly>
<Quiz question="Vue 3 用 Proxy 替代 Object.defineProperty 的主要好处是什么？" :options=" [
  { text: '代码更简洁', correct: false },
  { text: '可以检测对象属性的新增和删除', correct: true },
  { text: '运行速度更快', correct: false },
  { text: '支持 IE 浏览器', correct: false }
]" explanation="Object.defineProperty 只能劫持已有的属性，无法检测新增或删除的属性。Proxy 可以拦截对象上的任何操作，包括属性的添加、删除、枚举等，解决了 Vue 2 中响应式的各种限制。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="深入了解：Pinia 与状态管理">
Vue 3 推荐的状态管理方案是 <strong>Pinia</strong>，它是 Vuex 的继任者。Pinia 的设计更简洁，没有 mutations，直接通过 actions 修改状态。<br><br>
Pinia 的核心概念：State（状态）、Getters（计算属性）、Actions（方法）。它的 API 非常直观，TypeScript 支持也更好。<br><br>
在中小型项目中，你甚至可能不需要 Pinia——Vue 3 的 Composition API 配合 provide/inject 就能解决大部分状态共享问题。这也是"渐进式"的体现。
</ExpandableDetail>
</ClientOnly>

Vue 用渐进式的设计和友好的 API，让前端开发变得更加平易近人。但无论选择 React 还是 Vue，现代前端开发都离不开强大的工具链。下一章，我们将深入探索前端工具链的演进——从任务运行器到模块打包器，再到下一代构建工具 Vite。
