<template>
  <main class="product" v-if="plant">
    <GoBack />
    <div class="product__container" >
      <img
        :src="require(`@/assets/images/${plant.image}`)"
        :alt="plant.name"
        class="product__image"
      />
      <div class="product__info">
        <h2 class="product__title">{{ plant.name }}</h2>
        <p class="product__desc">{{ plant.description }}</p>
        <Button content="PICK UP" @click="store.commit('addPlants',plant)"/>
      </div>
    </div>
    <Reviews />
  </main>
</template>

<script setup>
import GoBack from "@/components/GoBack";
import Button from "@/components/Button";
import Reviews from "@/components/Reviews";
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute();
const plant = ref(null);

onMounted(async () => {
  const response = await fetch(
    `https://safe-hollows-83188.herokuapp.com/plants/${route.params.id}`
  );
  plant.value = await response.json()
});

</script>

<style lang="scss">
.product {
  padding: 0 1em;
  max-width: $lg;
  &__back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;
    font-size: 1.1em;
    cursor: pointer;
    margin: 4em 0 2em;
  }
  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__image {
    border: 1px solid $dark;
    width: 250px;
    height: auto;
    margin-right: 3em;
  }
  &__info {
    max-width: 600px;
  }
  &__title {
    font-family: $serif;
    font-size: 3em;
  }
  &__desc {
    margin: 1em 0;
    letter-spacing: 0.05em;
  }
}
</style>