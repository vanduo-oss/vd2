<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdWaypoint from "@/components/VdWaypoint.vue";

const markupHtml =
  '<div data-vd-waypoint>\n  <nav class="vd-waypoint-nav vd-waypoint-border">\n    <a href="#intro">Introduction</a>\n    <a href="#setup">Setup</a>\n  </nav>\n  <div id="intro">Introduction content</div>\n  <div id="setup">Setup content</div>\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Waypoint (Scrollspy)</h1>
        <p class="vd-lead">
          Highlight navigation links as the user scrolls through corresponding
          content sections.
        </p>
      </header>

      <section id="demo" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Demo</h2>
        <div
          style="
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 1rem;
            min-height: 400px;
          "
        >
          <nav
            class="vd-waypoint-nav vd-waypoint-border"
            style="position: sticky; top: 80px; align-self: start"
            aria-label="Scrollspy sections"
          >
            <a href="#wp-intro" class="is-active">Introduction</a>
            <a href="#wp-setup">Setup</a>
            <a href="#wp-usage">Usage</a>
            <a href="#wp-api">API</a>
          </nav>
          <VdWaypoint>
            <div style="height: 300px; padding: 1rem">
              <h3 id="wp-intro">Introduction</h3>
              <p>
                Waypoint automatically highlights navigation links as the user
                scrolls through corresponding content sections.
              </p>
            </div>
            <div style="height: 300px; padding: 1rem">
              <h3 id="wp-setup">Setup</h3>
              <p>Add the wrapper element with sections that have IDs.</p>
            </div>
            <div style="height: 300px; padding: 1rem">
              <h3 id="wp-usage">Usage</h3>
              <p>
                Waypoint works with both window scroll and overflow containers.
              </p>
            </div>
            <div style="height: 300px; padding: 1rem">
              <h3 id="wp-api">API</h3>
              <p>
                Refresh and destroy methods are available on the underlying
                observer.
              </p>
            </div>
          </VdWaypoint>
        </div>
      </section>

      <section id="markup" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Markup</h2>
        <VdCodeSnippet language="html" :code="markupHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
