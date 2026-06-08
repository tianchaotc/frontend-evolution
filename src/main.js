import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CodeBlock from './components/CodeBlock.vue'
import './assets/styles/main.css'
import './assets/styles/components.css'

const app = createApp(App)
app.use(router)
app.component('CodeBlock', CodeBlock)
app.mount('#app')
