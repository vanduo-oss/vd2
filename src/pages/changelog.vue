<script setup lang="ts">
// The changelog is ~4,000 lines of static, hand-written release notes with no
// framework JS behaviour. The static body (the Framework / Vanilla history) is
// imported verbatim and rendered via v-html (its styles already live in
// src/styles/docs.css). The page header and engine toggle are rendered by Vue
// (outside the v-html so they aren't wiped). Trusted first-party content →
// v-html is safe here.
//
// Filtering is STRICT and engine-driven: every release block carries a
// data-engine tag (the whole v-html body is the `vanilla` framework history;
// the vd2 card is `vue3`). An entry shows only when its own — or nearest
// ancestor's — tag includes the active engine; untagged entries are hidden, and
// any group/column left empty is collapsed so no shell remains.
import { nextTick, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import content from "./changelog-content.html?raw";
import { useEngineStore } from "@/stores/engine";

const engineStore = useEngineStore();
const { engine } = storeToRefs(engineStore);

const rootRef = ref<HTMLElement | null>(null);

const applyEngineFilter = (active: string): void => {
  const root = rootRef.value;
  if (!root) return;

  // 1. Show a tagged element only if its tag set includes the active engine.
  root.querySelectorAll<HTMLElement>("[data-engine]").forEach((el) => {
    const tags = (el.dataset.engine ?? "").split(/\s+/).filter(Boolean);
    el.hidden = !tags.includes(active);
  });
  // 2. Collapse a change-group whose items were all filtered out…
  root.querySelectorAll<HTMLElement>(".change-group").forEach((group) => {
    const items = [...group.querySelectorAll<HTMLElement>(".change-item")];
    group.hidden = items.length > 0 && items.every((i) => i.hidden);
  });
  // 3. …and a version-body column whose groups all collapsed.
  root
    .querySelectorAll<HTMLElement>(".version-body .vd-col-12")
    .forEach((col) => {
      const groups = [...col.querySelectorAll<HTMLElement>(".change-group")];
      col.hidden = groups.length > 0 && groups.every((g) => g.hidden);
    });
};

onMounted(async () => {
  await nextTick();
  applyEngineFilter(engine.value);
});
watch(engine, applyEngineFilter);
</script>

<template>
  <section id="changelog" ref="rootRef">
    <div class="changelog-header">
      <div class="vd-container-responsive">
        <h2 style="color: var(--vd-color-primary)">
          <i class="ph ph-scroll" style="color: var(--vd-color-primary)"></i>
          Changelog
        </h2>
        <p class="vd-text-lg vd-text-muted">
          Release notes for the <strong>Vanduo Framework</strong> and ecosystem
          packages, plus <strong>vd2</strong> (Vue 3). The engine toggle filters
          the timeline: <em>Vanilla</em> shows the framework history;
          <em>Vue 3</em>
          adds vd2's own releases and hides vanilla-runtime-only notes.
        </p>
        <div class="changelog-engine-toggle">
          <div
            class="doc-engine-toggle"
            role="group"
            aria-label="Documentation engine"
          >
            <button
              type="button"
              class="doc-engine-option"
              :class="{ active: engine === 'vue3' }"
              :aria-pressed="engine === 'vue3'"
              @click="engineStore.setEngine('vue3')"
            >
              <i class="ph ph-atom" aria-hidden="true"></i> Vue 3
            </button>
            <button
              type="button"
              class="doc-engine-option"
              :class="{ active: engine === 'vanilla' }"
              :aria-pressed="engine === 'vanilla'"
              @click="engineStore.setEngine('vanilla')"
            >
              <i class="ph ph-file-html" aria-hidden="true"></i> Vanilla
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Vue 3 engine (vd2) — newest, shown only in the Vue 3 view -->
    <div style="padding: 3rem 0 0" data-engine="vue3">
      <div class="vd-container-responsive" style="max-width: 1200px">
        <article class="version-card" data-engine="vue3">
          <header class="version-header">
            <span
              class="vd-badge vd-badge-primary"
              style="font-size: 1rem; padding: 0.5rem 1rem"
              >vd2 0.2.0</span
            >
            <span style="color: var(--vd-text-secondary); font-size: 0.95rem">
              <i class="ph ph-calendar mr-1"></i>June 28, 2026
            </span>
            <span class="vd-badge vd-badge-info" style="font-size: 0.75rem"
              >Vue 3 engine</span
            >
          </header>
          <div class="version-body">
            <div class="vd-row">
              <div class="vd-col-12">
                <h4>
                  <i
                    class="ph ph-atom mr-2"
                    style="color: var(--vd-color-primary)"
                  ></i
                  >vd2 (Vue 3 + SSR)
                </h4>
                <div class="change-group">
                  <h5>New</h5>
                  <ul class="change-list">
                    <li class="change-item">
                      <i
                        class="ph ph-package"
                        style="color: var(--vd-color-primary)"
                      ></i>
                      <div>
                        <strong
                          >@vanduo-oss/vue (VD2) — first-class Vue 3</strong
                        >
                        <p>
                          The 41 <code>Vd*</code> components (incl. 7 layout
                          primitives) and 30 composables now ship as
                          <code>@vanduo-oss/vue</code>
                          <code>0.1.0</code> — one install (<code
                            >pnpm add @vanduo-oss/vue</code
                          >), with a <code>VanduoVue</code> plugin and
                          <code>@vanduo-oss/vue/css</code>. vd2 dogfoods the
                          package and consumes <code>core</code>/<code
                            >framework</code
                          >
                          from npm.
                        </p>
                      </div>
                    </li>
                    <li class="change-item">
                      <i
                        class="ph ph-sparkle"
                        style="color: var(--vd-color-info)"
                      ></i>
                      <div>
                        <strong>Home, Primitives &amp; guide badges</strong>
                        <p>
                          A new "VD2 — Framework Evolved" home section, the
                          restored <a href="#docs/primitives">Primitives</a>
                          docs page, and engine-scope badges on every guide
                          (Vanilla / Vue 3 / both).
                        </p>
                      </div>
                    </li>
                    <li class="change-item">
                      <i
                        class="ph ph-magnifying-glass"
                        style="color: var(--vd-color-info)"
                      ></i>
                      <div>
                        <strong>SEO</strong>
                        <p>
                          Per-page <code>title</code>, description, canonical
                          and Open Graph/Twitter tags baked into the static
                          HTML, plus <code>robots.txt</code> and a generated
                          <code>sitemap.xml</code>.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="change-group">
                  <h5>Changed</h5>
                  <ul class="change-list">
                    <li class="change-item">
                      <i
                        class="ph ph-moon-stars"
                        style="color: var(--vd-color-warning)"
                      ></i>
                      <div>
                        <strong
                          >Charcoal dark theme &amp; one-install docs</strong
                        >
                        <p>
                          The dark background moved from pure black to the
                          charcoal neutral (<code>--vd-charcoal-9</code>), and
                          Getting Started's Vue tab is now a single
                          <code>@vanduo-oss/vue</code> install.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="change-group">
                  <h5>Fixed</h5>
                  <ul class="change-list">
                    <li class="change-item">
                      <i
                        class="ph ph-bug"
                        style="color: var(--vd-color-success)"
                      ></i>
                      <div>
                        <strong>Docs interactions</strong>
                        <p>
                          Code snippets stay expanded across engine switches;
                          the Draggable demo drops items into the zone; and the
                          global search modal's hint/empty states render
                          correctly.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="change-group">
                  <h5>Highlights</h5>
                  <ul class="change-list">
                    <li class="change-item">
                      <i
                        class="ph ph-cards-three"
                        style="color: var(--vd-color-success)"
                      ></i>
                      <div>
                        <strong
                          >Full docs recreation on the Vue 3 engine</strong
                        >
                        <p>
                          Every component, core, layout, effects, theme,
                          forms-picker, top-level, and guide page is now served
                          by vd2 — framework behaviour reimplemented as
                          DOM-scanning composables and Pinia stores against the
                          same CSS/<code>data-*</code> contract.
                        </p>
                      </div>
                    </li>
                    <li class="change-item">
                      <i
                        class="ph ph-toggle-left"
                        style="color: var(--vd-color-info)"
                      ></i>
                      <div>
                        <strong>Dual-engine documentation toggle</strong>
                        <p>
                          Readers can switch code and API examples between the
                          Vanilla and Vue 3 engines from the docs sidebar; the
                          choice persists across the site.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Framework / Vanilla engine history (every card is a framework release) -->
    <div data-engine="vanilla" v-html="content"></div>
  </section>
</template>
