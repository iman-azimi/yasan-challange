<template>
  <div class="h-full flex justify-center items-center">
    <div class="text-center">
      <div class="mb-4">You have answerred {{ getPercent }}% of questions.</div>
      <NuxtLink to="/quiz" class="bg-btn rounded-lg px-6 py-2 text-white">Restart</NuxtLink>
    </div>
  </div>
</template>


<script setup>
useHead({
  title: 'result - yasna challange',
})
definePageMeta({
  middleware: 'result'
})
import { useQuizStore } from '../stores/quiz'
const store = useQuizStore()

const getCorrectAnswer = computed(() => {
  const answers = store.answers
  const correctAnswers = answers.filter((answer)=>{
    return answer
  })
  return correctAnswers
})

const getPercent = computed(() => {
  const correctCount = getCorrectAnswer.value.length
  const questionsCount = store.questions.length
  return (100 * correctCount) / questionsCount
})
</script>
