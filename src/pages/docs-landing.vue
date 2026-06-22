<script setup lang="ts">
import { RouterLink } from 'vue-router';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCard from '@/components/VdCard.vue';
import VdIcon from '@/components/VdIcon.vue';
import { nav } from '@/nav';
</script>

<template>
  <section class="vd-stack vd-stack-2xl vd-pad-2xl">
    <header class="vd-stack vd-stack-sm">
      <h1 class="vd-display">
        Docs
      </h1>
      <p class="vd-lead">
        Browse the v1 component catalog.
      </p>
    </header>
    <VdStack gap="lg">
      <article
        v-for="tab in nav.tabs"
        :key="tab.id"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          <VdIcon
            v-if="tab.icon"
            :name="tab.icon"
          />
          <span>{{ tab.title }}</span>
        </h2>
        <div class="vd-grid vd-grid-3">
          <VdCard
            v-for="category in tab.categories"
            :key="category.id"
          >
            <template #header>
              <h3 class="vd-h4">
                {{ category.title }}
              </h3>
            </template>
            <ul class="vd-stack vd-stack-sm">
              <li
                v-for="section in category.sections"
                :key="section.id"
              >
                <RouterLink
                  :to="section.route"
                  class="vd-link"
                >
                  {{ section.title }}
                </RouterLink>
              </li>
            </ul>
          </VdCard>
        </div>
      </article>
    </VdStack>
  </section>
</template>