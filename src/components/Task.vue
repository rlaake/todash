<template>
  <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
    <figure class="media-left is-size-4" style="align-self: center; padding-top: 0; padding-right: 0.5rem">
      <i class="far fa-dot-circle" aria-hidden="true" v-bind:style="projectColor" v-bind:class="{'is-hidden': task.finished}"></i>
      <i class="fas fa-check-circle" aria-hidden="true" style="color: green;" v-bind:class="{'is-hidden': !task.finished}"></i>
    </figure>
    <div class="media-content">
      <div class="content" v-if="!task.finished">
        <p>
          <small style="color: red;" v-bind:class="{'is-hidden': !task.important}">! Important  </small>
          <small>Due: {{task.dueDate.toLocaleDateString()}}</small>
          <br>
          {{task.title}}
        </p>
      </div>
      <div class="content" v-else>
        <small>Finished</small>
        <br>
        <p v-bind:style="finishedText">{{task.title}}</p>
      </div>
    </div>
    <div class="buttons media-right" style="align-self: center;" v-bind:class="{'is-hidden': !showButtons}">
      <button class="button is-success" v-if="!task.finished" v-on:click="toggleComplete"><i class="fas fa-check"></i></button>
      <button class="button is-success" v-else v-on:click="toggleComplete"><i class="fas fa-undo-alt"></i></button>
      <button class="button is-info"><i class="fas fa-edit"></i></button>
      <button class="button is-danger" v-on:click="deleteTask"><i class="fas fa-trash-alt"></i></button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  data () {
    return {
      showButtons: false
    }
  },
  methods: {
    toggleButtons () {
      this.showButtons = !this.showButtons
    },
    toggleComplete () {
      const ids = {
        projectId: this.task.project,
        taskId: this.$vnode.key
      }
      if (this.task.finished) {
        this.$store.dispatch('setTaskUnfinished', ids)
      } else {
        this.$store.dispatch('setTaskFinished', ids)
      }
    },
    deleteTask () {
      const ids = {
        projectId: this.task.project,
        taskId: this.$vnode.key
      }
      this.$store.dispatch('deleteTask', ids)
    }
  },
  computed: {
    projectColor () {
      return 'color: ' + this.task.color
    },
    finishedText () {
      return 'text-decoration: line-through'
    }
  }
}
</script>

<style scoped>
  article {
    padding: 1rem;
    min-height: 40px;
  }
</style>
