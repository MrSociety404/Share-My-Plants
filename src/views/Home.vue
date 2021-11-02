<template>
  <main class="home">
    <section class="home__head">
      <div class="home__info">
        <h2 class="home__title">SHARE YOUR PLANTS TO WIN MONEY</h2>
        <p class="home__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus et cras dignissim.</p>
        <Button content="SHARE HERE" />
      </div>
      <img src="@/assets/images/home-page.webp" alt="illustration" class="home__illustration">
    </section>
    <section class="home__section" v-if="popularPlants">
      <h3 class="home__subtitle">Popular plants</h3>
      <div class="home__popularGallery">
        <Card 
          v-for="plant in popularPlants"
          :key="plant.id"
          :plant="plant"
        />
      </div>
    </section>
    <section class="home__section" v-if="plants">
      <h3 class="home__subtitle">Hot plants in your area</h3>
      <div class="home__grid">
        <router-link
        v-for="plant in plants"
        :key="plant.id"
        :to="`/product/${plant.id}`"        
        class="home__grid-link"
        >
          <img :src="require(`@/assets/images/${plant.image || 'home-page.webp'}`)" :alt="plant.name" class="home__grid-plant">
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import { onMounted, ref } from '@vue/runtime-core'

const plants = ref(null)
const popularPlants = ref(null)

onMounted(async () => {
  plants.value = await (await fetch('https://safe-hollows-83188.herokuapp.com/plants')).json()
  popularPlants.value = await (await fetch('https://safe-hollows-83188.herokuapp.com/popularPlants')).json()
})
</script>

<style lang="scss">
.home {
  padding: 0 1em;
  &__head {
    display: flex;
    align-items: center;
    max-width: $xl;
    margin: 8% auto;
    justify-content: space-around;
  }
  &__info {
    max-width: 420px ;
    height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__title {
    font-family: $serif;
    font-size: 2.2em;
    font-weight: 500;
  }
  &__desc {
    line-height: 1.5em;
    font-size: 1.1em;
  }
  &__illustration {
    width: 300px;
    height: auto;
  }
  &__subtitle {
    font-size: 2em;
    font-weight: 500;
    letter-spacing: .05em;
  }
  &__popularGallery {
    display: flex;
    justify-content: space-between;
    padding: 3em 0;
  }
  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    &-link {
      border: 1px solid $dark;
      cursor: pointer;
      width: 200px;
      background-color: $light-grey;
      margin: 1em 0;
    }    
  }
}
</style>