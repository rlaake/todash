const state = {
  projectListClasses: 'is-2 is-hidden-touch',
  navActive: false,
  today: new Date().toLocaleDateString(),
  UIIsEditing: false,
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
  date: state => state.date,
  isMobile () {
    let touchScreen = false
    if ('maxTouchPoints' in navigator) {
      touchScreen = navigator.maxTouchPoints > 0
    } else if ('msMaxTouchPoints' in navigator) {
      touchScreen = navigator.maxTouchPoints > 0
    } else {
      const mQ = window.matchMedia && matchMedia('(pointer:coarse)')
      if (mQ && mQ.media === '(pointer:coarse)') {
        touchScreen = !!mQ.matches
      } else if ('orientation' in window) {
        touchScreen = true
      } else {
        const UA = navigator.userAgent
        touchScreen = (/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA))
      }
    }
    const mQ2 = window.matchMedia && matchMedia('(max-width: 767px), (max-height: 767px)')
    return ((touchScreen === true) && (mQ2.matches === true))
  }
}

const seedModule = {
  state,
  mutations,
  actions,
  getters
}

export default seedModule
