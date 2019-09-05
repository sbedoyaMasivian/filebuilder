import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: "hola"
  },
  mutations: {
    codigoHtml (state, codigo){
      state.code = codigo
    }
  },
  actions: {
    pasarHtml(context, codigo){
      //console.log("se ejecuto " + codigo)
      context.commit("codigoHtml", codigo)
    }
  },
  getters: {
    codigo(state){
      return state.code
    }
  }
});
