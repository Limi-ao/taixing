import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import register from '@/views/register'
import info from '@/views/info'
import lr from '@/l-r'
import basicInfo from '@/views/basicInfo'
import order from '@/views/order'
import reset from '@/views/resetInfo'
import password from '@/views/password'
import myInfor from '@/views/myInfor'
import myorder from '@/views/myorder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: index,
      redirect:{ name: 'home' }
    },
    {
      path: '/home',
      name:'home',
      component: index,
      // redirect:{ name: 'login' }
    },

    {
      path: '/myinformation',
      name:'myinformation',
      component: myInfor,
      // redirect:{ name: 'login' }
    },
    {
      path: '/myorder',
      name:'myorder',
      component: myorder,
      // redirect:{ name: 'login' }
    },
    {
      path: '/l-r',
      // name:'login',
      component: lr,

      redirect: {name: 'login'},
      children: [
        {
          path: 'login',
          name: 'login',
          component: login,
        },
        {
          path: 'register',
          component: register
        }]
    },
    {
      path: '/info',
      component: info,
      redirect: {name: 'info'},
      children: [
        {
          path: 'basic',
          name:'info',
          component: basicInfo,
        },
        {
          path: 'order',
          component: order,
        },
        {
          path: 'reset',
          component: reset,
        },
        {
          path:'password',
          component:password
        }
      ]
    }
  ]
})
