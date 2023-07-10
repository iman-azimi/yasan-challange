import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questionList: [],
    answersList: [] as boolean[]
  }),

  getters: {
    questions: (state) => state.questionList,
    answers: (state) => state.answersList,
  },

  actions: {
    async fetchQuestions() {
      const data = await $fetch<[]>('http://localhost:3000/data.json')
      this.questionList = data
      this.answersList = []
    },
    enterAnswer(answer: boolean) {
      this.answersList.push(answer)
    }
  },
})
