import Vue from "vue";
import VueRouter from "vue-router";
import Deskripsi from "@/views/Deskripsi.vue";
import List from "@/components/List.vue";
import UbahDeskripsi from "@/views/UbahDeskripsi.vue";
// import Default from "@/views/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/deskripsi",
    name: "Deskripsi",
    component: Deskripsi,
    children: [
      {
        path: "ubah",
        nama: "UbahDeskripsi",
        component: UbahDeskripsi,
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
