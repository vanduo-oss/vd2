<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Vanduo ecosystem</h1>
        <p class="vd-lead">Companion projects, tools, and integrations.</p>
      </header>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">@vanduo-oss/framework</h2>
        <p>The core CSS + JS framework. This is what vd2 demos.</p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">@vanduo-oss/docs</h2>
        <p>
          The marketing site + documentation site that originally demos every
          framework primitive. vd2 is a Vue-native rewrite of
          <code>@vanduo-oss/docs</code>.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">vd2</h2>
        <p>
          This project — a Vue 3 + vite-ssg documentation site for
          <code>@vanduo-oss/framework</code>. Vue-native reimplementations of
          the framework's JS components; CSS classes consumed from the framework
          bundle.
        </p>
      </section>

      <section class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Vanduo CLI</h2>
        <p>
          A future companion CLI for scaffolding new Vanduo projects. Currently
          in design.
        </p>
      </section>
    </VdStack>
  </DocsLayout>
</template>
