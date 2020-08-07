<template>
  <div id="app">

    <nav class="navbar" role="navigation" aria-label="main navigation" v-bind:class="{'active-nav':showNav}">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:8080">
          <img src="./assets/images/logo.svg" width="50" height="100">
          Todash
        </a>
        <div class="navbar-item">{{today}}</div>
        <a role="button" class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{'is-active':showNav}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarInfo" v-bind:class="{'is-active':showNav, 'active-nav':showNav}" class="navbar-menu is-paddingless">
        <div class="navbar-start" v-bind:class="{'is-hidden': !showNav, 'active-nav':showNav}">
          <div class="columns is-mobile is-marginless" v-bind:class="{'active-nav':showNav}">
            <ProjectsList class-list=""></ProjectsList>
          </div>
        </div>
        <div class="navbar-end" v-bind:class="{'is-hidden':showNav}">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns is-mobile is-marginless" v-bind:class="{'is-hidden': showNav}">

      <ProjectsList class-list="is-one-fifth is-hidden-touch"></ProjectsList>

      <TodosList></TodosList>

    <!-- End of columns -->
    </div>

  <!-- End of app -->
  </div>
</template>

<script>
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
