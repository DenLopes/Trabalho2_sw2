import { createWebHistory, createRouter } from "vue-router";
import Primeira from "./pages/Primeira.vue";
import Segunda from "./pages/Segunda.vue";
import teste from "./pages/teste.vue"

const routes = [
  {
    path: "/",
    name: "Primeira",
    component: Primeira
  },
  {
    path: "/inf",
    name: "Segunda",
    component: Segunda
  },
  {
    path: "/teste",
    name: "teste",
    component: teste
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
