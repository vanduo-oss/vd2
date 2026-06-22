<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCard from '@/components/VdCard.vue';
import VdButton from '@/components/VdButton.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const cardHtml = '<section class="vd-card"><div class="vd-card-body">Hello</div></section>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Card
        </h1>
        <p class="vd-lead">
          Container with optional header, body, and footer.
        </p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Example
        </h2>
        <VdCard>
          <template #header>
            <h3 class="vd-h3">
              Project name
            </h3>
          </template>
          <p>A short description of what this card represents.</p>
          <template #footer>
            <div class="vd-inline vd-inline-md">
              <VdButton variant="primary">
                Open
              </VdButton>
              <VdButton variant="ghost">
                Details
              </VdButton>
            </div>
          </template>
        </VdCard>
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="cardHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>