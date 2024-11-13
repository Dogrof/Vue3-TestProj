<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Header from '@/components/Header/index.vue'
</script>

<template>
  <MainLayout>
    <template #header>
      <Header />
    </template>

    <template #main>
      <RouterView v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </template>
  </MainLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet');
@import "./style.css";
</style>