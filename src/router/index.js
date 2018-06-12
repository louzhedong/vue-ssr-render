/* eslint-disable */
/*
 * @Author: Michael
 * @Date: 2018-06-12 15:44:43
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:58:05
 */

import Vue from 'vue';
import Router from 'vue-router';
const Home = r => require.ensure([], () => r(require('@/views/HomePage.vue')), 'home');

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => { { y: 0 } },
    routes: [
      {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/',
        redirect: '/home'
      }
    ]
  })
}
