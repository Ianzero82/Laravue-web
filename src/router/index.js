import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillIndex from '../views/skills/SkillIndex.vue'
import SkillEdit from '../views/skills/SkillEdit.vue'
import SkillCreate from '../views/skills/SkillCreate.vue'
import Register from '../views/sessions/Register.vue'
import Login from '../views/sessions/Login.vue'
import PostShow from '../views/posts/PostShow.vue'
import SkillManagement from '../views/skills/SkillManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skeelz',
      name: 'Skeelz',
      component: SkillManagement,
      children: [
        {
          path: '/skeelz/create/:user_id',
          name: 'SkeelzCreate',
          component: SkillCreate,
          props: true
        },
        {
          path: '/skeelz/:id/edit',
          name: 'SkeelzEdit',
          component: SkillEdit,
          props: true
        },
        {
          path: '/skeelz/index',
          name: 'SkeelzIndex',
          component: SkillIndex
        },
      ],
      linkActiveClass: 'active-link'
    },
    
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/post/:slug/:id',
      name: 'Post',
      component: PostShow,
      props: true
    },
  ],
  
});

export default router
