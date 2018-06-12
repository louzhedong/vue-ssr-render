/*
 * @Author: Michael
 * @Date: 2018-06-12 15:37:54
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:58:59
 */
import createApp from './app';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    let diffed = false;
    const activated = matched.filter((c, i) => {
      const result = diffed || ((diffed = (prevMatched[i]) !== c));
      return result;
    });

    if (!activated.length) {
      return next();
    }

    // 这里如果有加载指示器(loading indicator)，就触发

    Promise.all(activated.map((c) => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to });
      }
    })).then(() => {

      // 停止加载指示器(loading indicator)

      next();
    }).catch(next);
  });

  app.$mount('#app');
});
