<template>
  <div>
    <article v-if="!task.editing" class="media" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">
      <figure class="media-left is-size-4">
        <i class="far fa-dot-circle" v-bind:style="{color: task.color}" v-bind:class="{'is-hidden': task.finished}"></i>
        <i class="fas fa-check-circle" v-bind:style="{color: task.color}" v-bind:class="{'is-hidden': !task.finished}"></i>
      </figure>

      <div class="media-content">
        <div class="content" v-if="!task.finished">
          <p>
            <small class="warn" v-bind:class="{'is-hidden': !task.important}">!! Important </small>
            <small v-bind:class="{'is-hidden': !task.important}"> • </small>
            <small> Due: {{this.date}}</small>
            <br>
            {{task.title}}
          </p>
        </div>

        <div class="content" v-else>
          <p>
            <small>Finished</small>
            <br>
            <span class="finished-text">{{task.title}}</span>
          </p>
        </div>
      </div>

      <div class="buttons media-right" v-bind:class="{'is-hidden': !showButtons || UIIsEditing}">
        <button class="button is-text" v-if="!task.finished" v-on:click='toggleTaskFinished(task)'>
          <i class="fas fa-check"></i>
        </button>
        <button class="button is-text" v-else v-on:click='toggleTaskFinished(task)'>
          <i class="fas fa-undo-alt"></i>
        </button>
        <button class="button is-text" v-on:click="toggleTaskIsEditing(); toggleUIIsEditing();">
          <i class="fas fa-edit"></i>
        </button>
        <button class="button is-text" v-on:click="deleteTask(task)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </article>

    <article v-else>
      <div class="media-content">
        <div class="content">
          <input v-model="editTitle" placeholder="Enter title"/>
          <input type="date" v-model="editDueDate"/>
          <select v-model="editImportant">
            <option v-bind:value="options.true">True</option>
            <option v-bind:value="options.false">False</option>
          </select>
        </div>
      </div>

      <div class="buttons media-right">
        <button class="button is-text" v-bind:disabled="!hasTitle" v-on:click="toggleTaskIsEditing(); toggleUIIsEditing(); submitEdit();">
          <i class="fas fa-check"></i>
        </button>
        <button class="button is-text" v-on:click="toggleTaskIsEditing(); toggleUIIsEditing(); cancelEdit()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Task',
  props: ['task'],
  data () {
    return {
      showButtons: false,
      editTitle: this.task.title,
      editDueDate: this.task.dueDate,
      editImportant: this.task.important,
      options: {
        true: true,
        false: false
      }
    }
  },
  computed: {
    ...mapGetters(['UIIsEditing']),
    date () {
      const x = this.task.dueDate.split(/\D+/)
      return x[1] + '/' + x[2] + '/' + x[0]
    },
    hasTitle () {
      return this.editTitle !== ''
    }
  },
  methods: {
    ...mapActions(['toggleTaskFinished', 'toggleUIIsEditing', 'deleteTask', 'editTask']),
    toggleButtons () {
      this.showButtons = !this.showButtons
    },
    hideButtons () {
      this.$emit('mouseout')
    },
    toggleTaskIsEditing () {
      this.task.editing = !this.task.editing
    },
    submitEdit () {
      this.editTask({
        title: this.editTitle,
        dueDate: this.editDueDate,
        important: this.editImportant,
        id: this.task.id,
        projectId: this.task.projectId
      })
      this.showButtons = false
    },
    cancelEdit () {
      this.editTitle = this.task.title
      this.editDueDate = this.task.dueDate
      this.editImportant = this.task.important
      this.showButtons = false
    }
  }
}
</script>

<style scoped>
  article {
    padding: 1rem;
    min-height: 40px;
  }
  .media {
    margin-top: 0 !important;
  }
  .media-left {
    align-self: center;
    padding-top: 0;
    padding-right: 0.5rem
  }
  .media-right {
    align-self: center;
  }
  .warn {
    color: red !important
  }
  .finished-text {
    text-decoration: line-through;
  }
  .buttons {
    align-self: center;
    margin-bottom: 0 !important;
    background-color: whitesmoke;
  }
  button.button {
    margin-bottom: 0 !important;
  }
  i {
    color: #3273dc;
  }
  button.is-text {
    text-decoration: none !important;
  }
  button:focus:not(:active) {
    box-shadow: none;
    outline: none;
  }
</style>
