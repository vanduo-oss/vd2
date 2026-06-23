<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";

const snippetHtml =
  '<figure class="vd-code-snippet"><pre class="vd-code-snippet-pre">…</pre></figure>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Code snippet</h1>
        <p class="vd-lead">Fenced code blocks with a one-click copy button.</p>
      </header>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Example</h2>
        <VdCodeSnippet
          language="bash"
          :code="`pnpm install @vanduo-oss/framework`"
        />
        <VdCodeSnippet
          language="ts"
          :code="`import '@vanduo-oss/framework/css';`"
        />
      </section>
      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="snippetHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
