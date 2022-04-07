import Vue from "vue";
import vuex from "vuex";
import pokemon from "@/store/pokemon";

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    pokemon: {
      ...pokemon,
    },
  },
});
