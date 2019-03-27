import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/logined',
      name: 'logined',
      component: () =>
        import(/* webpackChunkName: "logined" */ './views/Logined.vue')
    },
    {
      path: '/ankieta',
      name: 'ankietaa',
      component: () =>
        import(/* webpackChunkName: "ankieta" */ './views/Ankieta.vue')
    },
    {
      path: '/ankietb',
      name: 'ankietb',
      component: () =>
        import(/* webpackChunkName: "ankietb" */ './views/Ankietb.vue')
    },
    {
      path: '/answers',
      name: 'answers',
      component: () =>
        import(/* webpackChunkName: "ankietb" */ './views/Answers.vue')
    }
  ]
})
