<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdButton from "@/components/VdButton.vue";
import VdCard from "@/components/VdCard.vue";

const code = `mkdir my-vanduo-app
cd my-vanduo-app
npm install @vanduo-oss/framework
cat > index.html <<EOF
<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="./node_modules/@vanduo-oss/framework/dist/vanduo.min.css">
</head>
<body>
  <button class="vd-btn vd-btn-primary">Hello Vanduo</button>
</body>
</html>
EOF`;
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Getting started from zero</h1>
        <p class="vd-lead">
          Build your first Vanduo-styled page in 60 lines of HTML — no
          JavaScript, no build tools.
        </p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">What you'll build</h2>
        <p>By the end of this guide, you'll have a complete page with:</p>
        <ul>
          <li>✓ A responsive navbar with logo and links</li>
          <li>✓ A hero section with text and a call-to-action button</li>
          <li>✓ A card grid showing content in columns</li>
          <li>✓ A footer at the bottom</li>
          <li>✓ Dark/light theme toggle built in</li>
        </ul>
        <p class="vd-text-sm vd-muted">
          All of this in about 60 lines of HTML — no CSS to write, no JavaScript
          to configure.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Step 1: create your project folder</h2>
        <p>Open a terminal and run:</p>
        <VdCodeSnippet language="bash" :code="code" />
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Step 2: open in a browser</h2>
        <p>
          That's it. The framework's CSS is purely declarative — open the file
          in any modern browser and the button renders with the primary variant
          color, hover state, and focus ring.
        </p>
        <VdCard>
          <VdButton variant="primary"> Hello Vanduo </VdButton>
        </VdCard>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Next steps</h2>
        <ul>
          <li>
            Read the <a href="/quick-start">Quick start</a> for a deeper tour.
          </li>
          <li>
            Browse the <a href="/docs-landing">Documentation</a> for component
            references.
          </li>
          <li>
            Try the <a href="/components/button">Button</a> component demos.
          </li>
        </ul>
      </section>
    </VdStack>
  </DocsLayout>
</template>
