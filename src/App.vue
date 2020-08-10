<template>
  <div id="app">
    <Navigation v-bind:showNav="showNav" v-on:toggle-nav="navClick"></Navigation>
    <div class="columns is-mobile is-marginless" v-bind:class="{'is-hidden': showNav}">
      <ProjectList class-list="is-2 is-hidden-touch"></ProjectList>
      <TaskList></TaskList>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import ProjectList from './components/ProjectList.vue'
import TaskList from './components/TaskList.vue'
export default {
  name: 'App',
  data () {
    return {
      showNav: false
    }
  },
  components: {
    Navigation,
    ProjectList,
    TaskList
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
    navClick () {
      this.toggleNav()
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
