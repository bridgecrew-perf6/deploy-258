<template>
  <div class="register">
    <v-layout>
      <p>Ganti Tema Warna</p>
      <v-flex>
        <v-btn color="#1976D2" outlined @click="changeColor('#1976D2')"
          >Biru</v-btn
        >
        <v-btn color="#39AC37" outlined @click="changeColor('#39AC37')"
          >Hijau</v-btn
        >
        <v-btn color="#DB9600" outlined @click="changeColor('#DB9600')"
          >Oranye</v-btn
        >
      </v-flex>
      <v-flex>
        <v-btn depressed small fab @click="switchTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <h1>Register Pengguna Baru</h1>
    <v-col>
      <v-row class="input-field">
        <v-text-field
          id="username"
          label="Masukan Nama Pengguna"
          outlined
          v-model="usernameInput"
        ></v-text-field>
      </v-row>
      <v-row class="input-field">
        <v-text-field
          id="email"
          label="Masukan Email"
          outlined
          v-model="emailInput"
        ></v-text-field>
      </v-row>
      <v-row class="input-field">
        <v-text-field
          id="password"
          label="Masukan Password baru"
          outlined
          v-model="passwordInput"
        ></v-text-field>
      </v-row>
      <p v-if="errorText" class="error-text">{{ errorText }}</p>
      <v-btn color="primary">SIMPAN</v-btn>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "RegisterPage",
  methods: {
    changeColor(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color;
      } else {
        this.$vuetify.theme.themes.light.primary = color;
      }
    },
    switchTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary =
          this.$vuetify.theme.themes.dark.primary;
      } else {
        this.$vuetify.theme.themes.dark.primary =
          this.$vuetify.theme.themes.light.primary;
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  setup() {},
};
</script>
