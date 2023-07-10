<template>
  <div class="flex mt-4">
    <div v-for="i in count" :key="i" class="w-10 h-10 rounded-full border-2 border-gray-900 mx-1" :class="getBgColor(i)">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['count', 'answers'])

const getBgColor = (i) => {
  const index = i - 1
  if (typeof props.answers[index] == 'boolean') {
    if (props.answers[index] == true) {
      return 'bg-correct'
    }
    if (props.answers[index] == false) {
      return 'bg-incorrect'
    }
  }
  return 'bg-transparent'
}
</script>
