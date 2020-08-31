const state = {
  staTest: 'test store'
}

const mutations = {
  mutTest (state, value) {
    state.staTest = value
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
