<script setup lang="ts">
import { ref } from 'vue';

export interface TreeNode {
  id: string | number;
  label: string;
  children?: TreeNode[];
}

interface Props {
  nodes: readonly TreeNode[];
  lines?: boolean;
  checkbox?: boolean;
}

const expanded = ref<Set<string | number>>(new Set());
const checked = ref<Set<string | number>>(new Set());

defineProps<Props>();

const toggle = (id: string | number): void => {
  if (expanded.value.has(id)) {
    expanded.value.delete(id);
  } else {
    expanded.value.add(id);
  }
};

const allChildren = (n: TreeNode): TreeNode[] => {
  const out: TreeNode[] = [n];
  if (n.children) for (const c of n.children) out.push(...allChildren(c));
  return out;
};

const toggleCheck = (n: TreeNode, e: Event): void => {
  const checked_ = (e.target as HTMLInputElement).checked;
  const ids = allChildren(n).map((c) => c.id);
  if (checked_) {
    for (const id of ids) checked.value.add(id);
  } else {
    for (const id of ids) checked.value.delete(id);
  }
};
</script>

<template>
  <ul
    class="vd-tree"
    :class="{ 'vd-tree-lines': lines }"
    role="tree"
  >
    <li
      v-for="node in nodes"
      :key="node.id"
      class="vd-tree-node"
      role="treeitem"
      :aria-expanded="node.children ? expanded.has(node.id) : undefined"
    >
      <div class="vd-tree-node-content">
        <button
          v-if="node.children && node.children.length > 0"
          type="button"
          class="vd-tree-toggle"
          :aria-label="expanded.has(node.id) ? 'Collapse' : 'Expand'"
          @click="toggle(node.id)"
        >
          {{ expanded.has(node.id) ? '▾' : '▸' }}
        </button>
        <span
          v-else
          class="vd-tree-toggle vd-tree-toggle-placeholder"
          aria-hidden="true"
        />
        <input
          v-if="checkbox"
          type="checkbox"
          class="vd-tree-checkbox"
          :checked="checked.has(node.id)"
          @change="(e) => toggleCheck(node, e)"
        >
        <span class="vd-tree-label">{{ node.label }}</span>
      </div>
      <ul
        v-if="node.children && node.children.length > 0 && expanded.has(node.id)"
        class="vd-tree-children"
        role="group"
      >
        <VdTree
          :nodes="node.children"
          :lines="lines"
          :checkbox="checkbox"
        />
      </ul>
    </li>
  </ul>
</template>
