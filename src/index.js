import { createWebHistory, createRouter } from "vue-router";
import Primeira from "./pages/Primeira.vue";
import Segunda from "./pages/Segunda.vue";

const router = createRouter({
  history: createWebHistory(),
  routes = [
  {
    path: "/",
    redirect: { name: 'Primeira' }
  },
  {
    path: "/Trabalho2_sw2/",
    name: "Primeira",
    component: Primeira
  },
  {
    path: "/Trabalho2_sw2/inf",
    name: "Segunda",
    component: Segunda
  },
];
});

export default router;
