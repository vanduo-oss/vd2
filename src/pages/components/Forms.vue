<script setup lang="ts">
import { ref } from 'vue';
import DocsLayout from '@/layout/DocsLayout.vue';
import VdStack from '@/components/primitives/VdStack.vue';
import VdCodeSnippet from '@/components/VdCodeSnippet.vue';
import VdInput from '@/components/VdInput.vue';
import VdSelect from '@/components/VdSelect.vue';
import VdButtonGroup from '@/components/VdButtonGroup.vue';
import VdButton from '@/components/VdButton.vue';
import VdCheckboxGroup from '@/components/VdCheckboxGroup.vue';
import VdRadioGroup from '@/components/VdRadioGroup.vue';

const text = ref('');
const fruit = ref('a');
const checked = ref<string[]>(['a']);
const radio = ref('a');

const fruitOptions = [
  { value: 'a', label: 'Apple' },
  { value: 'b', label: 'Banana' },
  { value: 'c', label: 'Cherry' },
];

const inputHtml = '<input class="vd-input" type="text" placeholder="Your name">';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">
          Forms
        </h1>
        <p class="vd-lead">
          Text inputs, selects, checkboxes, radio groups, and button
          groups for collecting user input.
        </p>
      </header>

      <section
        id="inputs"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Inputs
        </h2>
        <div class="vd-stack vd-stack-sm">
          <label>
            <span>Name</span>
            <VdInput
              v-model="text"
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Email</span>
            <VdInput
              v-model="text"
              type="email"
              placeholder="you@example.com"
            />
          </label>
        </div>
      </section>

      <section
        id="select"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Select
        </h2>
        <label>
          <span>Pick a fruit</span>
          <VdSelect
            v-model="fruit"
            :options="fruitOptions"
          />
        </label>
      </section>

      <section
        id="checkboxes"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Checkboxes
        </h2>
        <VdCheckboxGroup
          v-model="checked"
          :options="fruitOptions"
          name="fruit"
        />
        <p>Selected: {{ checked.join(', ') }}</p>
      </section>

      <section
        id="radios"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Radios
        </h2>
        <VdRadioGroup
          v-model="radio"
          :options="fruitOptions"
          name="radio-fruit"
        />
        <p>Selected: {{ radio }}</p>
      </section>

      <section
        id="button-group"
        class="vd-stack vd-stack-md"
      >
        <h2 class="vd-h2">
          Button group
        </h2>
        <VdButtonGroup>
          <VdButton variant="primary">
            Save
          </VdButton>
          <VdButton variant="secondary">
            Cancel
          </VdButton>
          <VdButton variant="ghost">
            Help
          </VdButton>
        </VdButtonGroup>
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
          :code="inputHtml"
        />
      </section>
    </VdStack>
  </DocsLayout>
</template>
