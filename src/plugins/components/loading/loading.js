/*
 * @Author: Michael
 * @Date: 2018-05-16 16:00:09
 * @Last Modified by: Michael
 * @Last Modified time: 2018-05-23 11:51:42
 * loading 组件
 */

import LoadingComponent from './Loading.vue';

let $vm;

export default {
  install(Vue) {
    if (!$vm) {
      const LoadingPlugin = Vue.extend(LoadingComponent);

      $vm = new LoadingPlugin({
        el: document.createElement('div')
      });

      document.body.appendChild($vm.$el);
    }

    $vm.show = false;
    const loading = {
      show(text) {
        $vm.show = true;
        if (text) {
          $vm.text = text;
        }
      },

      hide() {
        $vm.show = false;
      }
    };

    if (!Vue.$loading) {
      Vue.$loading = loading;
    }

    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    });
  }
};
