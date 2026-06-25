<script setup lang="ts">
// The changelog is ~4,000 lines of static, hand-written release notes with no
// framework JS behaviour. Rendering the exact legacy body produces an identical
// DOM (its .changelog-header / .version-card / .change-item styles already live
// in src/styles/docs.css), so it is imported verbatim rather than re-typed into
// template syntax. Trusted first-party content → v-html is safe here.
import content from "./changelog-content.html?raw";
</script>

<template>
  <section id="changelog" v-html="content"></section>
</template>
