import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('../views/IndexView.vue'),
        },
        {
          path: '/course',
          name: 'course',
          component: () => import('../views/CourseList.vue'),
        },
      ],
    },
  ],
});

export default router;
