<template>

  <div id="project" v-if="!project.editing" v-on:mouseover="toggleButtons" v-on:mouseout="toggleButtons">

    <a class="panel-block">

      <span class="panel-icon">
        <i class="far fa-dot-circle" v-bind:style="projectColor"></i>
      </span>
      <span id="project-title" v-on:click="setProjectActive(project); UIWidthCheck();">{{project.title}}</span>

      <div class="buttons" v-bind:class="{'is-hidden': !showButtons || UIIsEditing}">
        <button class="button is-text" v-on:click="toggleProjectIsEditing(); toggleUIIsEditing();">
          <i class="fas fa-edit"></i>
        </button>
        <button class="button is-text" v-on:click="deleteProject(project)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>

    </a>
  </div>

  <div id="project" v-else>
    <a class="panel-block editing">
      <div>Color:
        <br>
        <input type="color" v-model=editColor v-bind:placeholder="project.color"/>
        <br>Title:
        <br>
        <input class="edit-title" v-model=editTitle v-bind:placeholder="project.title" size=5>
      </div>
      <br>

      <div class="buttons">
        <button class="button is-text" v-bind:disabled="!hasTitle" v-on:click="toggleProjectIsEditing(); toggleUIIsEditing(); submitEdit();">
          <i class="fas fa-check"></i>
        </button>
        <button class="button is-text" v-if="project.newProject" v-on:click=" deleteProject(project); toggleUIIsEditing();">
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="button is-text" v-else v-on:click="toggleProjectIsEditing(); toggleUIIsEditing(); cancelEdit()">
          <i class="fas fa-times"></i>
        </button>
      </div>

    </a>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Project',
  props: ['project'],
  data () {
    return {
      showButtons: false,
      editTitle: this.project.title,
      editColor: this.project.color
    }
  },
  computed: {
    ...mapGetters(['UIIsEditing']),
    projectColor () {
      return 'color: ' + this.project.color
    },
    hasTitle () {
      return this.editTitle !== ''
    }
  },
  methods: {
    ...mapActions([
      'setNavActive', 'setProjectListClasses',
      'toggleUIIsEditing', 'setProjectActive', 'editProject', 'deleteProject'
    ]),
    toggleButtons () {
      this.showButtons = !this.showButtons
    },
    toggleProjectIsEditing () {
      this.project.editing = !this.project.editing
    },
    submitEdit () {
      this.editProject({
        title: this.editTitle,
        color: this.editColor,
        id: this.project.id
      })
      this.showButtons = true
      this.UIWidthCheck()
    },
    cancelEdit () {
      this.editTitle = this.project.title
      this.editColor = this.project.color
    },
    UIWidthCheck () {
      if (window.innerWidth < 1023) {
        this.setNavActive(false)
        this.setProjectListClasses('is-2 is-hidden-touch')
      }
    }
  }
}
</script>

<style scoped>
  #project {
    min-height: 40px;
  }
  .panel-block {
    min-height: 40px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .editing {
    background-color: whitesmoke;
    border-top: 1px solid #bebebe;
    border-bottom: 1px solid #bebebe;
  }
  .buttons {
    align-self: center;
    margin-bottom: 0 !important;
    margin-left: auto;
  }
  button.button {
    margin-bottom: 0 !important;
  }
  i {
    color: #3273dc;
  }
  button.is-text {
    text-decoration: none !important;
    padding: 0.2rem;
  }
  button:focus:not(:active) {
    box-shadow: none;
    outline: none;
  }
</style>
