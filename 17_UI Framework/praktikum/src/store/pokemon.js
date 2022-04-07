import axios from "axios";
const state = () => ({
  list: [],
});

const mutations = {
  setList(state, param) {
    state.list = param;
  },
};

const actions = {
  fetchPokemon(store) {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      store.commit("setList", response.data.results);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
