<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/todo/TodoApp.vue'
import Parint from './components/ShallowRendering/Parint/Parint.vue'
import ViewView from './components/WithOnther/ViewView.vue'
import pokemon from './components/WithOnther/pokemon/my-pokemon.vue'
// import TheWelcome from './components/TheWelcome.vue'

const msg = ref('')
const inputMsg = ref('')
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <ToDo />
    <br />
    <br />
    <!-- <TheWelcome /> -->
    <h1>{{ msg }}</h1>
    <p>
      <input type="text" v-model="inputMsg" placeholder="Enter a message..." />
      <button @click="msg = inputMsg">Submit</button>
    </p>
    <br />
    <ViewView element="div">Hello From ViewView</ViewView>
    <br />
    <pokemon />
  </main>
  <Parint />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
