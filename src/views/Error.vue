<template>
  <main class="error">
    <h2 class="error__title">What are you doing here ?</h2>
    <p class="error__message">
      Are you lost ?
    </p>
    <Button content="find your way here" @click="router.push('/')" />
    <img class="error__img" src="@/assets/images/error.webp" alt="error-image">
  </main>
</template>

<script setup>
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<style lang="scss">
.error {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  &__title {
    font-family: $serif;
    font-size: 3em;
  }
  &__message {
    font-size: 1.5em;
  }
  &__img {
    width: 450px;
  }
}
</style>