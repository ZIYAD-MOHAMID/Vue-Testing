<script setup>
import { ref } from 'vue'

const pokemons = ref([])

async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  const pokemon = await data.json()
  console.log(pokemon)
  pokemons.value = pokemon.results
}
</script>

<template>
  <main class="m">
    <button class="b" @click="getPokemon()">Get Pokemon!!</button>
    <span class="s" v-for="(pokemon, idx) in pokemons" :key="idx">
      {{ pokemon.name }}
    </span>
  </main>
</template>

<style scoped>
.m {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.b {
  margin: 33px;
  width: 100%;
}
.s {
  margin: 3px 20px;
}
</style>
