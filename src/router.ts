import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CompanyPage from "./pages/CompanyPage.vue";
import DesignPage from "./pages/DesignPage.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/company", component: CompanyPage },
	{ path: "/design", component: DesignPage },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
