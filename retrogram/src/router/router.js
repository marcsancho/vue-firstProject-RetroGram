import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/RetroGram',
            name: 'RetroGram',
            component: () => import('@/components/views/RetroGram.vue')
        },
        {
          path: '/RetroGram/:tematica',
            name:'Tematica',
          component: () => import('@/components/RetroGramComponents/Tematica.vue'),
            props: true,

        },
        {
            path: '/RetroGram/:tematica/:post:postImg:postDesc',
            name: 'Post',
            component: () => import('@/components/RetroGramComponents/Post.vue'),
            props: true,
        }
    ]
})

export default router
