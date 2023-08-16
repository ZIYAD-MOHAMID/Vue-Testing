<template>
  <main>
    <nav>
      <a href="#" class="a" id="home">Home</a>
      <a href="#" v-if="isLoggedIn" id="profile">My Profile</a>
    </nav>
  </main>
</template>

<script setup>
// import { ref } from 'vue'
const isLoggedIn = false
</script>

<style scoped>
.a {
  margin-right: 20px;
}
</style>
