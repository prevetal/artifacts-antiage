function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./app.js";(async function(){const t=await r(()=>import("./index.OeoyVDU_.js"),__vite__mapDeps([]),import.meta.url);t&&t.init({dsn:"https://3225aeec453c46b48fa9ba5b03daaef2@sentry.rs-app.ru/5",integrations:[new t.BrowserTracing],tracesSampleRate:1})})();
