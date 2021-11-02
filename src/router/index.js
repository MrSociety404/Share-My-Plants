import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my-plants',
    name: 'My plants',
    component: () => import('../views/MyPlants.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/product/_id.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('../views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `Share Your Plants - ${to.name}`;
  next();
});

export default router
