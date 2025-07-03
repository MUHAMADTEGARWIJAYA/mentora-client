import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '@/views/form/LoginForm.vue'
import RegisterForm from '@/views/form/RegisterForm.vue'
import MainLayout from '@/layout/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/DashboardMain.vue'),
        },
        {
          path: '/my-courses',
          name: 'my-courses',
          component: () => import('../views/my-courses/CoursesMain.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm,
    },
  ],
})

export default router
