# Angular 与 MVVM

## AngularJS 的诞生

2010 年，Google 发布了 **AngularJS**（简称 Angular 1.x）。它是一个全新的前端框架，引入了**双向数据绑定**、**依赖注入**、**指令系统**等革命性概念。AngularJS 让前端开发第一次真正有了"框架"的感觉。

与 Backbone.js 的轻量不同，AngularJS 是一个**全功能框架**。它试图解决前端开发的所有问题：数据绑定、DOM 操作、路由、表单验证、HTTP 请求、模块化...

```html
<!-- AngularJS 的 Hello World -->
<div ng-app="myApp" ng-controller="myCtrl">
  <input ng-model="name" placeholder="输入名字">
  <p>你好，{{name}}！</p>
</div>

<script>
  var app = angular.module('myApp', [])
  app.controller('myCtrl', function ($scope) {
    $scope.name = ''
  })
</script>
```

短短几行代码，就实现了数据和视图的实时同步。输入框打字，下方文字立即更新。在当时，这简直是魔法。

## 双向数据绑定

AngularJS 最核心的特性是**双向数据绑定（Two-way Data Binding）**。

<ClientOnly>
<ConceptCard title="双向数据绑定" icon="💡">
<strong>单向绑定</strong>：数据变化时自动更新视图（Data -> View）。Backbone.js 和早期的 React 就是这种方式。<br><br>
<strong>双向绑定</strong>：数据变化时视图自动更新，视图变化时数据也自动同步（Data <-> View）。AngularJS 引入的这种方式极大简化了表单处理等场景。
</ConceptCard>
</ClientOnly>

```html
<!-- 双向绑定演示 -->
<div ng-controller="FormCtrl">
  <!-- 用户输入会自动同步到 model -->
  <input ng-model="user.name" placeholder="姓名">
  <input ng-model="user.email" placeholder="邮箱">

  <!-- 数据变化会自动更新视图 -->
  <p>姓名：{{user.name}}</p>
  <p>邮箱：{{user.email}}</p>

  <!-- model 变化也会自动更新视图 -->
  <button ng-click="reset()">重置</button>
</div>

<script>
  function FormCtrl($scope) {
    $scope.user = { name: '', email: '' }

    $scope.reset = function () {
      $scope.user = { name: '', email: '' }
    }
  }
</script>
```

双向绑定的工作原理是 AngularJS 的 **$digest 循环**。框架会定期检查所有绑定了数据的表达式，如果发现值变化了，就更新对应的视图。虽然这种"脏检查"机制在性能上有局限，但在当时极大简化了开发。

## 指令系统

AngularJS 引入了**指令（Directive）**的概念，允许开发者创建自定义的 HTML 属性和标签。这是组件化思想的雏形。

```html
<!-- 内置指令 -->
<div ng-repeat="item in items">
  <p>{{item.name}} - {{item.price}}</p>
</div>

<div ng-if="isLoggedIn">
  <p>欢迎回来，{{currentUser}}</p>
</div>

<div ng-show="showPanel" ng-hide="!showPanel">
  控制面板
</div>

<input ng-model="searchText" placeholder="搜索...">

<!-- 自定义指令 -->
<user-card user="currentUser"></user-card>
<shopping-cart items="cartItems"></shopping-cart>
```

```javascript
// 自定义指令
app.directive('userCard', function () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    template: '<div class="card"><h3>{{user.name}}</h3><p>{{user.email}}</p></div>'
  }
})
```

## 依赖注入

AngularJS 内置了**依赖注入（Dependency Injection）**系统，让代码更易测试和维护。

```javascript
// 不用依赖注入 -- 硬编码依赖
function UserController() {
  var userService = new UserService()
  var authService = new AuthService()
  // ...
}

// AngularJS 的依赖注入
app.controller('UserController', function ($scope, UserService, AuthService) {
  // Angular 自动注入所需的服务
  $scope.user = UserService.getCurrentUser()
  $scope.logout = function () {
    AuthService.logout()
  }
})

// 还可以用于单元测试
it('should get current user', function () {
  var mockUserService = { getCurrentUser: function () { return { name: 'test' } } }
  // 可以轻松替换依赖
})
```

## MVVM 模式

AngularJS 推动了 **MVVM（Model-View-ViewModel）** 模式在前端的应用。

<ClientOnly>
<ConceptCard title="MVVM 模式" icon="💡">
<strong>M（Model）</strong>：数据和业务逻辑。对应 AngularJS 中的 Service 和 Factory。<br><br>
<strong>V（View）</strong>：用户界面。对应 HTML 模板，使用指令和表达式绑定数据。<br><br>
<strong>VM（ViewModel）</strong>：连接 Model 和 View 的桥梁。对应 AngularJS 中的 $scope，负责数据的转换和传递。
</ConceptCard>
</ClientOnly>

```html
<!-- View：HTML 模板 -->
<div ng-controller="TodoCtrl">
  <input ng-model="newTodo" ng-keypress="addTodo($event)">
  <ul>
    <li ng-repeat="todo in todos">
      <input type="checkbox" ng-model="todo.done">
      <span ng-class="{done: todo.done}">{{todo.text}}</span>
      <button ng-click="removeTodo($index)">删除</button>
    </li>
  </ul>
  <p>未完成：{{remaining()}} 项</p>
</div>
```

```javascript
// ViewModel + Model：控制器 + 服务
app.factory('TodoService', function () {
  var todos = []
  return {
    getTodos: function () { return todos },
    add: function (text) { todos.push({ text: text, done: false }) },
    remove: function (index) { todos.splice(index, 1) }
  }
})

app.controller('TodoCtrl', function ($scope, TodoService) {
  $scope.todos = TodoService.getTodos()
  $scope.newTodo = ''

  $scope.addTodo = function (e) {
    if (e.keyCode === 13 && $scope.newTodo) {
      TodoService.add($scope.newTodo)
      $scope.newTodo = ''
    }
  }

  $scope.removeTodo = function (index) {
    TodoService.remove(index)
  }

  $scope.remaining = function () {
    return $scope.todos.filter(function (t) { return !t.done }).length
  }
})
```

## Angular 2 的重写

2016 年，Google 发布了 **Angular 2**（后来改名为 simply Angular）。这不是一次升级，而是一次**完全重写**。

<ClientOnly>
<Timeline :events="[
  { year: &quot;2010&quot;, text: &quot;AngularJS (1.x) 发布&quot; },
  { year: &quot;2013&quot;, text: &quot;AngularJS 2.0 开始开发，使用 TypeScript&quot; },
  { year: &quot;2014&quot;, text: &quot;React 发布，Virtual DOM 概念兴起&quot; },
  { year: &quot;2016&quot;, text: &quot;Angular 2 正式发布，完全重写&quot; },
  { year: &quot;2016&quot;, text: &quot;Angular CLI 发布，标准化开发流程&quot; },
  { year: &quot;2017&quot;, text: &quot;Angular 4 发布，快速迭代&quot; }
]" />
</ClientOnly>

Angular 2 的主要变化：

```typescript
// Angular 1.x: JavaScript
app.controller('MyCtrl', function ($scope) {
  $scope.message = 'Hello'
})

// Angular 2+: TypeScript + 装饰器
import { Component } from '@angular/core'

@Component({
  selector: 'app-my',
  template: '<p>{{message}}</p>'
})
export class MyComponent {
  message = 'Hello'
}
```

主要变化包括：

- **TypeScript**：从 JavaScript 切换到 TypeScript，引入静态类型
- **组件化**：从指令改为组件，更清晰的组件模型
- **性能优化**：引入更高效的变更检测机制
- **模块化**：基于 NgModules 的模块系统
- **移动端支持**：支持 Ionic 等移动开发框架

## 为什么 Angular 2 让社区分裂

<ClientOnly>
<InfoBox type="danger" title="Angular 2 的争议">
<strong>1. 不兼容升级</strong>：Angular 1.x 的代码无法在 Angular 2 上运行，必须完全重写。对于已经在生产环境使用 AngularJS 的团队，这意味着巨大的迁移成本。<br><br>
<strong>2. 学习曲线陡峭</strong>：从 JavaScript 切换到 TypeScript，引入 RxJS、Zone.js、依赖注入等概念，让很多前端开发者望而却步。<br><br>
<strong>3. 社区分裂</strong>：一部分开发者选择留在 AngularJS 1.x，一部分转向 Angular 2，还有一部分趁机投入 React 和 Vue 的怀抱。
</InfoBox>
</ClientOnly>

这种分裂反而给了 React 和 Vue 巨大的机会。React 在 2013 年发布，Vue 在 2014 年发布，它们提供了更渐进的迁移路径，更小的学习成本，逐渐赢得了大量开发者。

## 测试你的理解

<ClientOnly>
<Quiz question="AngularJS 双向数据绑定的含义是什么？" :options="[
  { text: '数据只能从 Model 流向 View', correct: false },
  { text: 'Model 和 View 互相自动同步', correct: true },
  { text: '用户输入不会影响数据', correct: false },
  { text: '只在初始化时同步一次', correct: false }
]" explanation="双向数据绑定意味着：当 Model 数据变化时，View 会自动更新；当用户在 View 中输入时，Model 也会自动同步更新。两者始终保持一致。" />
</ClientOnly>

<ClientOnly>
<Quiz question="Angular 2 让社区分裂的主要原因是什么？" :options="[
  { text: '性能太差', correct: false },
  { text: '与 AngularJS 1.x 完全不兼容，需要完全重写', correct: true },
  { text: '不支持 TypeScript', correct: false },
  { text: '被 Google 废弃了', correct: false }
]" explanation="Angular 2 不是 AngularJS 1.x 的升级，而是完全重写。已有的 AngularJS 代码无法直接运行在 Angular 2 上，必须全部重写。这给使用 AngularJS 的团队带来了巨大的迁移成本和决策困难。" />
</ClientOnly>

<ClientOnly>
<ExpandableDetail title="深入了解：MVVM 与 MVC 的区别">
MVC（Model-View-Controller）是后端常用的架构模式。Controller 负责处理用户输入，更新 Model，然后选择 View 来渲染。<br><br>
MVVM（Model-View-ViewModel）更强调 View 和 ViewModel 的数据绑定。ViewModel 不仅处理逻辑，还负责维护 View 的状态。当 View 发生变化时，ViewModel 自动同步 Model，反之亦然。这种自动同步就是双向数据绑定的基础。<br><br>
在前端框架中，Vue 的响应式系统和 AngularJS 的 $scope 都体现了 MVVM 的思想。React 则更接近 MVC，单向数据流让它更像传统的 Controller 模式。
</ExpandableDetail>
</ClientOnly>

AngularJS 和 Angular 2 是前端框架化的重要一步。它们证明了前端可以用工程化的方式管理复杂应用，也为后来的 React 和 Vue 提供了经验和教训。下一章，我们将看到 React 如何用 Virtual DOM 和组件化思想，重新定义了前端开发的范式。
