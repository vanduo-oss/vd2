<script setup lang="ts">
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Fibonacci vs standard scale
        </h1>
        <p class="vd-lead">
          Why the framework's spacing scale is Fibonacci-based
          (3, 5, 8, 13, 21, 34, 55, 89) instead of the standard
          Tailwind scale (4, 8, 12, 16, 20, 24).
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Why Fibonacci
        </h2>
        <p>
          The Fibonacci sequence (each number is the sum of the
          previous two) produces a visually pleasing rhythm because
          consecutive terms approach the golden ratio (~1.618).
          Designs that use Fibonacci spacing feel naturally
          proportional.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">
          Tokens
        </h2>
        <p>The framework exposes Fibonacci tokens as CSS variables:</p>
        <ul>
          <li><code>--vd-space-fib-3</code> = 0.3125rem (3px)</li>
          <li><code>--vd-space-fib-5</code> = 0.5rem (5px)</li>
          <li><code>--vd-space-fib-8</code> = 0.8125rem (8px)</li>
          <li><code>--vd-space-fib-13</code> = 1.3125rem (13px)</li>
          <li><code>--vd-space-fib-21</code> = 2.125rem (21px)</li>
          <li><code>--vd-space-fib-34</code> = 3.4375rem (34px)</li>
          <li><code>--vd-space-fib-55</code> = 5.5625rem (55px)</li>
        </ul>
      </section>
    </VdStack>
  </DocsLayout>
</template>
