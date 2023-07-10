import { useQuizStore } from '../stores/quiz'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useQuizStore()

  if (!store.answers.length) {
    return navigateTo('/')
  }
})
 