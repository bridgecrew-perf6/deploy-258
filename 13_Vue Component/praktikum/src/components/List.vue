<template>
  <div class="myList">
    <h2>Todolist</h2>
    <ol>
      <div v-if="!isEditing">
        <li v-for="(todo, index) in todoList" :key="index">
          <span class="msg">
            {{ todo }}
          </span>
          <Button class="btn" @buttonAll="deleteList(index)">Hapus</Button>
          <Button class="btn" @buttonAll="editList(index, todo)">Edit</Button>
        </li>
      </div>
      <div v-else-if="isEditing">
        <li v-for="(todo, index) in todoList" :key="index">
          <span class="msg" v-if="(index = index)">
            {{ todo }}
          </span>
          <input class="edit" type="text" v-model="editText" v-else />
          <Button class="btn" @buttonAll="deleteList(index)">Hapus</Button>
          <Button class="btn" @buttonAll="updateList()">Edit</Button>
        </li>
      </div>
    </ol>
    <input class="inputText" type="text" v-model="myText" />
    <Button @buttonAll="addList">Tambahkan</Button>
    <p v-if="todoList.length > 3">Hebat</p>
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
      myText: "",
      todoList: [],
      isEditing: false,
    };
  },
  methods: {
    addList() {
      if (this.myText != "") this.todoList.push(this.myText);
      this.myText = "";
    },
    editList(index, todo) {
      this.isEditing = true;
      this.selectIndex = index;
      this.editText = todo;
    },
    deleteList(index) {
      this.todoList.splice(index, 1);
      //   return this.todoList.filter((item) => item != index);
    },
    updateList() {
      this.todoList.splice(this.selectIndex, 1, this.editText);
      this.isEditing = false;
    },
  },
};
</script>
<style>
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
