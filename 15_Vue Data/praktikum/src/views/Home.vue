<template>
  <div id="app">
    <h1>Berita Terkini</h1>
    <ul class="list">
      <li>
        <a href="">
          <div class="body">
            <div
              class="blockNews"
              v-for="news in listNews"
              :key="news.id"
              @click="goToDeskripsi(news.title)"
            >
              <img :src="news.urlToImage" alt="Image" />
              <div class="text">
                <div class="author">{{ news.author }}</div>
                <div class="title">
                  <h3>{{ news.title }}</h3>
                </div>
                <div class="date">{{ news.publishedAt }}</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {},
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
    listNews() {
      return this.$store.state.news.berita;
    },
  },
  methods: {
    goToDeskripsi(title) {
      this.$router.push({ path: `${title}` });
    },
    fetchNews() {
      this.$store.dispatch("news/fetchNews");
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style>
.text {
  margin-left: 10px;
}
img {
  width: 300px;
  height: 100px;
}
a {
  text-decoration: none;
  color: black;
}
h1 {
  text-align: center;
}
.list {
  list-style-type: none;
  padding: 0;
}
.body {
  display: grid;
  grid-template-columns: max-content max-content;
}
.blockNews img {
  align-items: center;
}
.blockNews:hover {
}
.blockNews {
  align-items: center;
  display: flex;
  background-color: floralwhite;
  margin: 5px 5px;
  padding: 10px 2px;
  width: 590px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
@media screen and (max-width: 1200px) {
  .blockNews {
    width: 500px;
  }
}
@media screen and (max-width: 1034px) {
  .body {
    display: block;
  }
  .blockNews {
    width: auto;
  }
}
</style>
