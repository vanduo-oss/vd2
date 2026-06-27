<script setup lang="ts">
import { reactive } from "vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";

const removed = reactive<Record<string, boolean>>({});
const remove = (id: string): void => {
  removed[id] = true;
};

const usageHtml = `<!-- Chip Variants -->
<span class="vd-chip vd-chip-primary">Primary</span>
<span class="vd-chip vd-chip-success">Success</span>
<span class="vd-chip vd-chip-warning">Warning</span>
<span class="vd-chip vd-chip-error">Error</span>
<span class="vd-chip vd-chip-info">Info</span>

<!-- Dismissible Chip -->
<span class="vd-chip vd-chip-primary vd-chip-dismissible">
  Removable
  <button type="button" class="vd-chip-close" aria-label="Remove"></button>
</span>`;

const apiRows: [string, string, string][] = [
  [
    ".vd-chip",
    "Base component class required for all Vanduo chips and tags.",
    "Component",
  ],
  [
    ".vd-chip-[variant]",
    "Solid color modifier (e.g., -primary, -secondary, -success, -warning, -error, -info).",
    "Modifier",
  ],
  [
    ".vd-chip-outline-[variant]",
    "Outline color modifier featuring a transparent background with colored border.",
    "Modifier",
  ],
  [
    ".vd-chip-[size]",
    "Size modifier class (e.g., -sm for small, -lg for large). Defaults to medium if omitted.",
    "Modifier",
  ],
  [
    ".vd-chip-dismissible",
    "Modifier class that adjusts right padding to accommodate a close button.",
    "Modifier",
  ],
  [
    ".vd-chip-close",
    "Component class for the 'X' close icon inside a dismissible chip.",
    "Sub-component",
  ],
];
</script>

<template>
  <section id="chips">
    <h5 class="demo-title"><i class="ph ph-tag"></i>Chips &amp; Tags</h5>

    <div class="vd-row">
      <div class="vd-col-12 vd-col-md-6">
        <div class="vd-card vd-card-glow demo-card">
          <div class="vd-card-header"><h6>Chip Variants</h6></div>
          <div class="vd-card-body">
            <span class="vd-chip">Default</span>
            <span class="vd-chip vd-chip-primary">Primary</span>
            <span class="vd-chip vd-chip-secondary">Secondary</span>
            <span class="vd-chip vd-chip-success">Success</span>
            <span class="vd-chip vd-chip-warning">Warning</span>
            <span class="vd-chip vd-chip-error">Error</span>
            <span class="vd-chip vd-chip-info">Info</span>
          </div>
        </div>
      </div>

      <div class="vd-col-12 vd-col-md-6">
        <div class="vd-card vd-card-glow demo-card">
          <div class="vd-card-header"><h6>Chip Sizes &amp; Outline</h6></div>
          <div class="vd-card-body">
            <span class="vd-chip vd-chip-sm vd-chip-primary">Small</span>
            <span class="vd-chip vd-chip-primary">Default</span>
            <span class="vd-chip vd-chip-lg vd-chip-primary">Large</span>
            <br /><br />
            <span class="vd-chip vd-chip-outline vd-chip-primary"
              >Outline Primary</span
            >
            <span class="vd-chip vd-chip-outline vd-chip-success"
              >Outline Success</span
            >
            <span class="vd-chip vd-chip-outline vd-chip-error"
              >Outline Error</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="vd-row">
      <div class="vd-col-12">
        <div class="vd-card vd-card-glow demo-card">
          <div class="vd-card-header"><h6>Dismissible Chips</h6></div>
          <div class="vd-card-body">
            <span
              v-if="!removed.a"
              class="vd-chip vd-chip-primary vd-chip-dismissible"
            >
              Removable
              <button
                type="button"
                class="vd-chip-close"
                aria-label="Remove"
                @click="remove('a')"
              ></button>
            </span>
            <span
              v-if="!removed.b"
              class="vd-chip vd-chip-success vd-chip-dismissible"
            >
              Tag
              <button
                type="button"
                class="vd-chip-close"
                aria-label="Remove"
                @click="remove('b')"
              ></button>
            </span>
            <span
              v-if="!removed.c"
              class="vd-chip vd-chip-info vd-chip-dismissible"
            >
              Category
              <button
                type="button"
                class="vd-chip-close"
                aria-label="Remove"
                @click="remove('c')"
              ></button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="vd-row">
      <div class="vd-col-12">
        <div class="vd-card vd-card-glow demo-card">
          <div class="vd-card-header"><h6>Usage</h6></div>
          <div class="vd-card-body">
            <DocCodeSnippet :html="usageHtml" />
          </div>
        </div>
      </div>
    </div>

    <h4 id="api" class="docs-heading">API Reference</h4>
    <div class="vd-table-responsive" style="margin-bottom: 3rem">
      <table class="vd-table vd-table-hover">
        <thead>
          <tr>
            <th style="width: 25%">Class Name</th>
            <th style="width: 55%">Description</th>
            <th style="width: 20%">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in apiRows" :key="row[0]">
            <td>
              <code>{{ row[0] }}</code>
            </td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
