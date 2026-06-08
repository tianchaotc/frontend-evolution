<script setup>
import ChapterNav from '../components/ChapterNav.vue'
</script>

<template>
  <div class="chapter-layout">
    <ChapterNav />
    <main class="chapter-content">
      <article class="chapter-article">
        <slot />
      </article>
      <nav class="chapter-footer-nav">
        <slot name="footer-nav" />
      </nav>
    </main>
  </div>
</template>

<style scoped>
.chapter-layout {
  display: flex;
  min-height: 100vh;
}

.chapter-content {
  margin-left: var(--sidebar-width);
  flex: 1;
  padding: 2em 3em;
  max-width: calc(var(--content-max-width) + 6em);
}

.chapter-article {
  max-width: var(--content-max-width);
}

.chapter-footer-nav {
  max-width: var(--content-max-width);
  margin-top: 3em;
  padding-top: 2em;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .chapter-content {
    margin-left: 0;
    padding: 1.5em;
  }
}
</style>
