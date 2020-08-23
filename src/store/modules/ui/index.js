const state = {
  projectListClasses: 'is-2 is-hidden-touch',
  navActive: false,
  today: new Date().toLocaleDateString(),
  UIIsEditing: false,
  showProjectButtons: false,
  showTaskButtons: false,
  date: ''

}

const mutations = {
  TOGGLE_PROJECT_LIST_CLASSES (state) {
    state.projectListClasses = state.projectListClasses === '' ? 'is-2 is-hidden-touch' : ''
  },
  TOGGLE_NAV_ACTIVE (state) {
    state.navActive = !state.navActive
  },
  SET_PROJECT_LIST_CLASSES (state, payload) {
    state.projectListClasses = payload
  },
  SET_NAV_ACTIVE (state, payload) {
    state.navActive = payload
  },
  TOGGLE_IS_EDITING (state) {
    state.UIIsEditing = !state.UIIsEditing
  },
  RESET_DATE (state) {
    state.date = ''
  },
  SET_DATE (state, payload) {
    state.date = payload
  }
}

const actions = {
  toggleNav ({ commit }) {
    commit('TOGGLE_PROJECT_LIST_CLASSES')
    commit('TOGGLE_NAV_ACTIVE')
  },
  setProjectListClasses ({ commit }, classes) {
    commit('SET_PROJECT_LIST_CLASSES', classes)
  },
  setNavActive ({ commit }, status) {
    commit('SET_NAV_ACTIVE', status)
  },
  toggleUIIsEditing ({ commit }) {
    commit('TOGGLE_IS_EDITING')
  },
  resetDate ({ commit }) {
    commit('RESET_DATE')
  },
  setDate ({ commit }, date) {
    commit('SET_DATE', date)
  }
}

const getters = {
  projectListClasses: state => state.projectListClasses,
  navActive: state => state.navActive,
  today: state => state.today,
  UIIsEditing: state => state.UIIsEditing,
  showProjectButtons: state => state.showProjectButtons,
  showTaskButtons: state => state.showTaskButtons,
  date: state => state.date
}

const seedModule = {
  state,
  mutations,
  actions,
  getters
}

export default seedModule
