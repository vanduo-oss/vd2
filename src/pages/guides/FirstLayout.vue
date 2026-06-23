<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const html = '<header class="vd-navbar">\n  <nav class="vd-navbar-container vd-container">\n    <a class="vd-navbar-brand" href="/">Brand</a>\n    <ul class="vd-navbar-nav">\n      <li><a class="vd-nav-link" href="/about">About</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main class="vd-container vd-pad-2xl">\n  <h1>Hello Vanduo</h1>\n  <p>Your first page.</p>\n</main>\n\n<footer class="vd-footer">\n  <div class="vd-container vd-footer-container">\n    <p>© 2026</p>\n  </div>\n</footer>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Your first layout
        </h1>
        <p class="vd-lead">
          A complete page layout in three sections: navbar, main,
          footer.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          The three sections
        </h2>
        <p>
          Every Vanduo page is a navbar, a main, and a footer. The
          framework ships CSS for each:
        </p>
        <VdCodeSnippet
          language="html"
          :code="html"
        />
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          What's happening
        </h2>
        <ul>
          <li>
            <code>vd-navbar</code> is the outer header with
            <code>position: sticky; top: 0;</code> built in.
          </li>
          <li>
            <code>vd-container</code> applies max-width and
            centered layout.
          </li>
          <li>
            <code>vd-pad-2xl</code> is one of the framework's
            padding utilities (3.4375rem = 34px on all sides).
          </li>
          <li>
            <code>vd-footer</code> has a top border and themed
            background by default.
          </li>
        </ul>
      </section>
    </VdStack>
  </DocsLayout>
</template>
