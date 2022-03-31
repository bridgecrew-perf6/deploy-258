<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    // listPokemon() {
    //   return this.$store.state.pokemon.list;
    // },
    // listNews() {
    //   return this.$store.state.news.berita;
    // },
  },
  // methods: {
  //   fetchPokemon() {
  //     this.$store.dispatch("pokemon/fetchList");
  //   },
  //   fetchMorePokemon() {
  //     this.$store.dispatch("pokemon/fetchMore");
  //   },
  //   fetchNews() {
  //     this.$store.dispatch("news/fetchNews");
  //   },
  // },
  // mounted() {
  //   this.fetchNews();
  // },
};
</script>
