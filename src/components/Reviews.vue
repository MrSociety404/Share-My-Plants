<template>
  <section class="reviews" v-if="reviewers">
    <h3 class="reviews__title">Customer Reviews</h3>
    <ReviewCar 
      v-for="reviewer in reviewers.results"
      :key="reviewer.login.uuid"
      :review="reviewer"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import ReviewCar from '@/components/ReviewCard'
const reviewers = ref(null)

onMounted(async () => {
  const response = await fetch('https://randomuser.me/api/?results=5')
  if(!response.ok) throw new Error(response.statusText)
  reviewers.value = await response.json()
})
</script>

<style lang="scss">
.reviews {
  &__title {
      font-size: 2em;
      font-weight: 500;
      letter-spacing: .05em;
      margin: 2em 0;
    }
}
</style>