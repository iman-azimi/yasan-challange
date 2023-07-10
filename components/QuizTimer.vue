<template>
  <div class="mt-4 w-1/4">
    <div class="text-center mb-2">
       Current Time: {{ countdown }} S
    </div>
    <ProgressBar :time="countdown" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['current'])
const emit = defineEmits(['timeout'])

const countdown = ref(10)
const timer = ref()

watch(countdown, () => {
  // clear Last timer and restart new timer if there is a new question
  clearTimeout(timer.value)
  timer.value = setTimeout(()=> {
    if(countdown.value > 0) countdown.value -= 1
    else {
      emit('timeout')
    }
  }, 1000)
}, { immediate: true })

watch(() => props.current, () => {
  countdown.value = 10
})
</script>

<style scoped>

</style>