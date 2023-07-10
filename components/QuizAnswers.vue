<template>
  <div class="bg-answer rounded-lg w-2/5 text-center py-3 mt-6 cursor-pointer" @click="handleCilck">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['text'])
const emit = defineEmits(['clicked'])
const handleCilck = () => {
  emit('clicked')
}
</script>

<style scoped>

</style>