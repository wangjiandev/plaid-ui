import type { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layout/admin.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: AdminLayout,
    redirect: '/',
    children: [
      {
        path: '',
        name: '/home',
        component: import('@/views/HomeView.vue'),
      },
      {
        path: 'maintain/repairplan/cityplan/index',
        name: 'maintain-repairplan-cityplan-index',
        component: import('@/views/maintain/repairplan/cityplan/index.vue'),
      },
      {
        path: 'maintain/repairplan/cityplansummary/index',
        name: 'maintain-repairplan-cityplansummary-index',
        component: import('@/views/maintain/repairplan/cityplansummary/index.vue'),
      },
      {
        path: 'maintain/repairplan/monthly/index',
        name: 'maintain-repairplan-monthly-index',
        component: import('@/views/maintain/repairplan/monthly/index.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
]

export default routes
