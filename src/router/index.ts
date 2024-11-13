import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'settings',
            component: () => import('../views/Settings/index.vue'),
            children: [
                {
                    path: 'users',
                    name: 'settingsUsers',
                    component: () => import('../views/Settings/index.vue'),
                },
                {
                    path: 'billing',
                    name: 'settingsBilling',
                    component: () => import('../views/Settings/index.vue'),
                },
                {
                    path: 'subscription',
                    name: 'settingsSubscriptions',
                    component: () => import('../views/Settings/index.vue'),
                },
            ],
        },
    ],
})

export default router
