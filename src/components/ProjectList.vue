<template>
  <div class="column is-paddingless" v-bind:class=projectListClasses>
    <nav class="panel scroll-container">
      <div class="panel-heading">Projects
        <a><i class="fas fa-plus" v-bind:class="{'is-hidden': UIIsEditing}" v-on:click="setUIStatus(); toggleUIIsEditing(); addProject();"></i></a>
      </div>
      <Project v-for="project in allProjects" v-bind:key="project.id" v-bind:project="project"></Project>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Project from './Project.vue'
export default {
  name: 'ProjectList',
  components: {
    Project
  },
  computed: {
    ...mapGetters(['projectListClasses', 'UIIsEditing', 'allProjects', 'activeProject', 'haveProjects'])
  },
  methods: {
    ...mapActions(['setProjectListClasses', 'setNavActive', 'toggleUIIsEditing', 'updateProjects', 'deleteProject', 'setProjectActive', 'addProject']),
    setUIStatus () {
      if (!this.haveProjects && window.innerWidth <= 1023) {
        this.setProjectListClasses('')
        this.setNavActive(true)
      } else if (!this.haveProjects) {
        this.setProjectListClasses('is-2 is-hidden-touch')
        this.setNavActive(false)
      }
    }
  }
}
</script>

<style scoped>
  .panel {
    border-radius: 0;
  }
  .panel-heading {
    border-radius: 0 !important;
    background-color: whitesmoke;
  }
  .panel-heading > a {
    margin-left: 1rem;
  }
</style>
