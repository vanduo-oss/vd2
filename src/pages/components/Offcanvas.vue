<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdOffcanvas from '@/components/VdOffcanvas.vue';
import VdButton from '@/components/VdButton.vue';

const leftOpen = ref(false);
const rightOpen = ref(false);
const topOpen = ref(false);
const bottomOpen = ref(false);

const triggerHtml = '<button class="vd-btn vd-btn-primary" data-offcanvas-toggle="#demo-offcanvas">\n  Open Off-canvas\n</button>';

const markupHtml = '<aside class="vd-offcanvas vd-offcanvas-right is-open" id="demo-offcanvas">\n  <div class="vd-sidenav-header">\n    <h3>Off-canvas</h3>\n    <button class="vd-sidenav-close">&times;</button>\n  </div>\n  <div class="vd-sidenav-body">\n    <p>Panel content.</p>\n  </div>\n</aside>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Off-canvas
        </h1>
        <p class="vd-lead">
          Slide-in panels anchored to any edge of the viewport.
        </p>
      </header>

      <section
        id="placements"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Placements
        </h2>
        <div class="vd-inline vd-inline-md">
          <VdButton
            variant="primary"
            @click="leftOpen = true"
          >
            Left
          </VdButton>
          <VdButton
            variant="secondary"
            @click="rightOpen = true"
          >
            Right
          </VdButton>
          <VdButton
            variant="ghost"
            @click="topOpen = true"
          >
            Top
          </VdButton>
          <VdButton
            variant="ghost"
            @click="bottomOpen = true"
          >
            Bottom
          </VdButton>
        </div>

        <VdOffcanvas
          v-model="leftOpen"
          placement="left"
          title="Left panel"
        >
          <p>Slides in from the left.</p>
        </VdOffcanvas>
        <VdOffcanvas
          v-model="rightOpen"
          placement="right"
          title="Right panel"
        >
          <p>Slides in from the right.</p>
        </VdOffcanvas>
        <VdOffcanvas
          v-model="topOpen"
          placement="top"
          title="Top panel"
        >
          <p>Slides down from the top.</p>
        </VdOffcanvas>
        <VdOffcanvas
          v-model="bottomOpen"
          placement="bottom"
          title="Bottom panel"
        >
          <p>Slides up from the bottom.</p>
        </VdOffcanvas>
      </section>

      <section
        id="trigger"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Trigger
        </h2>
        <VdCodeSnippet
          language="html"
          :code="triggerHtml"
        />
      </section>

      <section
        id="markup"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Markup
        </h2>
        <VdCodeSnippet
          language="html"
          :code="markupHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
