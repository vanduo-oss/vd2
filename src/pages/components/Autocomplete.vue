<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdAutocomplete from '@/components/VdAutocomplete.vue';

const options = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'br', label: 'Brazil' },
  { value: 'ar', label: 'Argentina' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'cn', label: 'China' },
  { value: 'kr', label: 'South Korea' },
  { value: 'in', label: 'India' },
];

const country = ref('');

const autocompleteHtml = '<input class="vd-input" type="text" role="combobox">';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Autocomplete
        </h1>
        <p class="vd-lead">
          Typeahead input with keyboard navigation and filtered
          suggestions.
        </p>
      </header>

      <section
        id="basic"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Basic
        </h2>
        <label>
          <span>Country</span>
          <VdAutocomplete
            v-model="country"
            :options="options"
            placeholder="Type to search…"
          />
        </label>
        <p>Selected: {{ country || 'none' }}</p>
      </section>

      <section
        id="usage"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Usage
        </h2>
        <VdCodeSnippet
          language="html"
          :code="autocompleteHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
