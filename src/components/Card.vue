<template>
  <router-link :to="`/product/${plant.id}`" class="card">
    <img
      :src="require(`@/assets/images/${plant.image || 'home-page.webp'}`)"
      :alt="plant.name"
      class="card__image"
    />
    <p class="card__name">{{ plant.name }}</p>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  plant: Object,
});
</script>

<style lang="scss">
.card {
  width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid $dark;
  &:hover {
    .card__name {
      box-shadow: $hover-shadow;
    }
  }
  &__image {
    max-width: 100%;
    border-bottom: 1px solid $dark;
    background-color: $light-grey;
  }
  &__name {
    text-align: center;
    font-family: $serif;
    padding: 0.6em 0;
    transition: box-shadow .2s ease;
    
  }
}
</style>