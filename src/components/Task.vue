<template>
  <article class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
    <figure class="media-left is-size-4">
      <i class="far fa-dot-circle" aria-hidden="true" v-bind:style="projectColor" v-bind:class="{'is-hidden': task.finished}"></i>
      <i class="fas fa-check-circle" aria-hidden="true" v-bind:class="{'is-hidden': !task.finished}"></i>
    </figure>
    <div class="media-content">
      <div class="content" v-if="!task.finished">
        <p>
          <small class="warn" v-bind:class="{'is-hidden': !task.important}">!! Important  </small>
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
    <div class="buttons media-right" v-bind:class="{'is-hidden': !showButtons}">
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
      showButtons: false,
      ids: {
        projectId: this.task.project,
        taskId: this.$vnode.key
      }
    }
  },
  methods: {
    toggleButtons () {
      this.showButtons = !this.showButtons
    },
    toggleComplete () {
      if (this.task.finished) {
        this.$store.dispatch('setTaskUnfinished', this.ids)
      } else {
        this.$store.dispatch('setTaskFinished', this.ids)
      }
    },
    deleteTask () {
      this.$store.dispatch('deleteTask', this.ids)
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
  .media-left {
    align-self: center;
    padding-top: 0;
    padding-right: 0.5rem
  }
  .media-right {
    align-self: center;
  }
  .fa-check-circle {
    color: green;
  }
  .warn {
    color: red !important
  }
</style>
