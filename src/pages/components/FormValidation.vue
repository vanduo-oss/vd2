<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layout/DocsLayout.vue";
import VdStack from "@/components/primitives/VdStack.vue";
import VdCodeSnippet from "@/components/VdCodeSnippet.vue";
import VdInput from "@/components/VdInput.vue";
import VdButton from "@/components/VdButton.vue";

const email = ref("");
const emailError = ref("");
const submitted = ref(false);

const validate = (): void => {
  emailError.value = "";
  if (!email.value.includes("@")) {
    emailError.value = "Email must contain @";
  } else if (email.value.length < 5) {
    emailError.value = "Email is too short";
  }
  submitted.value = emailError.value === "";
};

const html =
  '<form class="vd-form">\n  <div class="vd-form-group">\n    <label>Email</label>\n    <input class="vd-input">\n    <div class="vd-form-feedback vd-form-feedback-invalid">Error</div>\n  </div>\n</form>';
</script>

<template>
  <DocsLayout>
    <VdStack gap="xl">
      <header>
        <h1 class="vd-h1">Form validation</h1>
        <p class="vd-lead">
          Validate form input with feedback messages and invalid/valid styling.
        </p>
      </header>

      <section id="basic" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Basic</h2>
        <form class="vd-form" @submit.prevent="validate">
          <div class="vd-form-group">
            <label for="form-email">Email</label>
            <VdInput
              id="form-email"
              v-model="email"
              type="email"
              placeholder="you@example.com"
              :variant="emailError ? 'error' : 'default'"
            />
            <div
              v-if="emailError"
              class="vd-form-feedback vd-form-feedback-invalid"
            >
              {{ emailError }}
            </div>
            <div
              v-else-if="submitted"
              class="vd-form-feedback vd-form-feedback-valid"
            >
              Looks good!
            </div>
          </div>
          <VdButton type="submit" variant="primary"> Submit </VdButton>
        </form>
      </section>

      <section id="usage" class="vd-stack vd-stack-md">
        <h2 class="vd-h2">Usage</h2>
        <VdCodeSnippet language="html" :code="html" />
      </section>
    </VdStack>
  </DocsLayout>
</template>
