<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    // [{ label: 'jQuery', code: '...', lang: 'javascript' }, ...]
  },
})

const activeIndex = ref(0)
</script>

<template>
  <div class="code-compare">
    <div class="code-compare-tabs">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        class="code-compare-tab"
        :class="{ active: activeIndex === i }"
        @click="activeIndex = i"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="code-compare-content">
      <div class="code-block" style="margin: 0; border-radius: 0;">
        <pre><code :class="`language-${tabs[activeIndex].lang || 'javascript'}`">{{ tabs[activeIndex].code }}</code></pre>
      </div>
    </div>
  </div>
</template>
