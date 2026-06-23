<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Parallax</h1>
        <p class="vd-lead">
          Scroll-driven background parallax for hero sections and media blocks.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Demo</h2>
        <div
          class="vd-parallax"
          style="
            height: 300px;
            background: linear-gradient(
              135deg,
              var(--vd-color-primary),
              var(--vd-primary-9)
            );
            border-radius: 8px;
            position: relative;
            overflow: hidden;
          "
        >
          <div
            class="vd-parallax-bg"
            style="
              position: absolute;
              inset: 0;
              background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.3),
                transparent
              );
            "
          />
          <div
            class="vd-parallax-content"
            style="
              position: relative;
              padding: 2rem;
              color: white;
              text-align: center;
            "
          >
            <h2 style="color: white">Scroll to see parallax</h2>
            <p>Background moves at a different rate than foreground.</p>
          </div>
        </div>
      </section>
    </VdStack>
  </DocsLayout>
</template>
