<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdSticky from "@/components/VdSticky.vue";
import VdIcon from "@/components/VdIcon.vue";

const stickyHtml =
  '<div class="vd-sticky" data-vd-affix data-top-offset="0">\n  <p>Pinned to the top while scrolling.</p>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Sticky</h1>
        <p class="vd-lead">
          Pin elements to the top of the viewport while scrolling, with a
          stuck-state shadow.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Demo</h2>
        <p>Scroll the page to see the sticky header pin to the top.</p>
        <VdSticky :top-offset="0">
          <div
            class="vd-card vd-pad-md"
            style="background: var(--vd-color-primary); color: white"
          >
            <VdIcon name="bookmark-simple" />
            I stick to the top.
          </div>
        </VdSticky>
        <div
          style="
            height: 800px;
            background: var(--vd-bg-secondary);
            padding: 1rem;
          "
        >
          <p>Scroll past this content to see the sticky effect.</p>
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="stickyHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
