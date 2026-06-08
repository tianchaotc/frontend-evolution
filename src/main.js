import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CodeBlock from './components/CodeBlock.vue'
import CodeCompare from './components/CodeCompare.vue'
import './assets/styles/main.css'
import './assets/styles/components.css'

const app = createApp(App)
app.use(router)
app.component('CodeBlock', CodeBlock)
app.component('CodeCompare', CodeCompare)
app.mount('#app')
