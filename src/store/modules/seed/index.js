import { seedData } from '../../../data/index.js'

const state = {
  seedData
}

const mutations = {
  UPDATE_PROJECT (state, payload) {
    state.seedData[state.seedData.findIndex(obj => obj.id === payload.id)] = payload
  },
  UPDATE_PROJECTS (state, payload) {
    state.seedData = payload
  }
}

const actions = {
  setProjectActive ({ commit }, project) {
    const previousProject = this.getters.allProjects.find(proj => proj.active)
    const activeProject = this.getters.allProjects.find(proj => proj.id === project.id)
    previousProject.active = false
    activeProject.active = true
    commit('UPDATE_PROJECT', previousProject)
    commit('UPDATE_PROJECT', activeProject)
  },
  deleteProject ({ commit }, project) {
    const projects = this.getters.allProjects
    const index = projects.findIndex(proj => proj.id === project.id)
    if (index !== -1) {
      if (projects[index].active && projects.length > 1) {
        projects.splice(index, 1)
        projects[0].active = true
        commit('UPDATE_PROJECTS', projects)
      } else {
        projects.splice(index, 1)
        commit('UPDATE_PROJECTS', projects)
      }
    }
  },
  addProject ({ commit }) {
    const projects = this.getters.allProjects
    projects.sort((a, b) => a.id - b.id)
    const onlyProject = projects.length === 0
    const active = onlyProject
    const id = onlyProject ? 0 : projects[projects.length - 1].id + 1
    projects.push({
      id: id,
      title: '',
      color: '#000000',
      active: active,
      editing: true,
      tasks: [],
      newProject: true
    })
    commit('UPDATE_PROJECTS', projects)
  },
  addTask ({ commit }) {
    const project = this.getters.activeProject
    project.tasks.sort((a, b) => a.id - b.id)
    const onlyTask = project.tasks.length === 0
    const id = onlyTask ? 0 : project.tasks[project.tasks.length - 1].id + 1
    let today = new Date().toLocaleDateString().split(/\D+/)
    for (let i = 0; i < today.length; i++) {
      if (today[i].length === 1) today[i] = '0' + today[i]
    }
    today = today[2] + '-' + today[0] + '-' + today[1]
    project.tasks.push({
      title: '',
      dueDate: today,
      important: false,
      finished: false,
      color: project.color,
      projectId: project.id,
      id: id,
      editing: true,
      newTask: true
    })
    commit('UPDATE_PROJECT', project)
  },
  editProject ({ commit }, project) {
    const proj = this.getters.project(project.id)
    proj.title = project.title
    proj.color = project.color
    proj.newProject = false
    if (proj.tasks.length) {
      for (const task of proj.tasks) task.color = project.color
    }
    commit('UPDATE_PROJECT', proj)
  },
  editTask ({ commit }, target) {
    const task = this.getters.task({ projectId: target.projectId, taskId: target.id })
    task.title = target.title
    task.dueDate = target.dueDate
    task.important = target.important
    const proj = this.getters.project(target.projectId)
    commit('UPDATE_PROJECT', proj)
  },
  toggleTaskFinished ({ commit }, target) {
    const task = this.getters.task({ projectId: target.projectId, taskId: target.id })
    task.finished = !task.finished
    const proj = this.getters.project(target.projectId)
    proj.tasks.sort((a, b) => a.id - b.id)
    proj.tasks.sort((a, b) => {
      if (!a.finished && b.finished) return -1
      else if ((a.finished && b.finished) || (!a.finished && !b.finished)) return 0
      else return 1
    })
    task.showButtons = true
    commit('UPDATE_PROJECT', proj)
  },
  deleteTask ({ commit }, target) {
    const proj = this.getters.project(target.projectId)
    const taskIndex = proj.tasks.findIndex(task => task.id === target.id)
    proj.tasks.splice(taskIndex, 1)
    commit('UPDATE_PROJECT', proj)
  }
}

const getters = {
  allProjects: state => state.seedData,
  task: (state) => (ids) => state.seedData.find(project => project.id === ids.projectId).tasks.find(t => t.id === ids.taskId),
  project: (state) => (id) => state.seedData.find(project => project.id === id),
  activeProject: (state) => {
    const ap = state.seedData.find(project => project.active)
    if (!ap) return {}
    else return ap
  },
  haveProjects: (state) => state.seedData.length > 0,
  projectIsEditing: (state) => {
    for (const project of state.seedData) {
      if (project.editing) return true
    }
    return false
  },
  tasksByDate: (state) => (date) => {
    const tasks = []
    if (date === '') return tasks
    for (const proj of state.seedData) {
      for (const t of proj.tasks) {
        if (t.dueDate === date) {
          tasks.push(t)
        }
      }
    }
    return tasks
  }
}

const seedModule = {
  state,
  mutations,
  actions,
  getters
}

export default seedModule
