<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  question: { type: String, required: true },
  options: {
    type: Array,
    required: true,
    // [{ text: 'Option A', correct: false }, { text: 'Option B', correct: true }, ...]
  },
  explanation: { type: String, default: '' },
})

const selectedIndex = ref(null)
const answered = computed(() => selectedIndex.value !== null)
const isCorrect = computed(() =>
  answered.value && props.options[selectedIndex.value]?.correct
)

function select(index) {
  if (answered.value) return
  selectedIndex.value = index
}
</script>

<template>
  <div class="quiz">
    <div class="quiz-question">{{ question }}</div>
    <ul class="quiz-options">
      <li
        v-for="(opt, i) in options"
        :key="i"
        class="quiz-option"
        :class="{
          selected: selectedIndex === i,
          correct: answered && opt.correct,
          wrong: selectedIndex === i && !opt.correct,
        }"
        @click="select(i)"
      >
        {{ opt.text }}
      </li>
    </ul>
    <div v-if="answered" class="quiz-explanation">
      <strong>{{ isCorrect ? '正确!' : '错误。' }}</strong>
      {{ explanation }}
    </div>
  </div>
</template>
