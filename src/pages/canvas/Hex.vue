<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";
import EngineSwitch from "@/components/EngineSwitch.vue";
import { VdHexGrid } from "@vanduo-oss/hex-grid/vue";

const installShell = `pnpm add @vanduo-oss/hex-grid`;

const vue3Usage = `<script setup lang="ts">
import { VdHexGrid } from '@vanduo-oss/hex-grid/vue';

const onSelect = (hex) => console.log('Selected', hex.q, hex.r);
<\/script>

<template>
  <div style="height: 420px;">
    <VdHexGrid :size="30" :width="15" :height="10" @select="onSelect" />
  </div>
</template>`;

const vanillaJs = `import { VdHexGrid } from '@vanduo-oss/hex-grid';

const grid = new VdHexGrid({
  element: document.getElementById('hex'),
  size: 30,
  width: 15,
  height: 10,
});

grid.on('select', (hex) => console.log(hex.q, hex.r));
grid.setHexTerrain(0, 0, 'GRASSLAND');
grid.setRotation(-Math.PI / 6);`;

const mathUsage = `// Pure axial math — no canvas, no DOM, no Vue.
import { hexDistance, getAdjacentHexes } from '@vanduo-oss/hex-grid/hex-math';

hexDistance(0, 0, 2, -1); // → 2`;

const vue3Api: [string, string][] = [
  [":size", "Hexagon size in px (default 30)."],
  [":width / :height", "Grid columns / rows in hexes (default 10)."],
  [":rotation", "Grid rotation in radians (default 0)."],
  ["@select / @zoom / @pan", "Forwarded interaction events."],
  ["@ready", "Emitted once with the underlying VdHexGrid instance."],
];

const methods: [string, string][] = [
  ["setSize(size) / setDimensions(w, h) / setRotation(rad)", "Reconfigure the grid; re-renders in place."],
  ["getHex(q, r) / getAllHexes() / hasHex(q, r) / getHexCount()", "Query hexes by axial coordinate."],
  ["setHexTerrain(q, r, type) / getHexTerrain(q, r) / generateRandomTerrain()", "Per-hex terrain."],
  ["getHexYields / getHexMovementCost / isHexPassable", "Terrain-derived attributes."],
  ["setHexData(q, r, data) / getHexData / clearHexData", "Arbitrary per-hex data."],
  ["hexDistance(q1, r1, q2, r2) / reset() / fillRandom()", "Distance, reset view, demo fill."],
  ["on(event, cb) / off(event, cb)", "Subscribe to select, zoom, pan."],
];

const events: [string, string][] = [
  ["select", "A hex was clicked; payload is the hex (with q, r)."],
  ["zoom", "Zoom changed; payload { scale }."],
  ["pan", "Pan changed; payload { x, y }."],
];
</script>

<template>
  <DocsLayout>
    <section id="vd-hex">
      <h5 class="demo-title"><i class="ph ph-hexagon"></i>Hex Grid</h5>
      <p class="vd-mb-8">
        <strong>Vanduo Hex Grid</strong> is a standalone, canvas-rendered axial hex
        grid, installed separately from the framework. Pan, zoom, select hexes, and
        attach terrain or custom data. It reads Vanduo theme tokens, ships a pure
        <code>@vanduo-oss/hex-grid/hex-math</code> subexport, and an optional Vue 3
        binding (<code>@vanduo-oss/hex-grid/vue</code>) used here.
      </p>

      <div class="vd-card demo-card vd-mb-6">
        <div class="vd-card-header"><h6><i class="ph ph-hexagon"></i> Grid</h6></div>
        <div class="vd-card-body">
          <div style="height: 420px;">
            <VdHexGrid :size="30" :width="15" :height="10" />
          </div>
        </div>
      </div>

      <div class="vd-card vd-card-glow demo-card">
        <div class="vd-card-header">
          <h6><i class="ph ph-list-dashes mr-2" style="color: var(--vd-color-primary);"></i>API Reference</h6>
        </div>
        <div class="vd-card-body">
          <h4>Install</h4>
          <DocCodeSnippet :shell="installShell" />

          <h4 class="vd-mt-6">Usage</h4>
          <EngineSwitch>
            <template #vue3><DocCodeSnippet :html="vue3Usage" :default-open="true" /></template>
            <template #vanilla><DocCodeSnippet :js="vanillaJs" :default-open="true" /></template>
          </EngineSwitch>

          <EngineSwitch>
            <template #vue3>
              <h4 class="vd-mt-6">Component API</h4>
              <div class="vd-table-responsive">
                <table class="vd-table vd-table-striped">
                  <thead><tr><th>Prop / event</th><th>Description</th></tr></thead>
                  <tbody>
                    <tr v-for="row in vue3Api" :key="row[0]"><td><code>{{ row[0] }}</code></td><td>{{ row[1] }}</td></tr>
                  </tbody>
                </table>
              </div>
            </template>
            <template #vanilla>
              <h4 class="vd-mt-6">Instance Methods</h4>
              <div class="vd-table-responsive">
                <table class="vd-table vd-table-striped">
                  <thead><tr><th>Method</th><th>Description</th></tr></thead>
                  <tbody>
                    <tr v-for="row in methods" :key="row[0]"><td><code>{{ row[0] }}</code></td><td>{{ row[1] }}</td></tr>
                  </tbody>
                </table>
              </div>
            </template>
          </EngineSwitch>

          <h4 class="vd-mt-6">Events</h4>
          <div class="vd-table-responsive">
            <table class="vd-table vd-table-striped">
              <thead><tr><th>Event</th><th>Description</th></tr></thead>
              <tbody>
                <tr v-for="row in events" :key="row[0]"><td><code>{{ row[0] }}</code></td><td>{{ row[1] }}</td></tr>
              </tbody>
            </table>
          </div>

          <h4 class="vd-mt-6">Pure math (<code>/hex-math</code>)</h4>
          <p class="vd-text-muted vd-mb-3">
            Axial coordinate math and terrain tables, importable without a canvas or the DOM —
            handy for game logic, tests, or Node.
          </p>
          <DocCodeSnippet :js="mathUsage" />
        </div>
      </div>
    </section>
  </DocsLayout>
</template>
