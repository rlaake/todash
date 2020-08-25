<template>
  <div class="column is-paddingless">

    <!-- Container for tasks from a single project -->
    <div class="scroll-container" v-if="haveActiveProject">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-3">{{activeProject.title}}</span>
          </div>
          <span class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i><input id="date-picker" v-on:change="handleDate" type="date"></span>
          </span>
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

    <!-- Container for tasks from a date that has tasks due -->
    <div class="scroll-container" v-else-if="dateHasTasks">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-3">{{formattedDate}}</span>
          </div>
          <span class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i><input id="date-picker" v-on:change="handleDate" type="date"></span>
          </span>
        </div>
      </nav>
      <Task v-for="(task, index) in tasksByDate(date)" v-bind:task="task" v-bind:key="index"></Task>
    </div>

    <!-- Container for a date with no tasks due -->
    <div class="scroll-container" v-else>
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-3">{{formattedDate}}</span>
          </div>
          <a class="level-item">
            <span class="icon is-size-5"><i class="fas fa-calendar"></i><input id="date-picker" v-on:change="handleDate" type="date"></span>
          </a>
        </div>
      </nav>
      <span class="is-size-5 no-tasks">Nothing planned for this date. Add a new project or tasks.</span>
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
    },
    formattedDate () {
      const x = this.date.split(/\D+/)
      return x[1] + '/' + x[2] + '/' + x[0]
    }
  },
  methods: {
    ...mapActions(['toggleNav', 'toggleUIIsEditing', 'addTask', 'setDate', 'resetProjectActive']),
    handleDate (event) {
      this.setDate(event.target.value)
      this.resetProjectActive()
    }
  },
  mounted () {
    if (!(Object.keys(this.activeProject) > 0) && this.date === '') {
      const startDate = new Date().toLocaleDateString().split('/')
      this.setDate(startDate[2] + '-' + startDate[0] + '-' + startDate[1])
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
.fa-calendar {
  color: #3273dc;
}
#date-picker {
  opacity: 0;
  position: relative;
  right: 1rem;
  cursor: pointer;
}
.no-tasks {
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 3rem;
}
</style>
