<script setup lang="ts">
import SubscriptionBtn from "@/components/Subscription/components/SubscriptionItem/SubscriptionBtn.vue";

type subscriptionType = {
  heading: string,
  content: string,
  icon: string,
  actionText: string,
  btnType?: 'danger' | 'apply'
}

defineProps<{
  item: subscriptionType,
}>()
</script>

<template>
<div class="item p-8 flex flex-col items-start justify-between">
  <div class="heading-row flex justify-between items-center w-full">
    <h3 class="text-lg text-black font-bold">{{item.heading}}</h3>
    <span class="material-icons text-lg">
        {{ item.icon }}
    </span>
  </div>
  <p class="mb-6 text-base text-gray-500">{{item.content}}</p>
  <SubscriptionBtn class="w-full" :type="item.btnType">{{item.actionText}}</SubscriptionBtn>
</div>
</template>

<style scoped>
.material-icons{
  color: #47c095;
}
</style>