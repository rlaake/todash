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
          <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
            <figure class="media-left is-size-4" style="align-self: center; padding-top: 0; padding-right: 0.5rem">
              <i class="far fa-dot-circle"></i>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <small style="color: red;">! Important</small>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
              </div>
            </div>
            <div class="buttons media-right" style="align-self: center;" v-bind:class="{'is-hidden': !showButtons}">
              <button class="button is-info"><i class="fas fa-edit"></i></button>
              <button class="button is-danger"><i class="fas fa-trash-alt"></i></button>
            </div>
          </article>
          <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
            <figure class="media-left is-size-4" style="align-self: center; padding-top: 0; padding-right: 0.5rem">
              <i class="far fa-dot-circle"></i>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <small style="color: red;" v-bind:class="{'is-hidden': true}">! Important</small>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
              </div>
            </div>
            <div class="buttons media-right" style="align-self: center;" v-bind:class="{'is-hidden': !showButtons}">
              <button class="button is-info"><i class="fas fa-edit"></i></button>
              <button class="button is-danger"><i class="fas fa-trash-alt"></i></button>
            </div>
          </article>
        </div>
      </div>

    <!-- End of columns -->
    </div>

  <!-- End of app -->
  </div>
</template>

<script>
import ProjectsList from './components/ProjectsList.vue'
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
    ProjectsList
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
  .level-left {
    padding-left: 3rem;
    padding-top: 0.5rem;
  }
  article {
    padding: 1rem;
    min-height: 40px;
  }
  nav.level {
    margin: 0;
  }
</style>
