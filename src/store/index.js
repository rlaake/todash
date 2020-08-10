import Vue from 'vue'
import Vuex from 'vuex'
import { seedData } from '../data/seed.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seedData
  },
  mutations: {
    SET_CURRENT_PROJECT (state, payload) {
      const previousProject = this.getters.getCurrentProject
      previousProject.current = false
      const currentProject = this.getters.getProjectById(payload)
      currentProject.current = true
    }
  },
  actions: {
    setCurrentProject ({ commit }, id) {
      commit('SET_CURRENT_PROJECT', id)
    }
  },
  modules: {
  },
  getters: {
    getProjects: state => state.seedData,
    getCurrentProject: (state) => {
      return state.seedData.find(project => project.current)
    },
    getProjectById: (state) => (id) => {
      return state.seedData.find(project => project.id === id)
    }
  }
})
