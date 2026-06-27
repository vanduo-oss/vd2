import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import App from "./App.vue";
import { buildRoutes } from "./router";
import "@vanduo-oss/framework/css";
import "@vanduo-oss/charts/css";
import "@vanduo-oss/flowchart/css";
import "@vanduo-oss/music-player/css";
import "./styles/docs.css";
import "./styles/app.css";

const routes = buildRoutes();

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, _from, savedPosition) {
      // Preserve position on browser back/forward
      if (savedPosition) return savedPosition;
      // Honor deep-link anchors (offset for the fixed 80px navbar)
      if (to.hash) return { el: to.hash, top: 80, behavior: "instant" };
      // Default: jump to top of the new page (instant, since html has
      // scroll-behavior: smooth which would otherwise animate the jump)
      return { top: 0, behavior: "instant" };
    },
  },
  async ({ app, initialState }) => {
    app.use(createPinia());

    // Load the framework's vanilla JS (IIFE) on the client only. It attaches
    // the `window.Vanduo*` globals (Dropdown, Popover, Ripple, Tooltips, …)
    // that the `use*` composables delegate to. vite-ssg awaits this callback
    // before mounting, so the globals exist before any page's onMounted runs.
    // Guarded by `!SSR` so the IIFE (which touches window/document) never runs
    // during the Node prerender.
    if (!import.meta.env.SSR) {
      await import("@vanduo-oss/framework/iife");
    }

    // Page <title> is managed per route by @unhead in App.vue (so it stays in
    // sync with the SSG-baked title and the "— Vanduo" suffix).

    if (import.meta.env.SSR && initialState) {
      initialState.pinia = {};
    }
  },
);
