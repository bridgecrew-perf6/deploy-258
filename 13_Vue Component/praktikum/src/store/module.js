const state = () => ({
  myText: "",
  myList: [],
  isEdited: false,
  deskripsi: "belum ada deskripsi nih",
});
const mutations = {
  setDeskripsi(state, param) {
    state.deskripsi = param;
  },
  setText(state, param) {
    state.myText = param;
  },
  setList(state, param) {
    state.myList.push(param);
  },
  setEdit(state, param) {
    state.isEdited = param;
  },
};
export default {
  state,
  mutations,
};
