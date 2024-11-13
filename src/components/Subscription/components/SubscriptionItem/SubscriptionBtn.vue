<script setup lang="ts">
defineProps<{
  type?: 'danger' | 'apply',
}>()
</script>

<template>
  <button
    class="btn flex text-lg font-bold justify-center items-center rounded-full text-gray-500 p-2 border"
    :class="type"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn{
  border-color: #47c095;
  &.danger{
    background-color: #ca080b;
    border-color: #ca080b;
    color: white;
  }
  &.apply{
    background-color: #47c095;
    color: white;
  }
}
</style>