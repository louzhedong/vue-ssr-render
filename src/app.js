/*
 * @Author: Michael
 * @Date: 2018-06-12 15:39:33
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 16:18:52
 */

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import ComponentInstall from '@/components/index';
import { install as PluginInstall } from '@/plugins/index';
import './core/style.less';
import App from './App.vue';
import { createRouter } from './router';
import createStore from './store';
import * as filters from './core/filters';

Vue.use(ComponentInstall);
Vue.use(PluginInstall);
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

export default function createApp(ssrContext) {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  });
  return { app, router, store };
}
