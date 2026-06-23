<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdRating from "@/components/VdRating.vue";

const rating = ref(4);
const readonly = ref(3);

const ratingHtml =
  '<div class="vd-rating vd-rating-md">\n  <span class="vd-rating-star is-filled">★</span>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Rating</h1>
        <p class="vd-lead">
          Star rating input with hover preview and readonly mode.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Interactive</h2>
        <VdRating v-model="rating" />
        <p>Selected: {{ rating }}/5</p>
      </section>

      <section id="readonly" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Read-only</h2>
        <VdRating :model-value="readonly" readonly />
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="ratingHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
