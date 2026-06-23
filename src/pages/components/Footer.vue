<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdFooter from '@/layout/VdFooter.vue';

const sections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Docs', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

const basicHtml = '<footer class="vd-footer">\n  <div class="vd-container vd-footer-container">\n    <p>© 2026 vanduo-oss — MIT license</p>\n  </div>\n</footer>';

const columnsHtml = '<footer class="vd-footer">\n  <div class="vd-container vd-footer-container">\n    <div class="vd-footer-columns">\n      <div class="vd-footer-section">\n        <h4 class="vd-footer-heading">Product</h4>\n        <ul class="vd-footer-list">\n          <li class="vd-footer-list-item">\n            <a class="vd-footer-link" href="#">Features</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Footer
        </h1>
        <p class="vd-lead">
          Branded multi-column footers with list links and a copyright
          row.
        </p>
      </header>

      <section
        id="multi-column"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Multi-column demo
        </h2>
        <div
          class="vd-card"
          style="overflow: hidden;"
        >
          <VdFooter :sections="sections" />
        </div>
      </section>

      <section
        id="basic"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Basic markup
        </h2>
        <VdCodeSnippet
          language="html"
          :code="basicHtml"
        />
      </section>

      <section
        id="columns"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Columns markup
        </h2>
        <VdCodeSnippet
          language="html"
          :code="columnsHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
