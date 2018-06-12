/*
 * @Author: Michael
 * @Date: 2018-06-12 15:49:38
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 16:00:57
 */

import * as types from './types';

const mutations = {
  [types.ADD_ITEM](state, { item }) {
    state.itemList.push(item);
  },
  [types.SUB_ITEM](state) {
    if (state.itemList.length > 0) {
      state.itemList.pop();
    }
  }
};

export default mutations;
