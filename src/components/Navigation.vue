<template>
  <nav class="navbar" role="navigation" aria-label="main navigation" v-bind:class="{'active-nav':  showNav}">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:8080">
        <img src="../assets/images/logo.svg" width="50" height="100">
        Todash
      </a>
      <div class="navbar-item">{{today}}</div>
      <a role="button" class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{'is-active':  showNav}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarInfo" v-bind:class="{'is-active':  showNav, 'active-nav':  showNav}" class="navbar-menu is-paddingless">
      <div class="navbar-start" v-bind:class="{'is-hidden': !showNav, 'active-nav':  showNav}">
        <div class="columns is-mobile is-marginless" v-bind:class="{'active-nav':  showNav}">
          <ProjectList class-list=""></ProjectList>
        </div>
      </div>
      <div class="navbar-end" v-bind:class="{'is-hidden':  showNav}">
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
</template>

<script>
import ProjectList from './ProjectList'
export default {
  name: 'Navigation',
  components: {
    ProjectList
  },
  data () {
    return {
      today: new Date().toLocaleDateString()
    }
  },
  methods: {
    toggleNav () {
      this.$emit('toggle-nav')
    }
  },
  computed: {
    showNav: function () {
      return this.$store.getters.getNavStatus
    }
  }
}
</script>

<style scoped>
</style>
