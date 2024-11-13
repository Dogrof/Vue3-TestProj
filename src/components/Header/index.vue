<script setup lang="ts">
import HeaderHero from "@/components/Header/components/HeaderHero.vue";
import HeaderNav from "@/components/Header/components/HeaderNav/index.vue";

const userInfo = {
  name: 'Regreener BV',
  date: '2023-03-08T12:34:56.789Z'
}
</script>

<template>
  <HeaderHero :user="userInfo" />
  <HeaderNav />
</template>

<style scoped>

</style>