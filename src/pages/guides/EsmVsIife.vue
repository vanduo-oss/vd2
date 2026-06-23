<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">ESM vs IIFE bundles</h1>
        <p class="vd-lead">
          Choosing between the ESM build and the IIFE (UMD) build.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">ESM (default)</h2>
        <p>
          Use the ESM build with modern bundlers (Vite, Webpack 5, Rollup,
          esbuild). Tree-shaking works out of the box; only the components you
          import ship to production.
        </p>
        <p>
          <strong>Use ESM when</strong> you're using a bundler, your app is a
          SPA, or you want minimum bundle size.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">IIFE / UMD</h2>
        <p>
          Use the IIFE build for direct script-tag inclusion (CDN-hosted sites,
          legacy apps, no build pipeline). The bundle exposes a global
          <code>Vanduo</code> object that registers all components.
        </p>
        <p>
          <strong>Use IIFE when</strong> you have no build step or you're
          integrating into an existing site without one.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
