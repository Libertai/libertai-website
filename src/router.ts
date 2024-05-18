import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CompanyPage from "./pages/CompanyPage.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/company", component: CompanyPage },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
