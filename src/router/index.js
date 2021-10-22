import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout/layout'

const routes = [{
  path: '/',
  name: '',
  redirect: '/login',
  component:layout,
  children: [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login'),
  }]
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
