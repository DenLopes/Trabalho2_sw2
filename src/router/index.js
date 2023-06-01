import { createWebHistory, createRouter } from "vue-router"
import App from "C:/Users/aluno/Trabalho2_sw2/src/App.vue"
import Primeira from "C:/Users/aluno/Trabalho2_sw2/src/pages/Primeira.vue"
import Segunda from "C:/Users/aluno/Trabalho2_sw2/src/pages/Segunda.vue"

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
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// router.beforeEach((to, from, next) => {

// });

export default router