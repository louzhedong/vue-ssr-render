/*
 * @Author: Michael
 * @Date: 2018-06-12 16:17:09
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 16:18:29
 */

import Page from './Page.vue';

const install = (Vue) => {
  if (install.installed) {
    return;
  }

  Vue.component(Page.name, Page);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
