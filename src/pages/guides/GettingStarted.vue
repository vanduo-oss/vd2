<script setup lang="ts">
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";
import EngineSwitch from "@/components/EngineSwitch.vue";
import GuideLinkCards from "@/components/GuideLinkCards.vue";

const nextLinks = [
  {
    to: "/guides/first-layout",
    icon: "ph-layout",
    title: "Your first layout",
    desc: "Grid, containers, and breakpoints.",
    badge: "Guide",
  },
  {
    to: "/guides/css-variables",
    icon: "ph-sliders",
    title: "CSS variables & theming",
    desc: "Make the system yours with token overrides.",
    badge: "Guide",
  },
  {
    to: "/guides/utilities-cheat-sheet",
    icon: "ph-list-bullets",
    title: "Utilities cheat sheet",
    desc: "The spacing and text helpers at a glance.",
    badge: "Guide",
  },
  {
    to: "/components/button",
    icon: "ph-cursor-click",
    title: "Browse components",
    desc: "Start with Button and explore the reference.",
    badge: "Component",
  },
];

// ── Vue 3 path ──────────────────────────────────────────────
const scaffoldShell = `pnpm create vite my-app --template vue-ts
cd my-app
pnpm add @vanduo-oss/framework @vanduo-oss/core`;

const mainJs = `// main.ts — import the framework CSS once
import '@vanduo-oss/framework/css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`;

const pageHtml = `<!-- App.vue — compose framework classes; no CSS to write -->
<template>
  <nav class="vd-navbar">
    <a class="vd-navbar-brand" href="#">My App</a>
  </nav>

  <header class="vd-container-responsive" style="padding: 4rem 0">
    <h1 class="vd-h1">Build fast with Vanduo</h1>
    <p class="vd-lead vd-text-muted">A Fibonacci-tuned design system.</p>
    <button class="vd-btn vd-btn-primary vd-btn-lg">Get started</button>
  </header>
</template>`;

// ── Vanilla (no-build) path ──────────────────────────────────
const cdnHtml = `<!-- index.html — drop in two lines, no build step -->
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/vanduo-oss/framework@v1.5.1/dist/vanduo.min.css">
<script src="https://cdn.jsdelivr.net/gh/vanduo-oss/framework@v1.5.1/dist/vanduo.min.js"><\/script>
<script>Vanduo.init();<\/script>`;

const vanillaPageHtml = `<!-- Compose the same classes directly in HTML -->
<nav class="vd-navbar">
  <a class="vd-navbar-brand" href="#">My App</a>
</nav>

<header class="vd-container-responsive" style="padding: 4rem 0">
  <h1 class="vd-h1">Build fast with Vanduo</h1>
  <p class="vd-lead vd-text-muted">A Fibonacci-tuned design system.</p>
  <button class="vd-btn vd-btn-primary vd-btn-lg">Get started</button>
</header>`;
</script>

<template>
  <section id="getting-started">
    <h5 class="demo-title">
      <i class="ph ph-rocket-launch"></i>Getting Started
      <code class="vd-text-sm">Guide</code>
    </h5>
    <p class="vd-mb-6">
      Get a Vanduo-styled page running in a few minutes. The same design
      system ships two ways — pick yours with the engine toggle in the
      sidebar:
      <strong>Vue 3</strong> (Vite + components) or <strong>Vanilla</strong>
      (drop-in CSS/JS, no build step).
    </p>

    <EngineSwitch>
      <!-- ── Vue 3 ───────────────────────────────────────── -->
      <template #vue3>
        <div class="vd-row vd-mb-6">
          <div class="vd-col-12">
            <div class="vd-card demo-card">
              <div class="vd-card-header">
                <h6>
                  <i class="ph ph-number-circle-one"></i> Scaffold a Vue
                  project
                </h6>
              </div>
              <div class="vd-card-body">
                <DocCodeSnippet :shell="scaffoldShell" :default-open="true" />
              </div>
            </div>
          </div>
        </div>

        <div class="vd-row vd-mb-6">
          <div class="vd-col-12">
            <div class="vd-card demo-card">
              <div class="vd-card-header">
                <h6>
                  <i class="ph ph-number-circle-two"></i> Import the CSS once
                </h6>
              </div>
              <div class="vd-card-body">
                <p>
                  Load the framework's component styles in your entry file:
                </p>
                <DocCodeSnippet :js="mainJs" :default-open="true" />
              </div>
            </div>
          </div>
        </div>

        <div class="vd-row vd-mb-6">
          <div class="vd-col-12">
            <div class="vd-card demo-card">
              <div class="vd-card-header">
                <h6>
                  <i class="ph ph-number-circle-three"></i> Compose your first
                  page
                </h6>
              </div>
              <div class="vd-card-body">
                <p>
                  Use <code>vd-</code> classes in any template — they're
                  styled for you:
                </p>
                <DocCodeSnippet :html="pageHtml" :default-open="true" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ── Vanilla ─────────────────────────────────────── -->
      <template #vanilla>
        <div class="vd-row vd-mb-6">
          <div class="vd-col-12">
            <div class="vd-card demo-card">
              <div class="vd-card-header">
                <h6>
                  <i class="ph ph-number-circle-one"></i> Add the framework
                  (no build)
                </h6>
              </div>
              <div class="vd-card-body">
                <p>
                  Drop two lines into any HTML file and call
                  <code>Vanduo.init()</code>:
                </p>
                <DocCodeSnippet :html="cdnHtml" :default-open="true" />
              </div>
            </div>
          </div>
        </div>

        <div class="vd-row vd-mb-6">
          <div class="vd-col-12">
            <div class="vd-card demo-card">
              <div class="vd-card-header">
                <h6>
                  <i class="ph ph-number-circle-two"></i> Compose your first
                  page
                </h6>
              </div>
              <div class="vd-card-body">
                <p>
                  The exact same <code>vd-</code> classes — just in plain
                  HTML:
                </p>
                <DocCodeSnippet
                  :html="vanillaPageHtml"
                  :default-open="true"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </EngineSwitch>

    <GuideLinkCards icon="ph-compass" title="Next steps" :links="nextLinks" />
  </section>
</template>
