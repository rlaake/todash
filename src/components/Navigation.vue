<template>
  <nav class="navbar">

    <div class="navbar-brand">

      <div class="navbar-item">
        <img src="../assets/images/logo.svg" width="50" height="100">
        Todash
      </div>

      <a role="button" class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{'is-active': navActive, 'is-hidden': !haveProjects}">
        <span></span>
        <span></span>
        <span></span>
      </a>

    </div>

    <div id="navbarInfo" class="navbar-menu is-paddingless">
      <div class="navbar-end">
        <div class="navbar-item">{{today}}
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Navigation',
  computed: { ...mapGetters(['haveProjects', 'navActive', 'today']) },
  methods: { ...mapActions(['toggleNav']) }
}
</script>

<style scoped>
</style>
