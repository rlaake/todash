<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="columns is-mobile is-marginless" v-bind:class="{'is-hidden': showNav}">
      <ProjectsList class-list="is-2 is-hidden-touch"></ProjectsList>
      <TodosList></TodosList>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import ProjectsList from './components/ProjectsList.vue'
import TodosList from './components/TodosList.vue'
export default {
  name: 'App',
  data () {
    return {
      today: new Date().toLocaleDateString(),
      showNav: false,
      showButtons: false
    }
  },
  components: {
    Navigation,
    ProjectsList,
    TodosList
  },
  created () {
    window.addEventListener('resize', this.checkForActiveNav)
  },
  destroyed () {
    window.removeEventListener('resize', this.checkForActiveNav)
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    },
    checkForActiveNav () {
      if (window.innerWidth > 1011 && this.showNav) {
        this.showNav = false
      }
    },
    toggleButtons () {
      this.showButtons = !this.showButtons
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
