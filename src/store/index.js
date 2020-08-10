import Vue from 'vue'
import Vuex from 'vuex'
import { seedData } from '../data/seed.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seedData
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProjects: state => state.seedData,
    getCurrentProject: (state) => {
      return state.seedData.find(project => project.current)
    }
  }
})
