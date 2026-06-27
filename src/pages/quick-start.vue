<script setup lang="ts">
import { RouterLink } from "vue-router";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";

const cdnHtml = `<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/vanduo-oss/framework@v1.5.1/dist/vanduo.min.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/gh/vanduo-oss/framework@v1.5.1/dist/vanduo.min.js"><\/script>
<script>Vanduo.init();<\/script>`;

const downloadHtml = `<!-- CSS -->
<link rel="stylesheet" href="dist/vanduo.min.css">

<!-- JS -->
<script src="dist/vanduo.min.js"><\/script>
<script>Vanduo.init();<\/script>`;

const sourceHtml = `<!-- Full framework -->
<link rel="stylesheet" href="css/vanduo.css">
<script src="js/vanduo.js"><\/script>
<script>Vanduo.init();<\/script>

<!-- Or pick individual modules -->
<link rel="stylesheet" href="css/core/colors.css">
<link rel="stylesheet" href="css/components/buttons.css">`;

const bundlerShell = `pnpm create vite my-app --template vanilla
cd my-app
pnpm add @vanduo-oss/framework`;

const bundlerJs = `import '@vanduo-oss/framework/css';
import { Vanduo } from '@vanduo-oss/framework';
Vanduo.init();`;

const cssVarsCss = `:root {
  /* Brand colors */
  --vd-color-primary: #6366f1;
  --vd-color-primary-dark: #4f46e5;
  --vd-color-primary-light: #818cf8;

  /* Typography */
  --vd-font-family-base: 'Inter', sans-serif;
  --vd-font-size-base: 1rem;

  /* Spacing (Fibonacci-based) */
  --vd-spacing-1: 1px;   --vd-spacing-2: 2px;
  --vd-spacing-3: 3px;   --vd-spacing-5: 5px;
  --vd-spacing-8: 8px;   --vd-spacing-13: 13px;

  /* Borders */
  --vd-border-color: #e2e8f0;
  --vd-btn-border-radius: 8px;
}`;

const themeHtml = `<!-- Select-based toggle -->
<select data-toggle="theme">
  <option value="system">System</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

<!-- Or button toggle (cycles modes) -->
<button data-toggle="theme">Toggle</button>`;

const jsApi = `// Initialize only a dynamic subtree after DOM changes
const panel = document.querySelector('#settings-panel');
Vanduo.init(panel);

// Re-initialize one component inside that subtree
Vanduo.reinit('dropdown', panel);

// Destroy one subtree before removing it
Vanduo.destroy(panel);

// Full-document cleanup is still available
Vanduo.destroyAll();

// Register a custom component
Vanduo.register('myComponent', {
  init: function() { /* ... */ }
});

// Show a toast notification
Vanduo.getComponent('toast').show({
  title: 'Success',
  message: 'Item saved.',
  type: 'success'
});`;

const dataAttrs: [string, string][] = [
  ['data-modal="#id"', "Modal trigger"],
  ['data-dismiss="modal"', "Modal close button"],
  ['data-tooltip="text"', "Tooltip content"],
  ['data-tooltip-placement="top|right|bottom|left"', "Tooltip position"],
  ['data-toggle="theme"', "Theme switcher"],
  ['data-toggle="font"', "Font switcher"],
  ["data-collapsible", "Collapsible container"],
  ['data-speed="0.5"', "Parallax layer speed"],
];
</script>

<template>
  <section id="getting-started">
    <div class="vd-container-responsive" style="padding: 2rem 0 4rem">
      <h5 class="demo-title">
        <i class="ph ph-rocket-launch"></i>Getting Started
      </h5>

      <div class="vd-row">
        <!-- CDN (Recommended) -->
        <div class="vd-col-12 vd-mb-4">
          <div class="vd-card demo-card">
            <div class="vd-card-header">
              <h6>
                <i
                  class="ph ph-lightning mr-2"
                  style="color: var(--vd-color-warning)"
                ></i
                >CDN
                <span
                  class="vd-badge vd-badge-success"
                  style="
                    margin-left: 8px;
                    font-size: 0.7rem;
                    vertical-align: middle;
                  "
                  >Recommended</span
                >
              </h6>
            </div>
            <div class="vd-card-body">
              <p>
                The quickest way to get started — no install, no build step. Add
                two lines to any HTML file:
              </p>
              <DocCodeSnippet :html="cdnHtml" :default-open="true" />
              <p class="vd-text-sm vd-text-muted vd-mt-3">
                <strong>Tip:</strong> Pin to a specific version for production:
                <code>@v1.5.1</code> instead of <code>@main</code>
              </p>
            </div>
          </div>
        </div>

        <!-- Download -->
        <div class="vd-col-12 vd-mb-4">
          <div class="vd-card demo-card">
            <div class="vd-card-header">
              <h6>
                <i
                  class="ph ph-download-simple mr-2"
                  style="color: var(--vd-color-primary)"
                ></i
                >Download
              </h6>
            </div>
            <div class="vd-card-body">
              <p>
                <a
                  href="https://github.com/vanduo-oss/framework/tree/main/dist"
                  target="_blank"
                  rel="noopener"
                  ><strong>Download the dist/ folder</strong></a
                >
                and include locally — no internet connection required at
                runtime:
              </p>
              <DocCodeSnippet :html="downloadHtml" />
              <p class="vd-text-sm vd-text-muted vd-mt-3">
                The <code>dist/</code> folder is self-contained with CSS, JS,
                fonts, and icons.
              </p>
            </div>
          </div>
        </div>

        <!-- Source Files -->
        <div class="vd-col-12 vd-mb-4">
          <div class="vd-card demo-card">
            <div class="vd-card-header">
              <h6>
                <i
                  class="ph ph-code mr-2"
                  style="color: var(--vd-color-success)"
                ></i
                >Source Files
              </h6>
            </div>
            <div class="vd-card-body">
              <p>For development or modular imports:</p>
              <DocCodeSnippet :html="sourceHtml" />
            </div>
          </div>
        </div>

        <!-- With a Bundler (Vite) -->
        <div class="vd-col-12 vd-mb-4">
          <div class="vd-card demo-card">
            <div class="vd-card-header">
              <h6>
                <i
                  class="ph ph-wrench mr-2"
                  style="color: var(--vd-color-primary)"
                ></i
                >With a Bundler (Vite)
              </h6>
            </div>
            <div class="vd-card-body">
              <div class="vd-alert vd-alert-warning vd-mb-4">
                <i class="ph ph-warning"></i>
                <div>
                  <strong>Requires a bundler.</strong> The imports below use
                  bare module specifiers (<code>@vanduo-oss/framework</code>)
                  which browsers cannot resolve on their own. You must use a
                  build tool like
                  <a href="https://vite.dev/" target="_blank" rel="noopener"
                    >Vite</a
                  >. For static HTML files, use the CDN or Download options
                  above.
                </div>
              </div>
              <p>
                <strong>Step 1.</strong> Scaffold a Vite project and add Vanduo:
              </p>
              <DocCodeSnippet :shell="bundlerShell" :default-open="true" />
              <p class="vd-mt-4">
                <strong>Step 2.</strong> Import in your entry file (e.g.
                <code>main.js</code>):
              </p>
              <DocCodeSnippet :js="bundlerJs" :default-open="true" />
              <div class="vd-alert vd-alert-primary vd-mt-4">
                <i class="ph ph-info"></i>
                <div>
                  <strong>Why pnpm?</strong> pnpm enforces a strict lockfile and
                  creates an isolated <code>node_modules</code> structure by
                  default. Vanduo's <code>.npmrc</code> security policies — like
                  blocking exotic sub-dependencies and strict peer enforcement —
                  work best with pnpm out of the box.
                </div>
              </div>
              <p class="vd-text-sm vd-text-muted vd-mt-3">
                <strong>Alternatives:</strong>
                <code>npm install @vanduo-oss/framework</code> and
                <code>yarn add @vanduo-oss/framework</code> will also work, but
                they do not enforce the same strict lockfile and isolated
                <code>node_modules</code> security guarantees that pnpm
                provides.
              </p>
              <p class="vd-text-sm vd-text-muted vd-mt-2">
                <strong>Optional niche package:</strong> for canvas hex maps,
                install <code>@vanduo-oss/hex-grid</code> separately and import
                <code>VdHexGrid</code> from that package.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="vd-row">
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header">
              <h6>CSS Variable Customization</h6>
            </div>
            <div class="vd-card-body">
              <p>
                Override CSS variables in your own stylesheet to customize the
                entire framework:
              </p>
              <DocCodeSnippet :css="cssVarsCss" />
            </div>
          </div>
        </div>

        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6>Theme Switching</h6></div>
            <div class="vd-card-body">
              <p>
                Vanduo supports light, dark, and system themes. Preference is
                stored in <code>localStorage</code>.
              </p>
              <DocCodeSnippet :html="themeHtml" />
              <p class="vd-mt-5"><strong>How it works:</strong></p>
              <ul>
                <li><code>data-toggle="theme"</code> binds the element</li>
                <li>
                  Preference saved to <code>vanduo-theme-preference</code> key
                </li>
                <li>
                  Sets <code>[data-theme="dark"]</code> on
                  <code>&lt;html&gt;</code>
                </li>
                <li>
                  System mode removes the attribute, deferring to
                  <code>prefers-color-scheme</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="vd-row">
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6>Data Attributes Reference</h6></div>
            <div class="vd-card-body">
              <p>
                JavaScript components are configured via
                <code>data-*</code> attributes:
              </p>
              <div class="vd-table-responsive">
                <table class="vd-table vd-table-striped">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Component</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in dataAttrs" :key="row[0]">
                      <td>
                        <code>{{ row[0] }}</code>
                      </td>
                      <td>{{ row[1] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6>JavaScript API</h6></div>
            <div class="vd-card-body">
              <p>
                All components register with the global
                <code>Vanduo</code> object:
              </p>
              <DocCodeSnippet :js="jsApi" />
              <p class="vd-mt-5"><strong>CSS State Classes:</strong></p>
              <ul>
                <li>
                  <code>.is-open</code> — open state (modals, dropdowns,
                  sidenav)
                </li>
                <li>
                  <code>.is-active</code> — active state (tabs, accordion items)
                </li>
                <li><code>.disabled</code> — disabled state</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- What's Next block -->
      <div
        class="vd-mt-8"
        style="
          border-top: 1px solid var(--vd-border-color);
          padding-top: 2.5rem;
          padding-bottom: 1rem;
        "
      >
        <h4 class="vd-text-lg vd-mb-5">
          <i class="ph ph-arrow-circle-right"></i> What's Next?
        </h4>
        <div class="vd-row" style="gap: 1.25rem">
          <div class="vd-col-12 vd-col-md-4 vd-mb-4">
            <RouterLink
              to="/guides/getting-started"
              class="vd-card vd-card-actionable vd-card-glow"
              style="text-decoration: none"
            >
              <div class="vd-card-body">
                <h4 class="vd-text-md vd-mb-2">Getting Started from Zero</h4>
                <p class="vd-text-sm vd-text-muted vd-mb-0">
                  Build your first complete page step by step — navbar, hero,
                  cards, and footer in about 60 lines of HTML.
                </p>
              </div>
            </RouterLink>
          </div>
          <div class="vd-col-12 vd-col-md-4 vd-mb-4">
            <RouterLink
              to="/guides/first-layout"
              class="vd-card vd-card-actionable vd-card-glow"
              style="text-decoration: none"
            >
              <div class="vd-card-body">
                <h4 class="vd-text-md vd-mb-2">Your First Layout</h4>
                <p class="vd-text-sm vd-text-muted vd-mb-0">
                  Build a responsive page with Vanduo's grid, containers, and
                  breakpoints step by step.
                </p>
              </div>
            </RouterLink>
          </div>
          <div class="vd-col-12 vd-col-md-4 vd-mb-4">
            <RouterLink
              to="/guides/esm-vs-iife"
              class="vd-card vd-card-actionable vd-card-glow"
              style="text-decoration: none"
            >
              <div class="vd-card-body">
                <h4 class="vd-text-md vd-mb-2">ESM vs IIFE vs Legacy</h4>
                <p class="vd-text-sm vd-text-muted vd-mb-0">
                  Understand which JavaScript module format is right for your
                  project and how to set it up.
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
