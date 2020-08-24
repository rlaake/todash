<template>
  <div class="column is-paddingless">
    <div class="scroll-container" v-if="haveActiveProject">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-3">{{activeProject.title}}</span>
          </div>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i><input id="date-picker" v-on:change="handleDate" type="date"></span>
          </a>
        </div>
      </nav>
      <Task v-for="task in activeProject.tasks" v-bind:task="task" v-bind:key="task.id"></Task>
      <div class="panel-heading" v-bind:class="{'is-hidden': UIIsEditing}">
        Add Task
        <a>
          <i class="fas fa-plus" v-on:click="toggleUIIsEditing(); addTask();"></i>
        </a>
      </div>
    </div>

    <div class="scroll-container" v-else-if="dateHasTasks">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-3">{{date}}</span>
          </div>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i><input id="date-picker" v-on:change="handleDate" type="date"></span>
          </a>
        </div>
      </nav>
      <Task v-for="(task, index) in tasksByDate(date)" v-bind:task="task" v-bind:key="index"></Task>
    </div>

    <div class="scroll-container" v-else>
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-3">{{date}}</span>
          </div>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i><input id="date-picker" v-on:change="handleDate" type="date"></span>
          </a>
        </div>
      </nav>
      <span class="is-size-5 no-tasks">Nothing planned for this date.</span>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Task from './Task.vue'
export default {
  name: 'TaskList',
  components: {
    Task
  },
  computed: {
    ...mapGetters(['UIIsEditing', 'activeProject', 'haveProjects', 'tasksByDate', 'date']),
    dateHasTasks () {
      return this.tasksByDate(this.date).length > 0
    },
    haveActiveProject () {
      return Object.keys(this.activeProject).length > 0
    }
  },
  methods: {
    ...mapActions(['toggleNav', 'toggleUIIsEditing', 'addTask', 'setDate', 'resetProjectActive']),
    handleDate (event) {
      this.setDate(event.target.value)
      this.resetProjectActive()
    }
  }
}
</script>

<style scoped>
.column {
  background-color: whitesmoke;
}
.level-left {
    padding-left: 3rem;
    padding-top: 0.5rem;
  }
  nav.level {
    margin: 0;
  }
.panel-heading {
  border-radius: 0;
  background-color: whitesmoke;
  padding-left: 3rem;
}
.fa-plus {
  padding-left: 0.5rem;
}
.is-size-3 {
  font-weight: 700
}
#date-picker {
  opacity: 0;
  position: relative;
  right: 1.2rem;
  cursor: pointer;
  min-width: 1.3rem;
}
.no-tasks {
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 3rem;
}
</style>
