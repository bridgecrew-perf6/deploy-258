import axios from "axios";

const state = () => ({
  berita: [],
  error: "",
});
const mutations = {
  setNews(state, param) {
    state.berita = param;
  },
  setError(state, param) {
    state.error = param;
  },
};
const actions = {
  fetchNews(store) {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&apiKey=6cd6ecc6a9a84b93b591f37092b64f0b"
      )
      .then((response) => {
        store.commit("setNews", response.data.articles);
      })
      .catch((error) => {
        store.commit("setError", error);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
