<template>
  <div>

    <!-- task container, hide when editing task -->
    <article v-if="!task.editing" class="media" v-on:mouseover="showButtons" v-on:mouseout="hideButtons">

      <!-- task bullet, changed on finished/unfinished -->
      <figure class="media-left is-size-4">
        <i class="far fa-dot-circle" v-bind:style="{color: task.color}" v-bind:class="{'is-hidden': task.finished}"></i>
        <i class="fas fa-check-circle" v-bind:style="{color: task.color}" v-bind:class="{'is-hidden': !task.finished}"></i>
      </figure>

      <div class="media-content">

        <!-- Task info for unfinished tasks -->
        <div class="content" v-if="!task.finished">
          <p>
            <small class="warn" v-bind:class="{'is-hidden': !task.important}">!! Important </small>
            <small v-bind:class="{'is-hidden': !task.important}"> • </small>
            <small> Due: {{this.date}}</small>
            <br>
            {{task.title}}
          </p>
        </div>

        <!-- Task info for finished task -->
        <div class="content" v-else>
          <p>
            <small>Finished</small>
            <br>
            <span class="finished-text">{{task.title}}</span>
          </p>
        </div>

        <!-- Buttons for mobile layout, visibile at all times -->
        <div class="content" v-if="isMobile">
          <button class="button is-text" v-if="!task.finished" v-on:click='toggleTaskFinished(task)'>
            <i class="fas fa-check"></i>
          </button>
          <button class="button is-text" v-else v-on:click='toggleTaskFinished(task)'>
            <i class="fas fa-undo-alt"></i>
          </button>
          <button class="button is-text" v-if="!task.finished" v-on:click="toggleTaskIsEditing(task); toggleUIIsEditing();">
            <i class="fas fa-edit"></i>
          </button>
          <button class="button is-text" v-on:click="deleteTask(task)">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>

      </div>

      <!-- Buttons for desktop layout, visible on mouseover task event fired -->
      <div class="buttons media-right" v-if="!isMobile" v-bind:class="{'is-hidden': !buttonsVisible || UIIsEditing}">
        <button class="button is-text" v-if="!task.finished" v-on:click='toggleTaskFinished(task); hideButtons();'>
          <i class="fas fa-check"></i>
        </button>
        <button class="button is-text" v-else v-on:click='toggleTaskFinished(task)'>
          <i class="fas fa-undo-alt"></i>
        </button>
        <button class="button is-text" v-if="!task.finished" v-on:click="toggleTaskIsEditing(task); toggleUIIsEditing();">
          <i class="fas fa-edit"></i>
        </button>
        <button class="button is-text" v-on:click="deleteTask(task)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>

    </article>

    <!-- Task container when editing task -->
    <article  id="edit-task" v-else>

      <!-- Inputs for task edits -->
      <div class="media-content">
        <div class="content">
          <label class="label">Title</label>
          <input v-model="editTitle" placeholder="Enter title"/>
          <label class="label">Due Date</label>
          <input type="date" v-model="editDueDate"/>
          <label class="label">Important</label>
          <select v-model="editImportant">
            <option v-bind:value="options.true">True</option>
            <option v-bind:value="options.false">False</option>
          </select>
        </div>
      </div>

      <!-- Buttons for task edit -->
      <div class="buttons media-right editButtons">
        <button class="button is-text editButton" v-bind:disabled="!hasTitle" v-on:click="toggleTaskIsEditing(task); toggleUIIsEditing(); submitEdit();">
          <i class="fas fa-check"></i>
        </button>
        <button class="button is-text editButton" v-if="task.newTask" v-on:click=" deleteTask(task); toggleUIIsEditing();">
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="button is-text editButton" v-else v-on:click="toggleTaskIsEditing(task); toggleUIIsEditing(); cancelEdit()">
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
      buttonsVisible: false,
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
    ...mapGetters(['UIIsEditing', 'isMobile']),
    date () {
      const x = this.task.dueDate.split(/\D+/)
      return x[1] + '/' + x[2] + '/' + x[0]
    },
    hasTitle () {
      return this.editTitle !== ''
    }
  },
  methods: {
    ...mapActions(['toggleTaskFinished', 'toggleUIIsEditing', 'toggleTaskIsEditing', 'deleteTask', 'editTask']),
    showButtons () {
      this.buttonsVisible = true
    },
    hideButtons () {
      this.buttonsVisible = false
    },
    submitEdit () {
      this.editTask({
        title: this.editTitle,
        dueDate: this.editDueDate,
        important: this.editImportant,
        id: this.task.id,
        projectId: this.task.projectId
      })
      this.buttonsVisible = false
    },
    cancelEdit () {
      this.editTitle = this.task.title
      this.editDueDate = this.task.dueDate
      this.editImportant = this.task.important
      this.buttonsVisible = false
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
  .media:hover {
    box-shadow: inset 3px 3px 3px #bebebe;
    background-color: #eaeaea;
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
    background-color: #eaeaea;
  }
  button.button {
    margin-bottom: 0 !important;
  }
  i {
    color: #3273dc;
  }
  button.is-text {
    text-decoration: none !important;
    /* background-color: #eaeaea; */
  }
  button.is-text:hover {
    background-color: #eaeaea;
  }
  button:focus:not(:active) {
    box-shadow: none;
    outline: none;
    background-color: #eaeaea;
  }
  #edit-task {
    display: flex;
    border-top: 1px solid #bebebe;
    border-bottom: 1px solid #bebebe;
  }
  .label {
    padding-top: .5rem;
  }
  .editButtons {
    background-color: whitesmoke;
  }
  button.editButton {
    background-color: whitesmoke;
  }
  button.editButton:hover {
    background-color: whitesmoke;
  }
  button.editButton:focus:not(:active) {
    background-color: whitesmoke;
  }
</style>
