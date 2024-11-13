<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/services'
import backgroundUrl from '@/assets/images/hero-back.jpg'

type userType = {
  name: string,
  date: string,
}

const props = defineProps<{
  user: userType,
}>()

const backgroundImage = `background-image:url(${backgroundUrl})`
const formattedDate = ref<string>('')
formattedDate.value = formatDate(props.user.date, {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})
</script>

<template>
<div class="header-hero px-48 py-16 flex justify-between items-end min-h-48 bg-cover bg-center" :style="backgroundImage">
  <div class="text-col text-white flex flex-col items-start">
    <h2 class="text-2xl">Settings page</h2>
    <h1 class="text-3xl">{{ user.name }}</h1>
    <p class="text-lg">Regreening since {{ formattedDate }}</p>
  </div>
  <img
      class="w-40 mr-24"
      src="@/assets/images/hero-icon.png"
      alt="hero-icon"
  >
</div>
</template>

<style scoped>

</style>