/*
 * @Author: Michael
 * @Date: 2018-06-12 15:51:57
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:54:24
 */

const actions = {
  addItem({ commit }, payload) {
    commit('ADD_ITEM', { item: payload.item });
  },
  subItem({ commit }) {
    commit('SUB_ITEM');
  }
};

export default actions;
