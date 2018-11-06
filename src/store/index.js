import Vue from 'vue'
import Vuex from 'vuex'
import { PUSH_FILE, REMOVE_FILE } from './mutations-types';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    files: []
  },
  mutations: {
    [PUSH_FILE] (state, file) {
      state.files.push(file)
    },
    [REMOVE_FILE](state, file){
      state.files = state.files.filter(i => i.file.raw.uid !== file.raw.uid)
    }
  } 
 })
 
 export default store