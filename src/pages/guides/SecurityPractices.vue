<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Security practices</h1>
        <p class="vd-lead">
          XSS prevention, CSP-friendly patterns, and safe SFC authoring.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Avoid v-html with user input</h2>
        <p>
          Never pass user-controlled content to
          <code>v-html</code>. Sanitize with a library like DOMPurify or render
          the content as text.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Use a strict CSP</h2>
        <p>
          The framework's styles are class-based and don't require inline
          styles. Set
          <code>style-src 'self' 'nonce-...'</code> in your
          Content-Security-Policy header.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Escape user content in attributes</h2>
        <p>
          Vue automatically escapes interpolated content (<code>{{
            "{userInput}"
          }}</code
          >). But v-bind to attributes is also escaped. The only unsafe path is
          <code>v-html</code> and <code>v-bind:href</code> with untrusted URLs.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
