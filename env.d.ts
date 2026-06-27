/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>;
  export default component;
}

declare module '@vanduo-oss/framework/css' {
  const css: string;
  export default css;
}

declare module '@vanduo-oss/charts/css';
declare module '@vanduo-oss/flowchart/css';
declare module '@vanduo-oss/music-player/css';