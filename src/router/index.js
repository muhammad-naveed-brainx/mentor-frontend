import {createRouter, createWebHistory} from 'vue-router'
//Auth views
import Login from '@/views/auth/Login.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import ResetSuccess from '@/views/auth/ResetSuccess.vue'
import UpdatePassword from '@/views/auth/UpdatePassword.vue'
import ChangePassword from '@/views/auth/ChangePassword.vue'
//Dashboard views
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue'
import Dashboard from '@/views/dashboard/components/Dashboard.vue'

const authPages = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (window.localStorage.getItem("api_token")) {
                next({
                    name: "dashboard"
                })
            } else next()
        }
    },
    {
        path: '/reset-password',
        name: 'reset',
        component: ResetPassword
    },
    {
        path: '/sent-password',
        name: 'sent',
        component: ResetSuccess
    },
    {
        path: '/password',
        name: 'update',
        component: UpdatePassword
    }
]
const dashboardPages = {
    path: '/',
    component: DashboardIndex,
    meta: { requiresAuth: true },
    children: [
        {
            path: '',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: 'change-password',
            name: 'change-password',
            component: ChangePassword
        },
    ]
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...authPages,
        dashboardPages,
    ],
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (!window.localStorage.getItem("api_token")) {
            next({
                name: "login"
            })
        } else {
            next()
        }
    } else next()
})
export default router
