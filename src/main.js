import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CodeBlock from './components/CodeBlock.vue'
import CodeCompare from './components/CodeCompare.vue'
import ConceptCard from './components/ConceptCard.vue'
import InfoBox from './components/InfoBox.vue'
import Timeline from './components/Timeline.vue'
import ExpandableDetail from './components/ExpandableDetail.vue'
import Quiz from './components/Quiz.vue'
import './assets/styles/main.css'
import './assets/styles/components.css'

const app = createApp(App)
app.use(router)
app.component('CodeBlock', CodeBlock)
app.component('CodeCompare', CodeCompare)
app.component('ConceptCard', ConceptCard)
app.component('InfoBox', InfoBox)
app.component('Timeline', Timeline)
app.component('ExpandableDetail', ExpandableDetail)
app.component('Quiz', Quiz)
app.mount('#app')
