import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home/index.vue";
import Company from "./pages/Company/index.vue";
import Design from "./pages/Design/index.vue";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/company",
		component: Company,
	},
	{
		path: "/design",
		component: Design,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
