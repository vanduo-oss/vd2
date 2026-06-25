<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";

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

  <section class="vd-container-responsive">
    <div class="vd-row">
      <div class="vd-col-12 vd-col-md-4" v-for="n in 3" :key="n">
        <div class="vd-card"><div class="vd-card-body">Card {{ n }}</div></div>
      </div>
    </div>
  </section>
</template>`;
</script>

<template>
  <DocsLayout>
    <section id="getting-started">
      <h5 class="demo-title">
        <i class="ph ph-rocket-launch"></i>Getting Started
        <code class="vd-text-sm">Guide</code>
      </h5>
      <p class="vd-mb-6">
        This guide gets a Vanduo-styled Vue page running in a few minutes. You
        compose framework CSS classes (and, later, vd2 components) — there is no
        CSS to write and no global runtime to configure. For a no-build static
        page instead, see <a href="/quick-start">Quick start</a>.
      </p>

      <div class="vd-row vd-mb-6">
        <div class="vd-col-12">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-number-circle-one"></i> Scaffold a Vue project</h6></div>
            <div class="vd-card-body">
              <DocCodeSnippet :shell="scaffoldShell" :default-open="true" />
            </div>
          </div>
        </div>
      </div>

      <div class="vd-row vd-mb-6">
        <div class="vd-col-12">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-number-circle-two"></i> Import the CSS once</h6></div>
            <div class="vd-card-body">
              <p>Load the framework's component styles in your entry file:</p>
              <DocCodeSnippet :js="mainJs" :default-open="true" />
            </div>
          </div>
        </div>
      </div>

      <div class="vd-row vd-mb-6">
        <div class="vd-col-12">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-number-circle-three"></i> Compose your first page</h6></div>
            <div class="vd-card-body">
              <p>Use <code>vd-</code> classes in any template — they're styled for you:</p>
              <DocCodeSnippet :html="pageHtml" :default-open="true" />
            </div>
          </div>
        </div>
      </div>

      <div class="vd-card demo-card">
        <div class="vd-card-header"><h6><i class="ph ph-compass"></i> Next steps</h6></div>
        <div class="vd-card-body">
          <ul>
            <li><a href="/guides/first-layout">Your first layout</a> — grid, containers, and breakpoints.</li>
            <li><a href="/guides/css-variables">CSS variables &amp; theming</a> — make it yours.</li>
            <li><a href="/guides/utilities-cheat-sheet">Utilities cheat sheet</a> — the spacing/text helpers.</li>
            <li><a href="/docs-landing">Component reference</a> — browse every component.</li>
          </ul>
        </div>
      </div>
    </section>
  </DocsLayout>
</template>
