<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdTree from "@/components/VdTree.vue";

const tree = [
  {
    id: 1,
    label: "src",
    children: [
      {
        id: 2,
        label: "components",
        children: [
          { id: 3, label: "Button.vue" },
          { id: 4, label: "Card.vue" },
          { id: 5, label: "Modal.vue" },
        ],
      },
      {
        id: 6,
        label: "composables",
        children: [
          { id: 7, label: "useToast.ts" },
          { id: 8, label: "useTheme.ts" },
        ],
      },
      { id: 9, label: "main.ts" },
    ],
  },
  { id: 10, label: "package.json" },
  { id: 11, label: "README.md" },
];

const treeHtml =
  '<ul class="vd-tree">\n  <li class="vd-tree-node">\n    <div class="vd-tree-node-content">\n      <span class="vd-tree-label">src</span>\n    </div>\n  </li>\n</ul>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Tree</h1>
        <p class="vd-lead">
          Hierarchical list with expand/collapse and optional checkboxes.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <div class="vd-card" style="padding: 1rem">
          <VdTree :nodes="tree" />
        </div>
      </section>

      <section id="with-checkboxes" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">With checkboxes</h2>
        <div class="vd-card" style="padding: 1rem">
          <VdTree :nodes="tree" checkbox />
        </div>
      </section>

      <section id="with-lines" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">With connector lines</h2>
        <div class="vd-card" style="padding: 1rem">
          <VdTree :nodes="tree" lines />
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="treeHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
