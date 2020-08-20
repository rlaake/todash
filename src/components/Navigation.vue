<template>
  <nav class="navbar">

    <div class="navbar-brand">

      <a class="navbar-item" href="http://localhost:8080">
        <img src="../assets/images/logo.svg" width="50" height="100">
        Todash
      </a>

      <div class="navbar-item">{{today}}</div>

      <a role="button" class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{'is-active': navActive, 'is-hidden': !haveProjects}">
        <span></span>
        <span></span>
        <span></span>
      </a>

    </div>

    <div id="navbarInfo" class="navbar-menu is-paddingless">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary"><strong>Sign up</strong></a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(['haveProjects', 'navActive', 'today'])
  },
  methods: {
    ...mapActions(['toggleNav'])
  }
}
</script>

<style scoped>
</style>
