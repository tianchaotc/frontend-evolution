<script setup>
defineProps({
  type: {
    type: String,
    default: 'tip',
    validator: (v) => ['tip', 'warning', 'danger'].includes(v),
  },
  title: { type: String, default: '' },
})

const icons = { tip: '✅', warning: '⚠️', danger: '🚫' }
const titles = { tip: '提示', warning: '注意', danger: '警告' }
</script>

<template>
  <div :class="`info-box info-box--${type}`">
    <div class="info-box-title">{{ icons[type] }} {{ title || titles[type] }}</div>
    <slot />
  </div>
</template>
