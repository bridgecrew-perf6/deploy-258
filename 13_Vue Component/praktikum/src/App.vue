<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // todo: "",
      // todoList: [],
      pesanSingkat: "Halo Vue",
      jumlahHitunganSaatIni: 0,
      apakahSudahSelesai: false,
      alamatLengkap: {
        titikLokasi: "Indonesia",
      },
      listNominasiPenghargaan: [
        "Vue Cepat",
        "Vue Mudah Dipelajari",
        "Vue Menyenangkan",
      ],
    };
  },
  methods: {
    // addList() {
    //   if (this.todo != "") this.todoList.push(this.todo), (this.todo = "");
    // },
    // updateCounterValue() {
    //   this.jumlahHitunganSaatIni += 1;
    // },
  },
};
</script>
