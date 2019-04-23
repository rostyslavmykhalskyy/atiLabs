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
      path: '/surveya',
      name: 'surveya',
      component: () =>
        import(/* webpackChunkName: "survey" */ './views/Surveya.vue')
    },
    {
      path: '/surveyb',
      name: 'surveyb',
      component: () =>
        import(/* webpackChunkName: "surveyb" */ './views/Surveyb.vue')
    },
    {
      path: '/answers',
      name: 'answers',
      component: () =>
        import(/* webpackChunkName: "answers" */ './views/Answers.vue')
    },
    {
      path: '/surveyPunkty',
      name: 'surveyPunkty',
      component: () =>
        import(/* webpackChunkName: "surveyPunkty" */ './views/SurveyPunkty.vue')
    },
    {
      path: '/surveyPunkty2',
      name: 'surveyPunkty2',
      component: () =>
        import(/* webpackChunkName: "surveyPunkty2" */ './views/SurveyPunkty2.vue')
    },
    {
      path: '/Cwiczenia',
      name: 'Cwiczenia',
      component: () =>
        import(/* webpackChunkName: "Cwiczenia" */ './views/Cwiczenia.vue')
    }
  ]
})
