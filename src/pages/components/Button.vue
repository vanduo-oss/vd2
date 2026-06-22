<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import DocSectionNav from '@/layout/DocSectionNav.vue';
import VdButton from '@/components/VdButton.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const sections = [
  { id: 'examples', title: 'Examples' },
  { id: 'sizes', title: 'Sizes' },
  { id: 'usage', title: 'Usage' },
];
const buttonHtml = '<button class="vd-btn vd-btn-primary">Save</button>';
</script>

<template>
  <DocsLayout>
    <template #default>
      <VdStack gap="xl">
        <header>
          <h1 class="vd-h1">
            Button
          </h1>
          <p class="vd-lead">
            Trigger actions with primary, secondary, ghost, or danger variants.
          </p>
        </header>
        <section
          id="examples"
          class="vd-stack vd-stack-md"
        >
          <h2 class="vd-h2">
            Examples
          </h2>
          <div class="vd-inline vd-inline-md">
            <VdButton variant="primary">
              Save
            </VdButton>
            <VdButton variant="secondary">
              Cancel
            </VdButton>
            <VdButton variant="ghost">
              Learn more
            </VdButton>
            <VdButton variant="danger">
              Delete
            </VdButton>
          </div>
        </section>
        <section
          id="sizes"
          class="vd-stack vd-stack-md"
        >
          <h2 class="vd-h2">
            Sizes
          </h2>
          <div class="vd-inline vd-inline-md">
            <VdButton size="sm">
              Small
            </VdButton>
            <VdButton size="md">
              Medium
            </VdButton>
            <VdButton size="lg">
              Large
            </VdButton>
          </div>
        </section>
        <section
          id="usage"
          class="vd-stack vd-stack-md"
        >
          <h2 class="vd-h2">
            Usage
          </h2>
          <VdCodeSnippet
            language="html"
            :code="buttonHtml"
          />
        </section>
        <DocSectionNav :sections="sections" />
      </VdStack>
    </template>
  </DocsLayout>
</template>