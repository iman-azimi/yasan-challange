<template>
  <div class="bg-header rounded-lg w-1/2 text-center py-2 mt-4">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['text'])
</script>

<style scoped>

</style>