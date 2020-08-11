<template>
  <div id="app">
    <Navigation v-on:toggle-nav="toggleNav()"></Navigation>
    <div class="columns is-mobile is-marginless" v-bind:class="{'is-hidden': showNav()}">
      <ProjectList class-list="is-2 is-hidden-touch"></ProjectList>
      <TaskList></TaskList>
    </div>
    <NewProject></NewProject>
    <NewTask></NewTask>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import ProjectList from './components/ProjectList.vue'
import TaskList from './components/TaskList.vue'
import NewProject from './components/NewProject.vue'
import NewTask from './components/NewTask.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    ProjectList,
    TaskList,
    NewProject,
    NewTask
  },
  created () {
    window.addEventListener('resize', this.checkForActiveNav)
  },
  destroyed () {
    window.removeEventListener('resize', this.checkForActiveNav)
  },
  methods: {
    toggleNav () {
      this.$store.dispatch('toggleNav')
    },
    checkForActiveNav () {
      if (window.innerWidth > 1011 && this.showNav()) {
        this.$store.dispatch('setNav', false)
      }
    },
    showNav () {
      return this.$store.getters.getNavStatus
    }
  }
}
</script>

<style>
  html, body {
    overflow: hidden !important;
  }
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .columns {
    flex: 1;
  }
  .column {
    display: flex !important;
    flex-direction: column;
  }
  .scroll-container {
    overflow-y: auto;
    height: 0px;
    flex: 1 1 auto;
  }
  .active-nav {
    display: flex !important;
    flex-direction: column;
    flex: 1;
  }
</style>
