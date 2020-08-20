import Vue from 'vue'
import Vuex from 'vuex'
import seed from './modules/seed'
import ui from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    seed,
    ui
  }
})
