<script setup lang="ts">
import { subscriptions } from './subscriptionItems.json'
import SubscriptionItem from "@/components/Subscription/components/SubscriptionItem/index.vue";
</script>

<template>
  <div class="subscription-block w-3/4 m-auto rounded-2xl mt-8 overflow-auto">
    <div class="heading-row font-bold text-2xl text-black bg-gray-200 px-24 py-8">Climate Projects - Subscription</div>
    <div class="items-row flex p-8 justify-between">
      <SubscriptionItem
          v-for="(item, index) in subscriptions"
          class="mr-6"
          :key="index"
          :item="item"
      />
    </div>

  </div>
</template>

<style scoped>
.subscription-block{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>