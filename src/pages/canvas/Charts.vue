<script setup lang="ts">
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";
import EngineSwitch from "@/components/EngineSwitch.vue";
import { VdChart } from "@vanduo-oss/charts/vue";

const barData = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 180 },
  { month: "Mar", sales: 150 },
  { month: "Apr", sales: 220 },
];
const lineData = [
  { month: "Jan", visits: 3200 },
  { month: "Feb", visits: 4100 },
  { month: "Mar", visits: 3700 },
  { month: "Apr", visits: 5200 },
];
const donutData = [
  { channel: "Direct", revenue: 4200 },
  { channel: "Referral", revenue: 3100 },
  { channel: "Social", revenue: 2400 },
  { channel: "Email", revenue: 1800 },
];

const installShell = `pnpm add @vanduo-oss/charts`;

const vue3Usage = `<script setup lang="ts">
import { VdChart } from '@vanduo-oss/charts/vue';

const data = [
  { month: 'Jan', sales: 120 },
  { month: 'Feb', sales: 180 },
];
<\/script>

<template>
  <VdChart type="bar" :data="data" x="month" y="sales"
           title="Monthly sales" :height="300" />
</template>`;

const vanillaJs = `import { init } from '@vanduo-oss/charts';
import '@vanduo-oss/charts/css';

// Declarative: scan the DOM for [data-vd-chart] and render SVG.
init();`;

const vanillaHtml = `<div
  data-vd-chart="donut"
  data-vd-label="channel"
  data-vd-value="revenue"
  data-vd-title="Revenue mix"
  data-vd-height="300">
[
  { "channel": "Direct",   "revenue": 4200 },
  { "channel": "Referral", "revenue": 3100 }
]
</div>`;

const chartTypes: [string, string][] = [
  [
    'type="bar"',
    "Category bars with band scale, axes, grid lines, tooltips, bar-click events.",
  ],
  [
    'type="line"',
    "Line path with optional points over category, number, or date-like x.",
  ],
  [
    'type="area"',
    "Filled area plus line path, sharing the cartesian infrastructure.",
  ],
  ['type="scatter"', "Circle marks over numeric, date-like, or categorical x."],
  [
    'type="donut"',
    "Arc slices, default inner-radius-ratio 0.62, center total, legend.",
  ],
  ['type="pie"', "Same polar renderer with inner-radius-ratio 0."],
];

const vue3Api: [string, string][] = [
  [
    ":type",
    "'bar' | 'line' | 'area' | 'scatter' | 'donut' | 'pie' (default 'bar').",
  ],
  [":data", "Array of row objects."],
  ["x / y", "Cartesian accessors — key string or function."],
  ["label / value", "Pie / donut accessors."],
  ["title / description", "Rendered into SVG accessibility metadata."],
  [":height", "Container min-height in px (default 300)."],
  [
    ":theme / :tooltip / :responsive",
    "Theme overrides, custom/disabled tooltip, responsive resize.",
  ],
];

const vanillaOptions: [string, string][] = [
  ["target", "Element | selector — required mount element."],
  ["data", "Array; null x/y/value rows are skipped."],
  ["x, y", "string | function — cartesian accessors."],
  ["label, value", "string | function — pie/donut accessors."],
  ["title, description", "Rendered into SVG accessibility metadata."],
  ["tooltip", "function | string | false — custom or disabled tooltips."],
  ["theme", "object — override token-derived colors / text / grid / axis."],
];
</script>

<template>
  <section id="vd-charts">
    <h5 class="demo-title"><i class="ph ph-chart-donut"></i>Charts</h5>
    <p class="vd-mb-8">
      <strong>Vanduo Charts</strong> is a standalone SVG-first package for
      common dashboard charts, installed separately from the framework. It
      renders accessible SVG, reads Vanduo theme tokens, and ships an optional
      Vue 3 binding (<code>@vanduo-oss/charts/vue</code>) used here.
    </p>

    <div class="vd-row vd-mb-6">
      <div class="vd-col-12 vd-col-lg-4 vd-mb-4">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6><i class="ph ph-chart-bar"></i> Bar Chart</h6>
          </div>
          <div class="vd-card-body">
            <VdChart
              type="bar"
              :data="barData"
              x="month"
              y="sales"
              title="Monthly sales"
              :height="300"
            />
          </div>
        </div>
      </div>
      <div class="vd-col-12 vd-col-lg-4 vd-mb-4">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6><i class="ph ph-chart-line-up"></i> Line Chart</h6>
          </div>
          <div class="vd-card-body">
            <VdChart
              type="line"
              :data="lineData"
              x="month"
              y="visits"
              title="Site visits"
              :height="300"
            />
          </div>
        </div>
      </div>
      <div class="vd-col-12 vd-col-lg-4 vd-mb-4">
        <div class="vd-card demo-card">
          <div class="vd-card-header">
            <h6><i class="ph ph-chart-donut"></i> Donut Chart</h6>
          </div>
          <div class="vd-card-body">
            <VdChart
              type="donut"
              :data="donutData"
              label="channel"
              value="revenue"
              title="Revenue mix"
              :height="300"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="vd-card vd-card-glow demo-card">
      <div class="vd-card-header">
        <h6>
          <i
            class="ph ph-list-dashes mr-2"
            style="color: var(--vd-color-primary)"
          ></i
          >API Reference
        </h6>
      </div>
      <div class="vd-card-body">
        <h4>Install</h4>
        <DocCodeSnippet :shell="installShell" />

        <h4 class="vd-mt-6">Usage</h4>
        <EngineSwitch>
          <template #vue3
            ><DocCodeSnippet :html="vue3Usage" :default-open="true"
          /></template>
          <template #vanilla>
            <DocCodeSnippet :js="vanillaJs" :default-open="true" />
            <DocCodeSnippet :html="vanillaHtml" />
          </template>
        </EngineSwitch>

        <h4 class="vd-mt-6">Chart Types</h4>
        <div class="vd-table-responsive">
          <table class="vd-table vd-table-striped">
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in chartTypes" :key="row[0]">
                <td>
                  <code>{{ row[0] }}</code>
                </td>
                <td>{{ row[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <EngineSwitch>
          <template #vue3>
            <h4 class="vd-mt-6">Component API</h4>
            <div class="vd-table-responsive">
              <table class="vd-table vd-table-striped">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in vue3Api" :key="row[0]">
                    <td>
                      <code>{{ row[0] }}</code>
                    </td>
                    <td>{{ row[1] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
          <template #vanilla>
            <h4 class="vd-mt-6">Options</h4>
            <div class="vd-table-responsive">
              <table class="vd-table vd-table-striped">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in vanillaOptions" :key="row[0]">
                    <td>
                      <code>{{ row[0] }}</code>
                    </td>
                    <td>{{ row[1] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </EngineSwitch>

        <h4 class="vd-mt-6">Notes</h4>
        <ul>
          <li>
            Each chart renders an <code>&lt;svg role="img"&gt;</code> with
            title/description metadata when provided.
          </li>
          <li>
            The vanilla bundle exposes <code>window.VanduoCharts</code> and
            registers with <code>Vanduo.init(root)</code> when the framework
            is present.
          </li>
          <li>
            Charts read Vanduo theme tokens, so they follow the active theme
            automatically.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
