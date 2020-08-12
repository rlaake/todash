<template>
  <div class="modal" v-bind:class="{'is-active': showModal}">
    <div class="modal-background" v-on:click="closeModal"></div>
    <div class="modal-content">

      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Task title" v-bind:value="activeTask.title">
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input" type="text" placeholder="Task description" v-bind:value="activeTask.description">
        </div>
      </div>

      <div class="field">
        <label class="label">Due Date</label>
        <div class="control">
          <input class="input" type="date" placeholder="(MM/DD/YYYY)" v-bind:value="activeTask.dueDate">
        </div>
      </div>

      <div class="field">
        <label class="label">Priority</label>
        <div class="control">
          <div class="select">
            <select>
              <option v-bind:selected="activeTask.important">High</option>
              <option v-bind:selected="!activeTask.important">Low</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" v-on:click="closeModal">Cancel</button>
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
      this.$store.dispatch('deleteActiveTask')
    }
  },
  computed: {
    showModal () {
      return this.$store.getters.getNewTaskStatus
    },
    activeTask () {
      const activeTask = this.$store.getters.getActiveTask
      if (activeTask) {
        return {
          title: activeTask.title,
          description: activeTask.description,
          dueDate: activeTask.dueDate.toISOString().split('T')[0],
          important: activeTask.important
        }
      } else {
        return {
          title: '',
          description: '',
          dueDate: new Date().toISOString().split('T')[0],
          important: false
        }
      }
    }
  }
}
</script>

<style scoped>
  label {
    color: whitesmoke;
  }
</style>
