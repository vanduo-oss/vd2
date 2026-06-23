<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Lazy loading guide
        </h1>
        <p class="vd-lead">
          Loading only the components you need, when you need them.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          The problem
        </h2>
        <p>
          The framework's full CSS bundle is ~500 KB. If you only
          need 5 components, you don't need 95% of those styles.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          The solution
        </h2>
        <p>
          Each component ships its own CSS file. Import only the
          ones you need:
        </p>
        <ul>
          <li><code>@vanduo-oss/framework/css/components/buttons.css</code></li>
          <li><code>@vanduo-oss/framework/css/components/cards.css</code></li>
          <li><code>@vanduo-oss/framework/css/components/forms.css</code></li>
        </ul>
        <p>
          Tokens (colors, spacing, typography) MUST still be loaded
          once via the framework's <code>vanduo-core.min.css</code>
          file or the equivalent tokens file.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
