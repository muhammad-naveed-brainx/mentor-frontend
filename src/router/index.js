import {createRouter, createWebHistory} from 'vue-router'
//Auth views
import AuthIndex from '@/views/auth/AuthIndex.vue'
import Login from '@/views/auth/components/Login.vue'
import SignUp from '@/views/auth/components/SignUp.vue'
import SignUpSuccess from '@/views/auth/components/SignUpSuccess.vue'
import ResetPassword from '@/views/auth/components/ResetPassword.vue'
import ResetSuccess from '@/views/auth/components/ResetSuccess.vue'
import UpdatePassword from '@/views/auth/components/UpdatePassword.vue'
import ChangePassword from '@/views/auth/components/ChangePassword.vue'
//Dashboard views
import DashboardIndex from '@/views/dashboard/DashboardIndex.vue'
import Dashboard from '@/views/dashboard/components/Dashboard.vue'
import Notes from '@/views/dashboard/components/Notes.vue'
import AcademicClass from '@/views/dashboard/components/AcademicClass.vue'
import Question from '@/views/dashboard/components/Question.vue'


const authPages = [
    {
        path: '/',
        component: AuthIndex,
        children: [
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
                path: '/register',
                name: 'signup',
                component: SignUp
            },
            {
                path: '/register-success',
                name: 'signup-success',
                component: SignUpSuccess
            },
            {
                path: '/reset-password',
                name: 'reset',
                component: ResetPassword
            },
            {
                path: '/reset-success',
                name: 'sent',
                component: ResetSuccess
            },
            {
                path: '/update-password',
                name: 'update',
                component: UpdatePassword
            },
            {
                path: '/change-password',
                name: 'change',
                component: ChangePassword
            }
        ]
    }
]

const dashboardPages = {
    path: '/',
    component: DashboardIndex,
    meta: { requiresAuth: true },
    children: [
        {
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: 'class',
            name: 'academic_class',
            component: AcademicClass,
        },
        {
            path: 'notes',
            name: 'notes',
            component: Notes,
        },
        {
            path: 'question',
            name: 'questions',
            component: Question,
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
        { path: '/', redirect: { name: 'login' }},
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
