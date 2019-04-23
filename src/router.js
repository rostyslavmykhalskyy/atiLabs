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
      path: '/surveyPoints',
      name: 'surveyPoints',
      component: () =>
        import(/* webpackChunkName: "surveyPoints" */ './views/SurveyPoints.vue')
    },
    {
      path: '/surveyPoints2',
      name: 'surveyPoints2',
      component: () =>
        import(/* webpackChunkName: "surveyPoints2" */ './views/SurveyPoints2.vue')
    },
    {
      path: '/Cwiczenia',
      name: 'Cwiczenia',
      component: () =>
        import(/* webpackChunkName: "Cwiczenia" */ './views/Cwiczenia.vue')
    }
  ]
})
