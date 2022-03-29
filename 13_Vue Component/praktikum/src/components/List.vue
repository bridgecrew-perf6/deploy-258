<template>
  <div class="myList">
    <h2>Todolist</h2>
    <ol>
      <div v-if="!isTrue">
        <li v-for="(todo, index) in listFromStore" :key="index">
          <span @click="page(todo, index)">
            {{ todo }}
          </span>
          <Button class="btn" @buttonAll="deleteList(index)">Hapus</Button>
          <Button class="btn" @buttonAll="editList(index, todo)">Edit</Button>
        </li>
      </div>
      <div v-else-if="isTrue">
        <li v-for="(todo, index) in listFromStore" :key="index">
          <input
            class="edit"
            type="text"
            v-if="selectIndex === index"
            v-model="editText"
          />
          <Button class="btn" @buttonAll="deleteList(index)">Hapus</Button>
          <Button class="btn" @buttonAll="updateList()">Edit</Button>
        </li>
      </div>
    </ol>
    <input class="inputText" type="text" v-model="myText" />
    <!-- <button @click="addText">Tambahkan</button> -->
    <Button @buttonAll="addText">Tambahkan</Button>
    <p v-if="listFromStore.length > 3">Hebat</p>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
  name: "myList",
  data() {
    return {
      selectIndex: null,
      editText: "",
    };
  },
  computed: {
    isTrue() {
      return this.$store.state.helper.isEdited;
    },
    listFromStore() {
      return this.$store.state.helper.myList;
    },
    textFromStore() {
      return this.$store.state.helper.myText;
    },
  },
  methods: {
    addText() {
      if (this.myText != "") {
        this.$store.commit("helper/setList", this.myText);
      }
      this.myText = "";
    },
    page(todo) {
      this.$router.push({ path: `/deskripsi/${todo}` });
    },
    editList(index, todo) {
      this.$store.commit("helper/setEdit", true);
      this.selectIndex = index;
      this.editText = todo;
    },
    deleteList(index) {
      this.listFromStore.splice(index, 1);
    },
    updateList() {
      this.listFromStore.splice(this.selectIndex, 1, this.editText);
      this.$store.commit("helper/setEdit", false);
    },
  },
};
</script>
<style>
.msg {
  text-decoration: none;
}
.btn {
  margin: 0 12px;
}
.inputText {
  width: 500px;
  margin-right: 20px;
}
.msg,
.edit {
  max-width: 400px;
}
</style>
