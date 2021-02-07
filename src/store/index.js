import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth'
import courses from './courses'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    courses,
    users
  }
})
