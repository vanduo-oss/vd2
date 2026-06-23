<script setup lang="ts">
import VdIcon from "./VdIcon.vue";

export interface ToastDescriptor {
  id: string;
  message: string;
  variant?: "info" | "success" | "warning" | "danger";
  duration?: number;
}

interface Props {
  toast: ToastDescriptor;
}

defineProps<Props>();

const emit = defineEmits<{ dismiss: [id: string] }>();

const onDismiss = (id: string): void => {
  emit("dismiss", id);
};
</script>

<template>
  <div
    :class="['vd-toast', toast.variant ? `vd-toast-${toast.variant}` : null]"
    role="status"
    aria-live="polite"
  >
    <VdIcon name="bell" />
    <span class="vd-toast-message">{{ toast.message }}</span>
    <button
      type="button"
      class="vd-toast-dismiss"
      aria-label="Dismiss"
      @click="onDismiss(toast.id)"
    >
      <VdIcon name="x" />
    </button>
  </div>
</template>
