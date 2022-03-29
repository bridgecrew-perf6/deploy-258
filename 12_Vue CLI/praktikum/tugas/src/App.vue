<template>
  <div>
    <ol>
      <li v-for="data in todoList" :key="data">{{ data }}</li>
    </ol>
    <input v-model="todo" @keydown.enter="addList" />
    <button @click="addList">Tambahkan</button>
    <p v-if="todoList.length >= 4">Hebat</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todoList: [],
    };
  },
  methods: {
    addList() {
      if (this.todo != "") this.todoList.push(this.todo), (this.todo = "");
    },
  },
};
</script>
