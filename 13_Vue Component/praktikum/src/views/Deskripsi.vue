<template>
  <div>
    <div>
      <button
        @click="
          () => {
            this.$router.go(-1);
          }
        "
      >
        kembali
      </button>
    </div>
    <div v-if="!isTrue">
      <h1>{{ id }}</h1>
      <p>{{ angkaDariStore }}</p>
      <button @click="redirectTo(id, angkaDariStore)">Ubah Deskripsi</button>
    </div>
    <div v-else>
      <h1>{{ id }}</h1>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "DeskripsiPage",
  data() {
    return {
      ubahText: "",
    };
  },
  methods: {
    // editDeskripsi(text) {
    //   this.isEdited = true;
    //   this.ubahText = text;
    // },
    redirectTo(todo, text) {
      this.$router.push({ path: `/deskripsi/${todo}/ubah` });
      this.ubahText = text;
      this.$store.commit("helper/setEdit", true);
    },
  },
  computed: {
    isTrue() {
      return this.$store.state.helper.isEdited;
    },
    angkaDariStore() {
      return this.$store.state.helper.deskripsi;
    },
    id() {
      return this.$route.params.id;
    },
  },
  setup() {},
};
</script>
