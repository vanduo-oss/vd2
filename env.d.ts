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

// Side-effect-only IIFE bundle: attaches the window.Vanduo* globals that the
// use* composables delegate to. Imported (client-only) in main.ts.
declare module '@vanduo-oss/framework/iife';

declare module '@vanduo-oss/hex-grid/hex-math' {
  export const TerrainType: Readonly<{
    GRASSLAND: 'Grassland';
    PLAINS: 'Plains';
    DESERT: 'Desert';
    TUNDRA: 'Tundra';
    SNOW: 'Snow';
    MOUNTAIN: 'Mountain';
    OCEAN: 'Ocean';
    COAST: 'Coast';
  }>;
  export function hexDistance(q1: number, r1: number, q2: number, r2: number): number;
  export function getAdjacentHexes(q: number, r: number): Array<{ q: number; r: number }>;
}
