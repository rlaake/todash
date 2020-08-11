<template>
  <div class="column is-paddingless" style="background-color: whitesmoke">
    <div class="scroll-container">
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="is-size-3">{{activeProject.title}}</span>
          </a>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i></span>
          </a>
        </div>
      </nav>
      <Task v-for="(task, index) in activeProject.tasks" v-bind:task="task" v-bind:key="index"></Task>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  name: 'TaskList',
  components: {
    Task
  },
  computed: {
    activeProject () {
      return this.$store.getters.getActiveProject
    }
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
