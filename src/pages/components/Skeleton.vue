<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdSkeleton from '@/components/VdSkeleton.vue';

const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const basicHtml = '<div class="vd-skeleton vd-skeleton-text"></div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Skeleton
        </h1>
        <p class="vd-lead">
          Loading placeholders that mirror content shape while data
          fetches.
        </p>
      </header>

      <section
        id="text"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Text
        </h2>
        <div class="vd-stack vd-stack-sm">
          <VdSkeleton
            v-for="size in sizes"
            :key="size"
            :size="size"
            shape="text"
          />
        </div>
      </section>

      <section
        id="multi-line"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Multi-line
        </h2>
        <div style="max-width: 400px;">
          <VdSkeleton
            :lines="3"
            shape="text"
          />
        </div>
      </section>

      <section
        id="circle"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Circle
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdSkeleton
            v-for="size in sizes"
            :key="size"
            :size="size"
            shape="circle"
          />
        </div>
      </section>

      <section
        id="card"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Card
        </h2>
        <div
          style="max-width: 400px;"
        >
          <VdSkeleton
            shape="card"
            size="md"
          />
        </div>
      </section>

      <section
        id="button"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Button
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdSkeleton
            v-for="size in sizes"
            :key="size"
            :size="size"
            shape="button"
          />
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
          :code="basicHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
