<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";

interface Feature {
  icon: string;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    icon: "ph-intersect",
    title: "Two Engines, One System",
    body: "Ship the same design system two ways — a zero-build Vanilla engine you drop in over a CDN, or first-class Vue 3 components and composables. Identical tokens, identical look. Choose an engine per project, or run both side by side.",
  },
  {
    icon: "ph-atom",
    title: "Vue 3, First-Class",
    body: "Typed <script setup> components, a composable for every interaction, Pinia-friendly stores, and static rendering via vite-ssg. It's tree-shakeable ESM, so you pull in only the pieces you actually use.",
  },
  {
    icon: "ph-leaf",
    title: "Zero-Build Vanilla",
    body: "No toolchain? No problem. The Vanilla engine is pure HTML, CSS, and JavaScript — drop in a CDN link and you're productive in a minute. The styling even holds up with JavaScript disabled.",
  },
  {
    icon: "ph-database",
    title: "One Source of Truth",
    body: "Design tokens live in @vanduo-oss/core as DTCG JSON and feed both engines. Change a token once and the Vanilla CSS and the Vue components re-skin in lockstep — never drifting out of sync.",
  },
  {
    icon: "ph-spiral",
    title: "Fibonacci & Golden Ratio",
    body: "Spacing, type scale, shadows, and grid layouts are derived from the Fibonacci sequence and the Golden Ratio. Both engines inherit the same proportions, so layouts feel balanced without manual tweaking.",
  },
  {
    icon: "ph-wheelchair",
    title: "Accessible by Default",
    body: "ARIA roles, visible focus rings, semantic markup, keyboard-first interactions, and prefers-reduced-motion support ship in both engines. Accessibility is on from the start — never a bolt-on.",
  },
  {
    icon: "ph-moon-stars",
    title: "Dark Mode & Live Theming",
    body: "Light, dark, and system-synced themes driven by CSS variables, with a drop-in switcher and a live customizer. Theme once at the token layer and every component re-skins instantly — in either engine.",
  },
  {
    icon: "ph-shield-check",
    title: "Conflict-Free",
    body: "Every class is namespaced with vd- and the Vue components scope cleanly, so Vanduo coexists with Bootstrap, Tailwind, or legacy styles without cascade surprises — whichever engine you reach for.",
  },
  {
    icon: "ph-toggle-left",
    title: "Dual-Engine Docs",
    body: "These docs flip between Vanilla and Vue 3 with a single toggle — every demo, API table, and snippet in both flavours. Typed, copy-paste-ready, and written to read like the platform itself.",
  },
];

const flipped = reactive<boolean[]>(features.map(() => false));
const toggle = (index: number): void => {
  flipped[index] = !flipped[index];
};

const iconWeights = [
  { cls: "ph", label: "Regular" },
  { cls: "ph-fill", label: "Fill" },
  { cls: "ph-bold", label: "Bold" },
  { cls: "ph-light", label: "Light" },
  { cls: "ph-thin", label: "Thin" },
  { cls: "ph-duotone", label: "Duotone" },
];

const sampleIcons = [
  { cls: "ph ph-house" },
  { cls: "ph ph-user" },
  { cls: "ph ph-gear" },
  { cls: "ph ph-bell" },
  { cls: "ph ph-envelope" },
  { cls: "ph ph-magnifying-glass" },
  { cls: "ph ph-download" },
  { cls: "ph ph-upload" },
  { cls: "ph ph-trash" },
  { cls: "ph ph-pencil" },
  { cls: "ph-fill ph-heart", color: "var(--vd-color-error)" },
  { cls: "ph-fill ph-star", color: "var(--vd-color-warning)" },
  { cls: "ph ph-check-circle", color: "var(--vd-color-success)" },
  { cls: "ph ph-warning", color: "var(--vd-color-warning)" },
  { cls: "ph ph-x-circle", color: "var(--vd-color-error)" },
  { cls: "ph ph-info", color: "var(--vd-color-info)" },
];

// Golden accent track + neutrals — the golden-angle signature, shown from the
// palette-independent --vd-fib-* / --vd-golden-* scales so it always reflects
// the Fibonacci palette regardless of the active theme.
const swatches = [
  { label: "Golden 1", bg: "var(--vd-golden-1)" },
  { label: "Golden 2", bg: "var(--vd-golden-2)" },
  { label: "Golden 3", bg: "var(--vd-golden-3)" },
  { label: "Golden 4", bg: "var(--vd-golden-4)" },
  { label: "Golden 5", bg: "var(--vd-golden-5)" },
  { label: "Golden 6", bg: "var(--vd-golden-6)" },
  { label: "Gray 1", bg: "var(--vd-fib-gray-1)", light: true },
  { label: "Gray 8", bg: "var(--vd-fib-gray-8)" },
];
</script>

<template>
  <section id="home">
    <!-- Hero -->
    <div class="hero-zone">
      <div
        id="hero"
        class="hero vd-parallax"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding-top: 268px;
          padding-bottom: 89px;
        "
      >
        <div class="vd-parallax-layer" data-parallax-speed="0.5"></div>
        <div class="vd-parallax-content hero-content">
          <h2
            class="hero-title"
            style="display: flex; align-items: center; justify-content: center"
          >
            <span class="hero-title-logo-wrap">
              <img
                src="/images/vanduo-h2o-logo-animated.svg"
                class="hero-title-logo"
                alt=""
                aria-hidden="true"
                width="200"
                height="200"
                decoding="async"
              />
            </span>
            <span class="hero-title-text">
              <span class="hero-title-brand">vanduo</span>
              <span class="hero-title-word">framework</span>
            </span>
          </h2>
          <div class="vd-mt-6 hero-cta-buttons">
            <RouterLink
              to="/guides/getting-started"
              class="vd-btn vd-btn-outline"
            >
              <i class="ph ph-rocket" aria-hidden="true"></i> Getting Started
            </RouterLink>
            <RouterLink to="/docs-landing" class="vd-btn vd-btn-outline">
              <i class="ph ph-cube" aria-hidden="true"></i> Browse Components
            </RouterLink>
            <a
              href="https://github.com/vanduo-oss/framework"
              class="vd-btn vd-btn-outline"
              target="_blank"
              rel="noopener"
            >
              <i class="ph ph-github-logo" aria-hidden="true"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="vd-container-responsive">
      <!-- Features -->
      <div id="home-features" style="padding: 4rem 0; scroll-margin-top: 80px">
        <h3
          class="vd-text-center vd-mb-2"
          style="color: var(--vd-color-primary)"
        >
          Features
        </h3>
        <p class="vd-text-center vd-text-muted vd-mb-8">
          One design system, two engines — drop-in Vanilla or first-class Vue 3.
          Tap a card to dig in.
        </p>
        <div class="vd-row philosophy-cards" style="align-items: stretch">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            class="vd-col-12 vd-col-md-6 vd-col-lg-4"
          >
            <div
              class="vd-card vd-card-glow vd-glass vd-glass-floating vd-text-center vd-morph vd-morph-lg feature-morph-card"
              data-vd-morph
              role="button"
              tabindex="0"
              :aria-label="`${feature.title} — reveal details`"
              @click="toggle(i)"
              @keydown.enter.prevent="toggle(i)"
              @keydown.space.prevent="toggle(i)"
            >
              <span
                class="vd-morph-content feature-morph-face"
                :class="flipped[i] ? 'vd-morph-next' : 'vd-morph-current'"
              >
                <i
                  :class="`ph ${feature.icon} feature-icon`"
                  aria-hidden="true"
                ></i>
                <h4 class="feature-morph-title">{{ feature.title }}</h4>
                <span class="feature-morph-hint vd-text-muted"
                  >Tap to learn more</span
                >
              </span>
              <span
                class="vd-morph-content feature-morph-face"
                :class="flipped[i] ? 'vd-morph-current' : 'vd-morph-next'"
              >
                <h4 class="feature-morph-title">{{ feature.title }}</h4>
                <p class="feature-morph-body">{{ feature.body }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Icons Overview -->
      <div id="home-icons" style="padding: 4rem 0; scroll-margin-top: 80px">
        <h3
          class="icons-section-title vd-mb-3"
          style="color: var(--vd-color-primary)"
        >
          Phosphor Icons
        </h3>
        <p class="icons-section-subtitle vd-text-muted vd-mb-8">
          1,500+ icons in 6 weights, bundled locally. No CDN required.
        </p>
        <div class="vd-row">
          <div class="vd-col-12">
            <div
              class="vd-card vd-card-glow vd-card-actionable vd-glass icons-card home-card-no-glow"
            >
              <div class="icons-weights">
                <div
                  v-for="w in iconWeights"
                  :key="w.label"
                  class="icons-weight-item"
                >
                  <i :class="`${w.cls} ph-heart`"></i>
                  <p class="vd-text-sm vd-text-muted">{{ w.label }}</p>
                </div>
              </div>
              <div class="icons-sample-row">
                <i
                  v-for="(icon, idx) in sampleIcons"
                  :key="idx"
                  :class="icon.cls"
                  :style="icon.color ? { color: icon.color } : undefined"
                ></i>
              </div>
              <p class="icons-footer vd-text-sm vd-text-muted">
                <i
                  class="ph ph-heart-straight"
                  style="color: var(--vd-color-error)"
                ></i>
                Icons by
                <a
                  href="https://phosphoricons.com"
                  target="_blank"
                  rel="noopener"
                  ><strong>Phosphor Icons</strong></a
                >
                — MIT Licensed.
                <RouterLink to="/core/icons"
                  >See full documentation &rarr;</RouterLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Open Color Overview -->
      <div id="open-color" style="padding: 4rem 0; scroll-margin-top: 80px">
        <h3
          class="open-color-title vd-mb-3"
          style="color: var(--vd-color-primary)"
        >
          Fibonacci Palette
        </h3>
        <p class="open-color-subtitle vd-text-muted vd-mb-8">
          Vanduo's default palette is golden-angle generated — hues stepped by
          ≈137.5° with golden-ratio shade ramps, so color shares the same DNA as
          its spacing and grid. Open Color stays available as an optional
          choice.
        </p>
        <div class="vd-row">
          <div class="vd-col-12">
            <div
              class="vd-card vd-card-glow vd-card-actionable vd-glass open-color-card home-card-no-glow"
            >
              <div class="open-color-grid">
                <div
                  v-for="s in swatches"
                  :key="s.label"
                  class="open-color-swatch"
                  :class="{ 'is-light': s.light }"
                  :style="{ background: s.bg }"
                >
                  {{ s.label }}
                </div>
              </div>
              <p class="open-color-footer vd-text-sm vd-text-muted">
                The golden accent track, generated by
                <code>@vanduo-oss/core</code>. Prefer the classic look?
                <a
                  href="https://yeun.github.io/open-color/"
                  target="_blank"
                  rel="noopener"
                  ><strong>Open Color</strong></a
                >
                (MIT) is one toggle away.
                <RouterLink to="/core/color-palette"
                  >See the full palette in the documentation &rarr;</RouterLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div id="cta" style="padding: 5rem 0">
        <div class="vd-row">
          <div class="vd-col-12">
            <div
              class="vd-card vd-card-glow vd-card-actionable vd-glass vd-text-center home-card-no-glow"
              style="padding: 3rem 2rem"
            >
              <i
                class="ph ph-book-open"
                style="
                  font-size: 3rem;
                  color: var(--vd-color-primary);
                  margin-bottom: 1rem;
                "
              ></i>
              <h4 style="color: var(--vd-color-primary)">
                Browse Documentation
              </h4>
              <p class="vd-text-muted vd-mb-5">
                Explore all components, utilities, and code examples.
              </p>
              <RouterLink
                to="/docs-landing"
                class="vd-btn vd-btn-outline vd-btn-lg"
              >
                Documentation
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
