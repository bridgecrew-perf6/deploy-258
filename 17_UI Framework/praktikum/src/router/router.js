import Vue from "vue";
import VueRouter from "vue-router";
import register from "@/components/Register.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import pokemon from "@/components/Pokemon.vue";
import table from "@/components/Table.vue";
import dialog from "@/components/Dialog.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/register",
    name: "Register",
    component: register,
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: pokemon,
  },
  {
    path: "/table",
    name: "Table",
    component: table,
  },
  {
    path: "/dialog",
    name: "Dialog",
    component: dialog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
