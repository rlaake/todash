import Vue from 'vue'
import Vuex from 'vuex'
import { seedData } from '../data/seed.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seedData
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
    }
  }
})
