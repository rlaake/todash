<template>
  <div class="modal" v-bind:class="{'is-active': showModal}">
    <div class="modal-background" v-on:click="closeModal"></div>
    <div class="modal-content has-text-centered">
      <p class="is-size-1">New Project</p>
      <div class="field">
        <label class="label is-pulled-left">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Project name">
        </div>
      </div>

      <div class="field">
        <label class="label is-pulled-left">Color</label>
        <div class="control">
          <input class="input" type="color" value="#0C00FF">
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>

    <button class="modal-close is-large" aria-label="close" v-on:click="closeModal"></button>
  </div>
</template>

<script>
export default {
  name: 'NewProject',
  methods: {
    closeModal () {
      this.$store.dispatch('toggleNewProject')
    }
  },
  computed: {
    showModal () {
      return this.$store.getters.getNewProjectStatus
    }
  }
}
</script>

<style scoped>
  label {
    color: whitesmoke;
  }
  p {
    color: whitesmoke;
  }
  .field.is-grouped {
    padding-top: 1rem;
    justify-content: center;
  }
</style>
