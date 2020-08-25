<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="columns is-mobile is-marginless">
      <ProjectList></ProjectList>
      <TaskList v-bind:class="{'is-hidden': !haveProjects || navActive}"></TaskList>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navigation from './components/Navigation.vue'
import ProjectList from './components/ProjectList.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    ProjectList,
    TaskList
  },
  computed: {
    ...mapGetters(['navActive', 'projectListClasses', // UI module
      'haveProjects', 'projectIsEditing']) // Projects module
  },
  methods: {
    ...mapActions(['toggleNav', 'setProjectListClasses', 'setNavActive', 'toggleUIIsEditing', // UI module
      'getProjects', 'checkForProjects']), // Projects module

    // window resize listener callback
    resizeListenerCB () {
      if (window.innerWidth > 1023 && this.haveProjects && !this.projectIsEditing) {
        this.setProjectListClasses('is-2 is-hidden-touch')
        this.setNavActive(false)
      } else if (window.innerWidth <= 1023 && this.projectIsEditing) {
        this.setProjectListClasses('')
        this.setNavActive(true)
      }
    }
  },
  // retrieve data from local storage, initialize deault project if localstorage is empty
  created () {
    this.getProjects()
    this.checkForProjects()
  },
  mounted () {
    window.addEventListener('resize', this.resizeListenerCB)
  },
  // show only the projects column if there are no projects
  updated () {
    if (!this.haveProjects) {
      this.setProjectListClasses('')
      this.setNavActive(false)
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
