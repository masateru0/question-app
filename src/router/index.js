import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import QuizPage from '@/views/QuizPage.vue'
import Result from '@/views/Result.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/quiz',
        name: 'QuizPage',
        component: QuizPage
    },
    {
        path: '/result',
        name: 'Result',
        component: Result
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
