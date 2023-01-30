import { createRouter, createWebHistory } from 'vue-router'

import AppMain from "./pages/AppMain.vue"
import SinglePage from "./pages/SinglePage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppMain },
        { path: '/news-page', component: SinglePage },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    },
});

export default router