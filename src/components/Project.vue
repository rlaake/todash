<template>
  <a class="panel-block" v-on:click="loadProject(); closeNav();">
    <span class="panel-icon">
      <i class="far fa-dot-circle" aria-hidden="true" v-bind:style="style"></i>
    </span>
    {{project.title}}
  </a>
</template>

<script>
export default {
  name: 'Project',
  props: ['project'],
  computed: {
    style () {
      return 'color: ' + this.project.color
    }
  },
  methods: {
    loadProject () {
      this.$store.dispatch('setActiveProject', this.project.id)
    },
    closeNav () {
      this.$store.dispatch('setNav', false)
    }
  }
}
</script>

<style scoped>
</style>
