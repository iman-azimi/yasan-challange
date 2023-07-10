import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        btn: '#0095ff',
        header: '#95c4ee',
        answer: '#d9e9ff',
        correct: '#008000',
        incorrect: '#ff0000'
      }
    }
  }
}