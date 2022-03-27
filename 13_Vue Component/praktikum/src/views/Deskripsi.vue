<template>
  <div>
    <div>
      <button
        @click="
          () => {
            this.$router.push('/');
          }
        "
      >
        kembali
      </button>
    </div>
    <div v-if="!isEdited">
      <p>{{ angkaDariStore }}</p>
      <button @click="redirectTo('deskripsi/ubah')">Ubah Deskripsi</button>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "DeskripsiPage",
  data() {
    return {
      ubahText: "Belum ada deskripsi nih!",
      isEdited: false,
    };
  },
  methods: {
    editDeskripsi(text) {
      this.isEdited = true;
      this.ubahText = text;
    },
    redirectTo(path) {
      this.$router.push(path);
      this.isEdited = true;
    },
  },
  computed: {
    angkaDariStore() {
      return this.$store.state.deskripsi;
    },
  },
  setup() {},
};
</script>
