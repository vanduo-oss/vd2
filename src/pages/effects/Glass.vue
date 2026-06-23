<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdButton from "@/components/VdButton.vue";

const variants = [
  { name: "Glass", class: "vd-glass" },
  { name: "Glass contrast", class: "vd-glass-contrast" },
  { name: "Glass light", class: "vd-glass-light" },
  { name: "Glass dark", class: "vd-glass-dark" },
];
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Glass</h1>
        <p class="vd-lead">
          Frosted-glass surface effect with backdrop blur and translucent
          backgrounds.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Variants</h2>
        <div
          class="vd-grid"
          style="
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            background: linear-gradient(
              135deg,
              var(--vd-primary-3),
              var(--vd-primary-7)
            );
            padding: 2rem;
            border-radius: 8px;
          "
        >
          <div
            v-for="v in variants"
            :key="v.class"
            :class="v.class"
            style="padding: 1.5rem; border-radius: 8px; min-height: 100px"
          >
            <strong>{{ v.name }}</strong>
            <p class="vd-text-sm">Translucent surface with backdrop blur.</p>
          </div>
        </div>
      </section>

      <section id="in-navbar" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">In use</h2>
        <p>
          The navbar at the top of every page uses
          <code>vd-glass-contrast</code> for its frosted background.
        </p>
        <div class="vd-glass" style="padding: 1rem; border-radius: 8px">
          <VdButton variant="primary"> A button on a glass surface </VdButton>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
