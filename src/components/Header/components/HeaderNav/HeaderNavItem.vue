<script setup lang="ts">
type linkType = {
  link: string,
  name: string,
  icon: string,
}

defineProps<{
  menuItem: linkType,
}>()
</script>

<template>
  <RouterLink class="p-2 nav-item flex items-center text-gray-500 rounded-full" :to="menuItem.link">
    <span class="material-icons text-base mr-2 text-secondary-500">
        {{ menuItem.icon }}
    </span>
    {{ menuItem.name }}
  </RouterLink>
</template>

<style scoped lang="scss">
.nav-item{
  &.router-link-exact-active{
    color: black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
</style>