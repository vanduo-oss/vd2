<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const page = ref(1);

const paginationHtml =
  '<nav class="vd-pagination">\n  <button class="vd-pagination-prev">‹</button>\n</nav>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Pagination</h1>
        <p class="vd-lead">
          Page-by-page navigation for lists, tables, and search results.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <nav class="vd-pagination" aria-label="Pagination">
          <button
            type="button"
            class="vd-pagination-prev"
            :disabled="page <= 1"
            @click="page = Math.max(1, page - 1)"
          >
            ‹
          </button>
          <button
            v-for="n in 5"
            :key="n"
            type="button"
            class="vd-pagination-link"
            :class="{ 'is-active': n === page }"
            @click="page = n"
          >
            {{ n }}
          </button>
          <button
            type="button"
            class="vd-pagination-next"
            :disabled="page >= 5"
            @click="page = Math.min(5, page + 1)"
          >
            ›
          </button>
        </nav>
        <p>Page: {{ page }}</p>
      </section>

      <section id="ellipsis" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">With ellipsis</h2>
        <nav class="vd-pagination" aria-label="Pagination">
          <button
            type="button"
            class="vd-pagination-prev"
            :disabled="page <= 1"
            @click="page = Math.max(1, page - 1)"
          >
            ‹
          </button>
          <button
            type="button"
            class="vd-pagination-link"
            :class="{ 'is-active': page === 1 }"
            @click="page = 1"
          >
            1
          </button>
          <span class="vd-pagination-ellipsis" aria-hidden="true">…</span>
          <button
            type="button"
            class="vd-pagination-link"
            :class="{ 'is-active': page === 3 }"
            @click="page = 3"
          >
            3
          </button>
          <button
            type="button"
            class="vd-pagination-link"
            :class="{ 'is-active': page === 4 }"
            @click="page = 4"
          >
            4
          </button>
          <button
            type="button"
            class="vd-pagination-link"
            :class="{ 'is-active': page === 5 }"
            @click="page = 5"
          >
            5
          </button>
          <span class="vd-pagination-ellipsis" aria-hidden="true">…</span>
          <button type="button" class="vd-pagination-link" @click="page = 20">
            20
          </button>
          <button
            type="button"
            class="vd-pagination-next"
            :disabled="page >= 20"
            @click="page = Math.min(20, page + 1)"
          >
            ›
          </button>
        </nav>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="paginationHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
