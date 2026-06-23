<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdSidenav from "@/components/VdSidenav.vue";
import VdIcon from "@/components/VdIcon.vue";

const leftOpen = ref(false);
const rightOpen = ref(false);

const triggerHtml =
  '<button class="vd-btn vd-btn-primary" data-sidenav-toggle="#demo-sidenav">\n  <i class="ph ph-sidebar"></i> Open Sidenav\n</button>';

const markupHtml =
  '<aside class="vd-sidenav" id="demo-sidenav">\n  <div class="vd-sidenav-header">\n    <h3 class="vd-sidenav-title">Menu</h3>\n    <button class="vd-sidenav-close" aria-label="Close">&times;</button>\n  </div>\n  <div class="vd-sidenav-body">\n    <ul class="vd-sidenav-nav">\n      <li class="vd-sidenav-item active">\n        <a class="vd-sidenav-link" href="#">Home</a>\n      </li>\n    </ul>\n  </div>\n</aside>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Sidenav</h1>
        <p class="vd-lead">
          Slide-out side drawers with left, right, top, and bottom placements.
        </p>
      </header>

      <section id="left" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Left placement</h2>
        <div class="vd-inline vd-inline-md">
          <button
            type="button"
            class="vd-btn vd-btn-primary"
            @click="leftOpen = true"
          >
            <VdIcon name="sidebar" />
            Open Sidenav
          </button>
        </div>
        <VdSidenav v-model="leftOpen" placement="left" title="Menu">
          <ul class="vd-sidenav-nav">
            <li class="vd-sidenav-item is-active">
              <a class="vd-sidenav-link" href="#">
                <VdIcon name="house" /> Home
              </a>
            </li>
            <li class="vd-sidenav-item">
              <a class="vd-sidenav-link" href="#">
                <VdIcon name="user" /> Profile
              </a>
            </li>
            <li class="vd-sidenav-item">
              <a class="vd-sidenav-link" href="#">
                <VdIcon name="gear" /> Settings
              </a>
            </li>
          </ul>
        </VdSidenav>
      </section>

      <section id="right" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Right placement</h2>
        <div class="vd-inline vd-inline-md">
          <button
            type="button"
            class="vd-btn vd-btn-secondary"
            @click="rightOpen = true"
          >
            <VdIcon name="sidebar" />
            Open right
          </button>
        </div>
        <VdSidenav v-model="rightOpen" placement="right" title="Filters">
          <p>Filter content goes here.</p>
        </VdSidenav>
      </section>

      <section id="trigger" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Trigger button</h2>
        <VdCodeSnippet language="html" :code="triggerHtml" />
      </section>

      <section id="markup" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Markup</h2>
        <VdCodeSnippet language="html" :code="markupHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
