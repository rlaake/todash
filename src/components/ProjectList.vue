<template>
  <div class="column is-paddingless" v-bind:class=classList>
    <nav class="panel scroll-container">
      <div class="panel-heading" style="border-radius: 0">
        Projects
        <a>
          <i class="fas fa-plus"></i>
        </a>
      </div>
      <Project v-for="project in projects" v-bind:key="project.id" v-bind:project="project"></Project>
    </nav>
  </div>
</template>

<script>
import Project from './Project.vue'
export default {
  name: 'ProjectList',
  props: ['classList'],
  components: {
    Project
  },
  computed: {
    projects () {
      return this.$store.getters.getProjects
    }
  }
}
</script>

<style scoped>
  .panel-heading > a {
    margin-left: 1rem;
  }
</style>
