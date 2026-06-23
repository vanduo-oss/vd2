<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdAvatar from "@/components/VdAvatar.vue";

const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
const variants = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
] as const;
const shapes = ["circle", "rounded", "square"] as const;

const basicHtml =
  '<div class="vd-avatar vd-avatar-md vd-avatar-primary">\n  <span class="vd-avatar-initials">JD</span>\n</div>';

const imageHtml =
  '<div class="vd-avatar vd-avatar-lg">\n  <img src="..." alt="User" class="vd-avatar-img">\n</div>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Avatar</h1>
        <p class="vd-lead">
          User or entity representation with sizes, variants, shapes, and status
          indicators.
        </p>
      </header>

      <section id="sizes" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Sizes</h2>
        <div class="vd-inline vd-inline-md">
          <VdAvatar
            v-for="size in sizes"
            :key="size"
            :size="size"
            :initials="size.toUpperCase()"
          />
        </div>
      </section>

      <section id="variants" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Variants</h2>
        <div class="vd-inline vd-inline-md">
          <VdAvatar
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            :initials="variant.charAt(0).toUpperCase()"
          />
        </div>
      </section>

      <section id="shapes" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Shapes</h2>
        <div class="vd-inline vd-inline-md">
          <VdAvatar
            v-for="shape in shapes"
            :key="shape"
            :shape="shape"
            :initials="shape.charAt(0).toUpperCase()"
          />
        </div>
      </section>

      <section id="status" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Status indicator</h2>
        <div class="vd-inline vd-inline-md">
          <VdAvatar status="online" initials="ON" />
          <VdAvatar status="away" initials="AW" />
          <VdAvatar status="busy" initials="BS" />
          <VdAvatar status="offline" initials="OF" />
        </div>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="basicHtml" />
        <VdCodeSnippet language="html" :code="imageHtml" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
