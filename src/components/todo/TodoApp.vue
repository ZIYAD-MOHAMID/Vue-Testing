<template>
  <main>
    <h1>Hi Ziad .M</h1>
    <br />
    <Nav />
    <br />
    <div>
      <div
        :class="todo.completed ? 'completed' : ''"
        v-for="todo in todos"
        :key="todo.id"
        data-test="Todo"
      >
        {{ todo.text }}
        <input type="checkbox" v-model="todo.completed" data-test="Todo-checkbox" />
      </div>
      <form @submit.passive="createTodo">
        <input type="text" data-test="form" v-model="name" />
        <button @click="createTodo">Goo</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Nav from '../Nav/Nav.vue'
const name = ref()

const createTodo = () => {
  todos.value.push({
    id: Math.floor(Math.random() * 100000),
    text: name.value,
    completed: false
  })
  name.value = ''
}

const todos = ref([
  {
    id: 1,
    text: 'learn Vue Testing',
    completed: false
  }
])
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: red;
}
</style>
