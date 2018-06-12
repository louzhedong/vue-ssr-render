/* eslint-disable */
/*
 * @Author: Michael
 * @Date: 2018-06-12 15:38:21
 * @Last Modified by: Michael
 * @Last Modified time: 2018-06-12 15:58:28
 */
import createApp from './app';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store, route: router.currentRoute
          });
        }
      })).then(() => {
        context.state = store.state;
        resolve(app);
      }).catch(reject);
    }, reject);

  });
};
