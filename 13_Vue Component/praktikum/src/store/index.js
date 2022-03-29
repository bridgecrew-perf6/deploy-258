import Vue from "vue";
import Vuex from "vuex";
import helper from "@/store/module.js";
import createPresistedState from "vuex-persistedstate";

Vue.use(Vuex);
const presistedDataState = createPresistedState({
  paths: ["helper"],
});

export default new Vuex.Store({
  plugins: [presistedDataState],
  modules: {
    helper: {
      namespaced: true,
      ...helper,
    },
  },
});
