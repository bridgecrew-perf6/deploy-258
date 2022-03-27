import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deskripsi: "Belum ada deskripsi nih",
  },
  mutations: {
    setDeskripsi(state, param) {
      state.deskripsi = param;
    },
  },
});
