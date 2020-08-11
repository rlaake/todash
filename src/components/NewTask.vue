<template>
  <div class="modal" v-bind:class="{'is-active': showModal}">
    <div class="modal-background" v-on:click="closeModal"></div>
    <div class="modal-content">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Task title">
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input" type="text" placeholder="Task description">
        </div>
      </div>

      <div class="field">
        <label class="label">Due Date</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" placeholder="(MM/DD/YYYY)">
          <span class="icon is-small is-left">
            <i class="fas fa-calendar"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This date is invalid</p>
      </div>

      <div class="field">
        <label class="label">Priority</label>
        <div class="control">
          <div class="select">
            <select>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
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
  name: 'NewTask',
  methods: {
    closeModal () {
      this.$store.dispatch('toggleNewTask')
    }
  },
  computed: {
    showModal () {
      return this.$store.getters.getNewTaskStatus
    }
  }
}
</script>

<style scoped>
  label {
    color: whitesmoke;
  }
</style>
