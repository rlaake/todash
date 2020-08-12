import Vue from 'vue'
import Vuex from 'vuex'
import { seedData } from '../data/seed.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seedData,
    activeTask: undefined,
    showNav: false,
    showNewProject: false,
    showNewTask: false
  },
  mutations: {
    SET_ACTIVE_PROJECT (state, payload) {
      state.seedData.map((project) => {
        project.id === payload ? project.active = true : project.active = false
      })
    },
    SET_ACTIVE_TASK (state, payload) {
      state.activeTask = state.seedData.find(project => project.id === payload.projectId).tasks[payload.taskId]
    },
    SET_TASK_FINISHED (state, payload) {
      state.seedData.find(project => project.id === payload.projectId).tasks[payload.taskId].finished = true
    },
    SET_TASK_UNFINISHED (state, payload) {
      state.seedData.find(project => project.id === payload.projectId).tasks[payload.taskId].finished = false
    },
    SET_NAV_STATUS (state, payload) {
      state.showNav = payload
    },
    DELETE_TASK (state, payload) {
      state.seedData.find(project => project.id === payload.projectId).tasks.splice(payload.taskId, 1)
    },
    DELETE_ACTIVE_TASK (state) {
      state.activeTask = undefined
    },
    TOGGLE_NAV (state) {
      state.showNav = !state.showNav
    },
    TOGGLE_NEW_PROJECT (state) {
      state.showNewProject = !state.showNewProject
    },
    TOGGLE_NEW_TASK (state) {
      state.showNewTask = !state.showNewTask
    }
  },
  actions: {
    setActiveProject ({ commit }, id) {
      commit('SET_ACTIVE_PROJECT', id)
    },
    setTaskFinished ({ commit }, ids) {
      commit('SET_TASK_FINISHED', ids)
    },
    setTaskUnfinished ({ commit }, ids) {
      commit('SET_TASK_UNFINISHED', ids)
    },
    setNav ({ commit }, status) {
      commit('SET_NAV_STATUS', status)
    },
    setActiveTask ({ commit }, ids) {
      commit('SET_ACTIVE_TASK', ids)
    },
    deleteTask ({ commit }, ids) {
      commit('DELETE_TASK', ids)
    },
    deleteActiveTask ({ commit }) {
      commit('DELETE_ACTIVE_TASK')
    },
    toggleNav ({ commit }) {
      commit('TOGGLE_NAV')
    },
    toggleNewProject ({ commit }) {
      commit('TOGGLE_NEW_PROJECT')
    },
    toggleNewTask ({ commit }) {
      commit('TOGGLE_NEW_TASK')
    }
  },
  modules: {
  },
  getters: {
    getProjects: state => state.seedData,
    getProjectById: (state) => (id) => {
      return state.seedData.find(project => project.id === id)
    },
    getActiveProject: (state) => {
      return state.seedData.find(project => project.active)
    },
    getTask: (state) => (ids) => {
      return state.seedData.find(project => project === ids.project).tasks[ids.task]
    },
    getActiveTask: (state) => state.activeTask,
    getNavStatus: state => state.showNav,
    getNewProjectStatus: state => state.showNewProject,
    getNewTaskStatus: state => state.showNewTask
  }
})
