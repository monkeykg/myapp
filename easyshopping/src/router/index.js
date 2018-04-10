import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index.vue'
import detail from '@/components/page/detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
