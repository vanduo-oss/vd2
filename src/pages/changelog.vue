<script setup lang="ts">
// The changelog is ~4,000 lines of static, hand-written release notes with no
// framework JS behaviour. The legacy body is imported verbatim and rendered via
// v-html (its styles already live in src/styles/docs.css). The page header and
// engine toggle are rendered by Vue (outside the v-html so they aren't wiped),
// and the timeline is filtered by the global engine choice: entries tagged
// data-engine="legacy|vue3" are hidden in the other view (untagged = always
// shown). Trusted first-party content → v-html is safe here.
import { storeToRefs } from "pinia";
import content from "./changelog-content.html?raw";
import { useEngineStore } from "@/stores/engine";

const engineStore = useEngineStore();
const { engine } = storeToRefs(engineStore);
</script>

<template>
  <section id="changelog" :data-engine-view="engine">
    <div class="changelog-header">
      <div class="vd-container-responsive">
        <h2 style="color: var(--vd-color-primary);">
          <i class="ph ph-scroll" style="color: var(--vd-color-primary);"></i>
          Changelog
        </h2>
        <p class="vd-text-lg vd-text-muted">
          Release notes for <strong>Vanduo Framework</strong> and
          <strong>Ecosystem extension packages</strong> — documented side by
          side. Use the toggle to filter entries by engine.
        </p>
        <div class="changelog-engine-toggle">
          <div class="doc-engine-toggle" role="group" aria-label="Documentation engine">
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
              :class="{ active: engine === 'legacy' }"
              :aria-pressed="engine === 'legacy'"
              @click="engineStore.setEngine('legacy')"
            >
              <i class="ph ph-file-html" aria-hidden="true"></i> Legacy
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Vue 3 engine (vd2) — newest, shown only in the Vue 3 view -->
    <div style="padding: 3rem 0 0;">
      <div class="vd-container-responsive" style="max-width: 1200px;">
        <article class="version-card" data-engine="vue3">
          <header class="version-header">
            <span class="vd-badge vd-badge-primary" style="font-size: 1rem; padding: 0.5rem 1rem;">vd2 0.2.0</span>
            <span style="color: var(--vd-text-secondary); font-size: 0.95rem;">
              <i class="ph ph-calendar mr-1"></i>June 25, 2026
            </span>
            <span class="vd-badge vd-badge-info" style="font-size: 0.75rem;">Vue 3 engine</span>
          </header>
          <div class="version-body">
            <div class="vd-row">
              <div class="vd-col-12">
                <h4><i class="ph ph-atom mr-2" style="color: var(--vd-color-primary);"></i>vd2 (Vue 3 + SSR)</h4>
                <div class="change-group">
                  <h5>Highlights</h5>
                  <ul class="change-list">
                    <li class="change-item">
                      <i class="ph ph-cards-three" style="color: var(--vd-color-success);"></i>
                      <div>
                        <strong>Full docs recreation on the Vue 3 engine</strong>
                        <p>Every component, core, layout, effects, theme, forms-picker, top-level, and guide page is now served by vd2 — framework behaviour reimplemented as DOM-scanning composables and Pinia stores against the same CSS/<code>data-*</code> contract.</p>
                      </div>
                    </li>
                    <li class="change-item">
                      <i class="ph ph-toggle-left" style="color: var(--vd-color-info);"></i>
                      <div>
                        <strong>Dual-engine documentation toggle</strong>
                        <p>Readers can switch code and API examples between the legacy and Vue 3 engines from the docs sidebar; the choice persists across the site.</p>
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

    <div v-html="content"></div>
  </section>
</template>
