<script setup lang="ts">
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";
import GuideLinkCards from "@/components/GuideLinkCards.vue";

const nextLinks = [
  {
    to: "/guides/runtime-architecture",
    icon: "ph-cpu",
    title: "Runtime architecture",
    desc: "How vd2 replaces Vanduo.init with Vue composables.",
    badge: "Guide",
  },
  {
    to: "/guides/esm-vs-iife",
    icon: "ph-package",
    title: "ESM vs IIFE",
    desc: "The Vanilla engine's two builds vs vd2's ESM-only Vue.",
    badge: "Guide",
  },
  {
    to: "/guides/theme-customizer",
    icon: "ph-paint-brush",
    title: "Theme customizer",
    desc: "Theming through the Pinia store.",
    badge: "Guide",
  },
  {
    to: "/guides/css-variables",
    icon: "ph-sliders",
    title: "CSS variables & theming",
    desc: "The token layer both engines share.",
    badge: "Guide",
  },
  {
    to: "/core/color-palette",
    icon: "ph-palette",
    title: "Color palette",
    desc: "The core tokens that feed every engine.",
    badge: "Core",
  },
];

const depsShell = `# vd2 depends on the shared token core + the framework's component CSS
pnpm add @vanduo-oss/core      # design tokens (SSOT)
pnpm add @vanduo-oss/framework # component CSS (and the Vanilla runtime)`;

const importJs = `// vd2 (Vue 3 engine) — what an app actually imports
import '@vanduo-oss/framework/css';      // component CSS
import { useThemeStore } from '@/stores/theme';
// token *data* (colour list, neutrals, radii, fonts) comes from core:
import { PRIMARY_COLORS } from '@vanduo-oss/core';`;

const engines: [string, string, string][] = [
  [
    "@vanduo-oss/core",
    "Design-token source of truth",
    "Framework-agnostic DTCG tokens → CSS vars + typed TS + JSON. No runtime.",
  ],
  [
    "@vanduo-oss/framework",
    "Vanilla zero-build engine",
    "The original CDN / static / SPA engine. Owns component CSS + imperative JS. A feature, not debt.",
  ],
  [
    "@vanduo-oss/vd2",
    "Vue 3 + SSR engine",
    "This site. Reimplements the framework's behaviour as Vue composables + Pinia; consumes core tokens + framework CSS.",
  ],
];
</script>

<template>
  <section id="vanduo-ecosystem">
    <h5 class="demo-title">
      <i class="ph ph-planet"></i>The Vanduo Ecosystem
      <code class="vd-text-sm">Guide</code>
    </h5>
    <p class="vd-mb-6">
      Vanduo is intentionally a <strong>dual-engine</strong> design system.
      The same look, feel, and Fibonacci-based design language is served by
      two engines that share a single source of design tokens. Understanding
      the three packages explains why some guides differ between the original
      docs and this Vue site.
    </p>

    <div class="vd-row vd-mb-6">
      <div class="vd-col-12">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6>
              <i class="ph ph-stack"></i> Three packages, one design language
            </h6>
          </div>
          <div class="vd-card-body">
            <div class="vd-table-responsive">
              <table class="vd-table vd-table-striped">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Role</th>
                    <th>What it owns</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in engines" :key="row[0]">
                    <td>
                      <code>{{ row[0] }}</code>
                    </td>
                    <td>{{ row[1] }}</td>
                    <td>{{ row[2] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="vd-text-sm vd-text-muted vd-mt-3">
              <code>core</code> feeds tokens to both engines, so the palette,
              spacing scale, radii, and fonts never drift between them.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="vd-row vd-mb-6">
      <div class="vd-col-12 vd-col-md-6">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6>
              <i class="ph ph-feather"></i> When to use the Vanilla engine
            </h6>
          </div>
          <div class="vd-card-body">
            <ul>
              <li>Static HTML pages with <strong>no build step</strong></li>
              <li>Dropping styles into an existing server-rendered app</li>
              <li>CDN / single-file prototypes and embeds</li>
              <li>
                Teams that want components driven entirely by
                <code>data-*</code> attributes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="vd-col-12 vd-col-md-6">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6><i class="ph ph-atom"></i> When to use vd2 (Vue)</h6>
          </div>
          <div class="vd-card-body">
            <ul>
              <li>Vue 3 single-page or SSR / SSG applications</li>
              <li>
                You want reactive state, typed props, and component
                composition
              </li>
              <li>Tree-shaking and route-level code splitting via Vite</li>
              <li>
                Theming through a Pinia store instead of global JS calls
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="vd-row vd-mb-6">
      <div class="vd-col-12">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6><i class="ph ph-package"></i> What a vd2 app installs</h6>
          </div>
          <div class="vd-card-body">
            <DocCodeSnippet :shell="depsShell" :default-open="true" />
            <p class="vd-mt-4">
              vd2 pulls <strong>component CSS</strong> from the framework and
              <strong>token data</strong> from core — it does not load the
              framework's imperative JS. Behaviour is reimplemented in Vue:
            </p>
            <DocCodeSnippet :js="importJs" :default-open="true" />
          </div>
        </div>
      </div>
    </div>

    <GuideLinkCards
      icon="ph-compass"
      title="Where to go next"
      :links="nextLinks"
    />
  </section>
</template>
