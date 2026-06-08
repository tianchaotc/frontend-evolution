# Frontend Evolution

一个交互式的前端技术演进教程，通过 8 个章节带你了解前端开发从诞生到现代的发展历程。

## 在线访问

**[https://tianchaotc.github.io/frontend-evolution/](https://tianchaotc.github.io/frontend-evolution/)**

## 章节内容

1. **Web 的诞生** - HTML、JavaScript 和 CSS 的起源，以及早期 Web 开发的痛点
2. **jQuery 时代** - jQuery 的 $ 魔法解决了什么，又留下了什么问题
3. **SPA 革命** - 从多页应用到单页应用，Ajax 与前端路由的诞生
4. **Angular 与 MVVM** - 双向绑定、依赖注入，框架思维的建立
5. **React 改变一切** - Virtual DOM、组件化、单向数据流，React 为什么赢了
6. **Vue -- 渐进式方案** - 尤雨溪的思路，响应式原理，Vue 为什么在中国流行
7. **工具链演进** - 从 Webpack 到 Vite，Babel、ESLint、TypeScript 的出现
8. **今天的前端** - 现代框架对比、SSR/SSG、RSC，前端的未来方向

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - Vue.js 官方路由管理器
- **Shiki** - 语法高亮引擎
- **Markdown-it** - Markdown 解析器

## 本地开发

```bash
# 克隆项目
git clone https://github.com/tianchaotc/frontend-evolution.git

# 进入项目目录
cd frontend-evolution

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建部署

项目使用 GitHub Actions 自动部署到 GitHub Pages：

```bash
# 本地构建
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
frontend-evolution/
├── .github/workflows/     # GitHub Actions 配置
├── public/                # 静态资源
├── src/
│   ├── assets/           # 源代码资源
│   ├── components/       # Vue 组件
│   ├── content/          # 章节内容（Markdown）
│   ├── data/             # 数据文件
│   ├── layouts/          # 布局组件
│   ├── router/           # 路由配置
│   ├── views/            # 页面视图
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── index.html            # Vite 入口文件
├── vite.config.js        # Vite 配置
└── package.json          # 项目配置
```

## 特性

- 交互式代码示例
- 语法高亮显示
- 响应式设计，支持移动端
- 章节导航和进度跟踪
- 暗色主题

## 许可证

MIT License

## 作者

Tian - [GitHub](https://github.com/tianchaotc)
