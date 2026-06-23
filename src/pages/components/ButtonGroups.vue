<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdButtonGroup from "@/components/VdButtonGroup.vue";
import VdButton from "@/components/VdButton.vue";

const html =
  '<div class="vd-btn-group">\n  <button class="vd-btn vd-btn-primary">Save</button>\n  <button class="vd-btn vd-btn-secondary">Cancel</button>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Button group</h1>
        <p class="vd-lead">
          Group related buttons into a single horizontal or vertical toolbar.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <VdButtonGroup>
          <VdButton variant="primary"> Save </VdButton>
          <VdButton variant="secondary"> Cancel </VdButton>
          <VdButton variant="ghost"> Help </VdButton>
        </VdButtonGroup>
      </section>

      <section id="sizes" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Sizes</h2>
        <div class="vd-stack vd-stack-sm">
          <VdButtonGroup size="sm">
            <VdButton variant="primary"> Small </VdButton>
            <VdButton variant="primary"> Group </VdButton>
          </VdButtonGroup>
          <VdButtonGroup>
            <VdButton variant="primary"> Default </VdButton>
            <VdButton variant="primary"> Group </VdButton>
          </VdButtonGroup>
          <VdButtonGroup size="lg">
            <VdButton variant="primary"> Large </VdButton>
            <VdButton variant="primary"> Group </VdButton>
          </VdButtonGroup>
        </div>
      </section>

      <section id="vertical" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Vertical</h2>
        <VdButtonGroup vertical>
          <VdButton variant="ghost"> Top </VdButton>
          <VdButton variant="ghost"> Middle </VdButton>
          <VdButton variant="ghost"> Bottom </VdButton>
        </VdButtonGroup>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="html" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
