<template>
  <a class="panel-block">
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
  }
}
</script>

<style scoped>
</style>
