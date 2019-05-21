import { createApp } from "./main";

export default context => {
  return new Promise(async (resolve, reject) => {
    const { app, router } = await createApp();

    router.push(context.url);

    router.onReady(() => {
      context.rendered = () => {};
      resolve(app);
    }, reject);
  });
};
