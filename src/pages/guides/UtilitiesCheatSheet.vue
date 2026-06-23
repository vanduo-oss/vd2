<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Utilities cheat sheet</h1>
        <p class="vd-lead">
          Quick reference for spacing, typography, and color utilities.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Spacing</h2>
        <table class="vd-table vd-table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>vd-pad-xs</code></td>
              <td>3px</td>
            </tr>
            <tr>
              <td><code>vd-pad-sm</code></td>
              <td>5px</td>
            </tr>
            <tr>
              <td><code>vd-pad-md</code></td>
              <td>8px</td>
            </tr>
            <tr>
              <td><code>vd-pad-lg</code></td>
              <td>13px</td>
            </tr>
            <tr>
              <td><code>vd-pad-xl</code></td>
              <td>21px</td>
            </tr>
            <tr>
              <td><code>vd-pad-2xl</code></td>
              <td>34px</td>
            </tr>
            <tr>
              <td><code>vd-pad-3xl</code></td>
              <td>55px</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Typography</h2>
        <table class="vd-table vd-table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>vd-text-xs</code></td>
              <td>0.75rem</td>
            </tr>
            <tr>
              <td><code>vd-text-sm</code></td>
              <td>0.875rem</td>
            </tr>
            <tr>
              <td><code>vd-text-base</code></td>
              <td>1rem</td>
            </tr>
            <tr>
              <td><code>vd-text-lg</code></td>
              <td>1.125rem</td>
            </tr>
            <tr>
              <td><code>vd-text-xl</code></td>
              <td>1.3125rem</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Color utilities</h2>
        <table class="vd-table vd-table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>vd-muted</code></td>
              <td>Subdued text color</td>
            </tr>
            <tr>
              <td><code>vd-bg-primary</code></td>
              <td>Primary background</td>
            </tr>
            <tr>
              <td><code>vd-text-primary</code></td>
              <td>Primary text color</td>
            </tr>
          </tbody>
        </table>
      </section>
    </VdStack>
  </DocsLayout>
</template>
