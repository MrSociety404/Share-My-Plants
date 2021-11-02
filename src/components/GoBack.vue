<template>
  <p class="back" @click="router.go(-1)">
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.50004 1.33334L1.83337 8L8.50004 14.6667"
          stroke="#827971"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Go back
    </p>
</template>

<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
</script>

<style lang="scss">
.back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;
    font-size: 1.1em;
    cursor: pointer;
    margin: 4em 0 2em;
    color: $dark;
    transition: color .2s ease;
    &:hover {
      color: $grey;
    }
  }
</style>