import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: "",
  },
  mutations: {
    addOneMutation(state) {
      state.sum ++
    },
    updateLastTeamMutation(state, name) {
      state.lastTeam = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
