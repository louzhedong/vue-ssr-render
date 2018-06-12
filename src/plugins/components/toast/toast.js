/*
 * @Author: Michael
 * @Date: 2018-05-16 17:22:20
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-11 11:38:02
 * toast组件
 */

import ToastComponent from './Toast.vue';

let $vm;

export default {
  install(Vue) {
    if (!$vm) {
      const ToastPlugin = Vue.extend(ToastComponent);

      $vm = new ToastPlugin({
        el: document.createElement('div')
      });

      document.body.appendChild($vm.$el);
    }

    $vm.show = false;
    const toast = {};
    ['success', 'info', 'warning', 'error'].forEach((type) => {
      toast[type] = (text) => {
        $vm.show = true;
        $vm.text = text;
        $vm.type = type;
        const timer = setTimeout(() => {
          toast.hide();
          clearTimeout(timer);
        }, 1500);
      };
    });

    toast.hide = () => {
      $vm.show = false;
    };

    if (!Vue.$toast) {
      Vue.$toast = toast;
    }

    Vue.mixin({
      created() {
        this.$toast = Vue.$toast;
      }
    });
  }
};
