import type from '../mutationTypes'

const config = {
  state: {
    showwork: false
  },
  mutations: {
    [type.SET_SHOW_WORK](state,flag){
      console.log(flag);
       state.showwork = flag
    }
  },
  actions: {}

}
export default config
