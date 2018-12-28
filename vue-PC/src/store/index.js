import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import menus from './modules/menus'
import config from './modules/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menus,
    config
  },
  getters
})
export default store
