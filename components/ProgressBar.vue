<template>
  <div class="w-full h-4 bg-gray-300 rounded-full">
    <div class="h-full text-center text-xs text-white bg-correct rounded-full duration-500" :style="{ width: `${Math.floor(time * 10)}%` }">
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['time'])

</script>

<style lang="scss" scoped>

</style>