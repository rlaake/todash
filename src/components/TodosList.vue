<template>
  <div class="column is-paddingless" style="background-color: whitesmoke">
    <div class="scroll-container">
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="is-size-3">Cooking</span>
          </a>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i></span>
          </a>
        </div>
      </nav>
      <Todo></Todo>
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
  name: 'TodosList',
  components: {
    Todo
  }
}
</script>

<style scoped>
.level-left {
    padding-left: 3rem;
    padding-top: 0.5rem;
  }
  nav.level {
    margin: 0;
  }
</style>
