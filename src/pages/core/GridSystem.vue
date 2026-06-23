<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";

const breakpoints = [
  { name: "xs", min: "0", max: "575px" },
  { name: "sm", min: "576px", max: "767px" },
  { name: "md", min: "768px", max: "991px" },
  { name: "lg", min: "992px", max: "1199px" },
  { name: "xl", min: "1200px", max: "1599px" },
  { name: "2xl", min: "1600px", max: "∞" },
];

const cols = 12;
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Grid system</h1>
        <p class="vd-lead">
          12-column responsive grid with 6 breakpoints, Fibonacci gutters, and
          container width tokens.
        </p>
      </header>

      <section id="breakpoints" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Breakpoints</h2>
        <table class="vd-table vd-table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Min</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bp in breakpoints" :key="bp.name">
              <td>
                <code>{{ bp.name }}</code>
              </td>
              <td>{{ bp.min }}</td>
              <td>{{ bp.max }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="columns" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">12-column grid</h2>
        <div
          class="vd-row"
          style="background: var(--vd-bg-secondary); padding: 0.5rem"
        >
          <div
            v-for="n in cols"
            :key="n"
            class="vd-col-1"
            style="
              background: var(--vd-color-primary);
              color: white;
              padding: 0.5rem;
              text-align: center;
            "
          >
            {{ n }}
          </div>
        </div>
        <p class="vd-text-sm vd-muted">
          12 columns, each 1/12 of the container width.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
