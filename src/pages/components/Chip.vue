<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdChip from "@/components/VdChip.vue";

const variants = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
] as const;
const sizes = ["sm", "md", "lg"] as const;

const basicHtml = '<span class="vd-chip vd-chip-primary">Primary</span>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Chip</h1>
        <p class="vd-lead">
          Compact labels for tags, status, and removable tokens.
        </p>
      </header>

      <section id="variants" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Variants</h2>
        <div class="vd-inline vd-inline-md">
          <VdChip v-for="variant in variants" :key="variant" :variant="variant">
            {{ variant }}
          </VdChip>
        </div>
      </section>

      <section id="sizes" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Sizes</h2>
        <div class="vd-inline vd-inline-md">
          <VdChip
            v-for="size in sizes"
            :key="size"
            :size="size"
            :variant="'primary'"
          >
            {{ size }}
          </VdChip>
        </div>
      </section>

      <section id="outline" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Outline</h2>
        <div class="vd-inline vd-inline-md">
          <VdChip
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            outline
          >
            {{ variant }}
          </VdChip>
        </div>
      </section>

      <section id="dismissible" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Dismissible</h2>
        <div class="vd-inline vd-inline-md">
          <VdChip
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            dismissible
          >
            {{ variant }}
          </VdChip>
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="basicHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
