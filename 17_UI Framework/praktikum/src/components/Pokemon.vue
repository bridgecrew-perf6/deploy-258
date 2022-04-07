<template>
  <div class="pokemon">
    <h1 class="primary--text">List Pokemon</h1>
    <v-layout wrap>
      <v-flex
        v-for="pokemon in getListPokemon"
        :key="pokemon.name"
        class="pa-2"
        xs12
        sm6
        md4
        lg2
      >
        <v-card
          color="primary"
          class="d-flex align-center justify-center"
          dark
          height="200"
          >{{ pokemon.name }}</v-card
        >
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "PokemonPage",
  computed: {
    getListPokemon() {
      return this.$store.state.pokemon.list;
    },
  },
  methods: {
    fetch() {
      this.$store.dispatch("fetchPokemon");
    },
  },
  mounted() {
    this.fetch();
  },
  setup() {},
};
</script>
