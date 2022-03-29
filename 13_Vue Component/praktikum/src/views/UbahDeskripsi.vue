<template>
  <div>
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
      this.$store.commit("helper/setDeskripsi", this.ubahText);
      this.ubahText = "";
      this.$store.commit("helper/setEdit", false);
      this.$router.go(-1);
    },
  },
  computed: {
    angkaDariStore() {
      return this.$store.state.helper.deskripsi;
    },
  },
  setup() {},
};
</script>
