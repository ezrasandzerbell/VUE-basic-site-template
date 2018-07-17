import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var currentPage = 'navToHome';
var contacts = [
  {
    name: "John",
    id: 1
  },
  {
    name: "Jill",
    id: 2
  }
]

export default new Vuex.Store({
  state: {
    currentPage,
    contacts
  },
  actions: {
    updateView (context, view) {
      context.commit('updateView', view)
    }
  },
  mutations: {
    updateView(state, view){
      state.currentPage = view
    }
  }
})
