import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeVIew.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
		name: 'home',
	},
	{
		path: '/about',
		component: AboutView,
		name: 'about',
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
