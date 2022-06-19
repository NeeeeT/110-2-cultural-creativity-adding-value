import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('../pages/Index.vue'),
  },
  {
    path: '/concept',
    name: 'concept',
    component: ()=> import('../pages/Concept.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;