<template>
  <div>
    <p>{{ angkaDariStore }}</p>
    <input type="text" v-model="ubahText" />
    <Button @buttonAll="updateDeskripsi">Edit Deskripsi</Button>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  components: { Button },
  name: "UbahDeskripsi",
  data() {
    return {
      ubahText: "",
    };
  },

  methods: {
    updateDeskripsi() {
      this.$store.commit("setDeskripsi", this.ubahText);
      // this.$store.commit("setDeskripsi", this.ubahText);
      this.ubahText = "";
      this.$router.go(-1);
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
