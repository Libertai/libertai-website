import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home/index.vue";
import Company from "./pages/Company/index.vue";
import Design from "./pages/Design/index.vue";
import Developer from "./pages/Developer/index.vue";
import Earn from "./pages/Earn/index.vue";
import Tokenomics from "./pages/Tokenomix/index.vue";

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
	{
		path: "/developer",
		component: Developer,
	},
	{
		path: "/earn",
		component: Earn,
	},
	{
		path: "/tokenomics",
		component: Tokenomics,
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/",
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});
