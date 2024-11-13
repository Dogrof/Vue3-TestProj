<script setup lang="ts">
import { linksData } from './headerLinks.json'
import HeaderNavItem from "./HeaderNavItem.vue";
</script>

<template>
  <div class="header-nav flex p-4 w-3/4 m-auto border-b">
    <HeaderNavItem
        v-for="(link, index) in linksData"
        class="mr-12"
        :key="index"
        :menu-item="link"
    />
  </div>
</template>

<style scoped>
</style>