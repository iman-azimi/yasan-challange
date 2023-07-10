<template>
  <div class="flex flex-col items-center">
    <quiz-header :text="getQuestionText" />
    <quiz-timer @timeout="handleTimeOut" :current="currentQuestion" />
    <quiz-answers v-for="answer in getQuestionsAnswers" :key="answer.i" :text="answer.text" @clicked="selectAnswer(answer.is_corect)"/>
    <quiz-check-answer :count="getQuestions.length" :answers="getAnswers"/>
  </div>
</template>

<script setup>
useHead({
  title: 'quiz - yasna challange',
})

import { computed, ref } from 'vue'
import { useQuizStore } from '../stores/quiz'
const router = useRouter()
const store = useQuizStore()

await useAsyncData('quiz', () => store.fetchQuestions())  // Fetch questions and save them in the state

const currentQuestion = ref(1)

const getQuestions = computed(() => {
  return store.questions
})

const getQuestionText = computed(() => {
  return getQuestions.value[currentQuestion.value - 1].text
})

// when time runs out and user not select answer
const handleTimeOut = () => {
  store.enterAnswer(false) // Enter a wrong answer on Store
  if (currentQuestion.value < getQuestions.value.length) {   // If there is a next question, we will display new question
    currentQuestion.value += 1
  }
  else handleShowResultPage() // If question is the last, go to the results page
}


// Get all the answers to the question
const getQuestionsAnswers = computed(() => {
  return getQuestions.value[currentQuestion.value - 1].answers
})

// get all the user's answers
const getAnswers = computed(() => {
  return store.answers
})

// When any answer is clicked 
const selectAnswer = (answer) => {
  store.enterAnswer(answer) // Enter the user's answer in the store, correct or incorect
  if (currentQuestion.value < getQuestions.value.length) { // If there is a next question, we will display new question
    currentQuestion.value += 1
  }
  else handleShowResultPage() // If question is the last, go to the results page
}

const handleShowResultPage = () => {
  router.push('/results')
}
</script>