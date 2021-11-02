<template>
  <main class="store">
    <GoBack />
    <MyPlant 
      v-for="plant in myPlants" 
      :key="plant.id" 
      :plant="plant" 
    />
    <section v-if="myPlants.length === 0" class="noMatch">
      <h2 class="noMatch__title">😔 No plants here !</h2>
      <img src="@\assets\images\store.png" alt="empty-shop" class="noMatch__img">
      <Button content="BACK HOME" @click="router.push('/')" />
    </section>
  </main>
</template>

<script setup>
import GoBack from "@/components/GoBack";
import MyPlant from "@/components/MyPlant";
import Button from "@/components/Button";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const store = useStore();
const myPlants = computed(() => store.state.myPlants);
</script>

<style lang="scss">
.noMatch {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &__title {
    font-size: 2em;
    font-family: $serif;
  }
  &__img {
    width: 400px;
    margin: 2em 0;
  }
}
</style>