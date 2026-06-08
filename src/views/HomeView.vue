<script setup>
import { chapters } from '../data/chapters'
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <div class="home">
    <header class="home-header">
      <h1>Frontend Evolution</h1>
      <p class="home-subtitle">从 HTML 到现代框架 -- 前端开发演进之路</p>
      <p class="home-desc">
        这是一个为有 HTML/JavaScript/CSS 基础的开发者准备的学习指南。
        我们将沿着时间线，探索前端开发是如何从简单的页面脚本演进到今天的复杂框架生态的。
        每一章聚焦一个关键转折点，帮你理解"为什么"而不仅仅是"是什么"。
      </p>
    </header>

    <section class="home-chapters">
      <h2>章节目录</h2>
      <HomeCard
        v-for="ch in chapters"
        :key="ch.slug"
        :number="ch.number"
        :title="ch.title"
        :summary="ch.summary"
        :slug="ch.slug"
      />
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 700px;
  margin: 0 auto;
  padding: 4em 2em;
}

.home-header {
  margin-bottom: 3em;
  text-align: center;
}

.home-header h1 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0.25em;
}

.home-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5em;
}

.home-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}

.home-chapters h2 {
  border: none;
  margin-top: 0;
  margin-bottom: 1.5em;
  text-align: center;
}
</style>
