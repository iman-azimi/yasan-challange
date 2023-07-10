// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'yasna challange',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  vite: {
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: '@import "@/assets/style/global.sass"',
            },
        },
    },
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
