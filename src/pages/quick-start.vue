<script setup lang="ts">
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';

const installCmd = 'npm install @vanduo-oss/framework@1.5.1';
const importLine = "import '@vanduo-oss/framework/css';";
const buttonHtml = '<button class="vd-btn vd-btn-primary">Save</button>';
</script>

<template>
  <article class="vd-stack vd-stack-xl vd-pad-2xl">
    <header class="vd-stack vd-stack-sm">
      <h1 class="vd-h1">
        Quick start
      </h1>
      <p class="vd-muted">
        Get a Vanduo-styled page running in a few minutes.
      </p>
    </header>
    <VdStack gap="md">
      <p>Install the framework CSS and start composing utility classes.</p>
      <VdCodeSnippet
        language="bash"
        :code="installCmd"
      />
      <p>Import the bundle once in your entry file:</p>
      <VdCodeSnippet
        language="ts"
        :code="importLine"
      />
      <p>Then compose framework classes in your markup:</p>
      <VdCodeSnippet
        language="html"
        :code="buttonHtml"
      />
    </VdStack>
  </article>
</template>