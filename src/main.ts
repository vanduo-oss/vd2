import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import App from "./App.vue";
import { buildRoutes } from "./router";
import "@vanduo-oss/framework/css";
import "./styles/app.css";

const routes = buildRoutes();

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    app.use(createPinia());

    router.afterEach((to) => {
      if (typeof document === "undefined") return;
      const title = (to.meta?.title as string | undefined) ?? "Vanduo Docs";
      document.title = title;
    });

    if (import.meta.env.SSR && initialState) {
      initialState.pinia = {};
    }
  },
);
