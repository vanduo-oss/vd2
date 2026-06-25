<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";

const beforeHtml = `<!-- Bootstrap -->
<button class="btn btn-primary btn-lg">Save</button>
<div class="card"><div class="card-body">…</div></div>`;

const afterHtml = `<!-- Vanduo -->
<button class="vd-btn vd-btn-primary vd-btn-lg">Save</button>
<div class="vd-card"><div class="vd-card-body">…</div></div>`;

const legacyToVueJs = `// Legacy → vd2: same classes, behaviour moves to components/composables
// Before (legacy):
//   <div data-vd-tooltip>…</div>   + Vanduo.init()
// After (vd2):
const root = ref<HTMLElement | null>(null);
useTooltips(root);   // the markup/classes stay identical`;

const classMap: [string, string][] = [
  [".btn / .btn-primary", ".vd-btn / .vd-btn-primary"],
  [".card / .card-body", ".vd-card / .vd-card-body"],
  [".row / .col-md-6", ".vd-row / .vd-col-md-6"],
  [".badge / .alert", ".vd-badge / .vd-alert"],
  ["utility: .mt-3 / .text-center", ".vd-mt-3 / .vd-text-center"],
];
</script>

<template>
  <DocsLayout>
    <section id="migration-comparison">
      <h5 class="demo-title">
        <i class="ph ph-arrows-down-up"></i>Migration
        <code class="vd-text-sm">Guide</code>
      </h5>
      <p class="vd-mb-6">
        Two migrations matter here: moving <strong>to Vanduo</strong> from another
        CSS framework, and moving <strong>from the legacy engine to vd2</strong>.
        Both are low-friction because Vanduo's class names are predictable and the
        DOM contract is shared across engines.
      </p>

      <div class="vd-row vd-mb-6">
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-arrow-bend-down-right"></i> From Bootstrap / Tailwind</h6></div>
            <div class="vd-card-body">
              <p>Mostly a prefix change — Vanduo namespaces everything under <code>vd-</code>:</p>
              <DocCodeSnippet :html="beforeHtml" :default-open="true" />
              <DocCodeSnippet :html="afterHtml" :default-open="true" />
            </div>
          </div>
        </div>
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-arrows-left-right"></i> Common class map</h6></div>
            <div class="vd-card-body">
              <div class="vd-table-responsive">
                <table class="vd-table vd-table-striped">
                  <thead><tr><th>Other framework</th><th>Vanduo</th></tr></thead>
                  <tbody>
                    <tr v-for="row in classMap" :key="row[0]">
                      <td><code>{{ row[0] }}</code></td>
                      <td><code>{{ row[1] }}</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vd-card demo-card">
        <div class="vd-card-header"><h6><i class="ph ph-atom"></i> Legacy engine → vd2</h6></div>
        <div class="vd-card-body">
          <p>
            Keep your markup and classes. Replace global <code>Vanduo.init</code>
            calls with the matching composable, and swap theming for the Pinia
            store:
          </p>
          <DocCodeSnippet :js="legacyToVueJs" :default-open="true" />
          <p class="vd-text-sm vd-text-muted vd-mt-3">
            See <a href="/guides/runtime-architecture">Runtime architecture</a> for
            the full mapping and <a href="/guides/theme-customizer-guide">Theme
            customizer</a> for theming.
          </p>
        </div>
      </div>
    </section>
  </DocsLayout>
</template>
