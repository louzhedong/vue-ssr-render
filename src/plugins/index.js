/*
 * @Author: Michael
 * @Date: 2018-05-16 17:06:09
 * @Last Modified by: Michael
 * @Last Modified time: 2018-05-23 11:53:37
 */


import Loading from './components/loading/loading';
import Toast from './components/toast/toast';

const components = [
  Loading,
  Toast
];

const install = function (Vue) {
  // 判断是在客户端环境还是服务端环境，在服务端环境无法使用插件
  if (process.env.VUE_ENV === 'client') {
    components.map((item) => {
      Vue.use(item);
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Loading,
  Toast
};
