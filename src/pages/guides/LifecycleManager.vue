<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Lifecycle manager
        </h1>
        <p class="vd-lead">
          Programmatic lifecycle hooks for the framework's
          JS-driven components.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Available hooks
        </h2>
        <p>
          The framework's JS runtime exposes three lifecycle
          methods:
        </p>
        <ul>
          <li>
            <code>Vanduo.init(rootEl)</code> — initialize all
            JS-driven components within <code>rootEl</code>.
          </li>
          <li>
            <code>Vanduo.refresh(component)</code> — re-initialize
            a single component after dynamic content changes.
          </li>
          <li>
            <code>Vanduo.destroy(component)</code> — clean up
            observers and event listeners.
          </li>
        </ul>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          When to use
        </h2>
        <p>
          Call <code>refresh()</code> after adding dynamic content
          (e.g. inserting a new <code>VdTooltip</code> via JS).
          Call <code>destroy()</code> before removing a component
          from the DOM to prevent memory leaks.
        </p>
        <p>
          vd2's Vue SFCs handle this automatically — you don't
          need to call these methods when using Vd* components.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
