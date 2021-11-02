<template>
  <div class="item">
    <img
      :src="require(`@/assets/images/${plant.image}`)"
      :alt="plant.name"
      class="item__image"
    />
    
    <div class="item__info">
      <h4 class="item__title"> {{plant.name}} </h4>
      <p class="item__desc">{{ plant.description}}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  plant: Object,
});
</script>

<style lang="scss">
.item {
  display: flex;
  margin: 3rem 0;
  letter-spacing: .05em;
  &__image {
    width: 150px ;
    height: auto;
    border: 1px solid $dark;
    margin-right: 3em;
  }
  &__title {
    font-family: $serif;
    font-size: 2em;
  }
  &__desc {
    margin: 1em 0;
  }
}
</style>