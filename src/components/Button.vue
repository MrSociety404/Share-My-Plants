<template>
  <button class="btn">
    {{ content }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  content: String,
});
</script>

<style lang="scss">
.btn {
  padding: 0.8em 2em;
  border: 1px solid $dark;
  cursor: pointer;
  transition: box-shadow .2s ease;
  text-transform: uppercase;
  &:hover {
    box-shadow:$hover-shadow ;
  }
}
</style>