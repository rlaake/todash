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
    getProjectById: (state) => (id) => {
      return state.seedData.find(project => project.id === id)
    },
    getCurrentProjectId: (state) => {
      return state.seedData.find(project => project.current).id
    },
    getTasks: (state) => {
      const id = this.getCurrentProjectId
      console.log(id)
      const currentProject = this.getProjectById(id)
      console.log(currentProject)
      return currentProject.tasks
    }
  }
})
