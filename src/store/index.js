import Vue from 'vue'
import Vuex from 'vuex'
import { seedData } from '../data/seed.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seedData,
    showNav: false,
    showNewProject: false,
    showNewTask: false
  },
  mutations: {
    SET_ACTIVE_PROJECT (state, id) {
      state.seedData.map((project) => {
        project.id === id ? project.active = true : project.active = false
      })
    },
    SET_TASK_FINISHED (state, payload) {
      state.seedData.find(project => project.id === payload.projectId).tasks[payload.taskId].finished = true
    },
    SET_TASK_UNFINISHED (state, payload) {
      state.seedData.find(project => project.id === payload.projectId).tasks[payload.taskId].finished = false
    },
    DELETE_TASK (state, payload) {
      state.seedData.find(project => project.id === payload.projectId).tasks.splice(payload.taskId, 1)
    },
    TOGGLE_NAV (state) {
      state.showNav = !state.showNav
    },
    TOGGLE_NEW_PROJECT (state) {
      state.showNewProject = !state.showNewProject
    },
    TOGGLE_NEW_TASK (state) {
      state.showNewTask = !state.showNewTask
    },
    SET_NAV_STATUS (state, payload) {
      state.showNav = payload
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
    deleteTask ({ commit }, ids) {
      commit('DELETE_TASK', ids)
    },
    toggleNav ({ commit }) {
      commit('TOGGLE_NAV')
    },
    toggleNewProject ({ commit }) {
      commit('TOGGLE_NEW_PROJECT')
    },
    toggleNewTask ({ commit }) {
      commit('TOGGLE_NEW_TASK')
    },
    setNav ({ commit }, status) {
      commit('SET_NAV_STATUS', status)
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
    getNavStatus: state => state.showNav,
    getNewProjectStatus: state => state.showNewProject,
    getNewTaskStatus: state => state.showNewTask
  }
})
