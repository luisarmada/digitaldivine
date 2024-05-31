import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnalysisPersona from '../views/AnalysisPersona.vue'
import AnalysisHonkai from '../views/AnalysisHonkai.vue'
import DevProc from '../views/DevProc.vue'
import SuppInfo from '../views/SuppInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/analysispersona',
      name: 'analysispersona',
      component: AnalysisPersona
    },
    {
      path: '/analysishonkai',
      name: 'analysishonkai',
      component: AnalysisHonkai
    },
    {
      path: '/devproc',
      name: 'devproc',
      component: DevProc
    },
    {
      path: '/suppinfo',
      name: 'suppinfo',
      component: SuppInfo
    }
  ]
})

export default router
