<script setup>
import { ref } from 'vue'

const props = defineProps({
  code: { type: String, required: true },
  lang: { type: String, default: 'text' },
  title: { type: String, default: '' },
})

const copied = ref(false)

async function copyCode() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="code-block">
    <div class="code-block-header">
      <span>{{ title || lang }}</span>
      <button class="copy-btn" @click="copyCode">
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre><code :class="`language-${lang}`">{{ code }}</code></pre>
  </div>
</template>
