import { describe, test, expect, beforeEach } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import { createPinia, setActivePinia } from 'pinia'

import quiz from '../pages/quiz.vue'
import { useQuizStore } from '../stores/quiz'

describe('quiz', () => {
  test('quiz page', () => {
    expect(() => quiz)
  })
})

describe('question', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('fetch question', () => {
    const store = useQuizStore()
    expect(() => store.fetchQuestions())
  })
})

describe('get question', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('fetch question', () => {
    const store = useQuizStore()
    expect(() => store.questions)
  })
})

describe('answer', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('enter answer', () => {
    const store = useQuizStore()
    expect(() => store.enterAnswer(true))
  })
})

describe('get answer', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  test('get all answer', () => {
    const store = useQuizStore()
    expect(() => store.answers)
  })
})