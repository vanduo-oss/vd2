<script setup lang="ts">
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <article class="vd-stack vd-stack-xl vd-pad-2xl">
    <header class="vd-stack vd-stack-sm">
      <h1 class="vd-h1">About Vanduo</h1>
      <p class="vd-lead vd-muted">
        A framework, a community, a design language.
      </p>
    </header>
    <VdStack gap="md">
      <p>
        Vanduo is a zero-dependency CSS and JS framework built on a Fibonacci /
        Golden Ratio design system, with Open Color integration and first-class
        dark mode. It powers static sites and SPAs alike, ships as a single CSS
        file plus optional vanilla JS, and is now available as a Vue 3 docs site
        (this one) on top of the same CSS layer.
      </p>
      <p>
        vd2 is the Vue 3 recreation of the docs. It consumes only the CSS bundle
        from <code>@vanduo-oss/framework</code> and ships its own Vue-native
        components for every docs surface — no coupling to the framework
        runtime.
      </p>
    </VdStack>
  </article>
</template>
