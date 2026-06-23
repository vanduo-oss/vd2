<script setup lang="ts">
import { useToastStore } from "@/composables/useToast";
import VdToast from "./VdToast.vue";

const store = useToastStore();
</script>

<template>
  <Teleport to="body">
    <div class="vd-toast-container" role="region" aria-label="Notifications">
      <VdToast
        v-for="toast in store.queue"
        :key="toast.id"
        :toast="toast"
        @dismiss="store.dismiss"
      />
    </div>
  </Teleport>
</template>
