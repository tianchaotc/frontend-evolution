import { createRouter, createWebHashHistory } from 'vue-router'
import { chapters } from '../data/chapters'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  ...chapters.map((ch) => ({
    path: `/chapter/${ch.slug}`,
    name: `chapter-${ch.slug}`,
    component: () => import(`../content/${ch.number.toString().padStart(2, '0')}-${ch.slug}.md`),
    meta: { chapter: ch },
  })),
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

export default router
