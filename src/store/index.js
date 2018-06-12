/*
 * @Author: Michael
 * @Date: 2018-06-12 16:00:19
 * @Last Modified by:   Michael
 * @Last Modified time: 2018-06-12 16:00:19
 */

import Vue from 'vue';
import Vuex from 'vuex';
import home from './home/index';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    modules: {
      home
    }
  });
}
