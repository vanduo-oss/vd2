<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

interface Props {
  topOffset?: number;
  zIndex?: number;
  stuckClass?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  topOffset: 0,
  zIndex: 100,
  stuckClass: 'is-stuck',
  disabled: false,
});

const root = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof window === 'undefined' || props.disabled) return;
  if (!root.value) return;
  const el = root.value;

  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText =
    'position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;';
  el.parentElement?.insertBefore(sentinel, el);

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.target === sentinel) {
          if (entry.isIntersecting) {
            el.classList.remove(props.stuckClass);
          } else {
            el.classList.add(props.stuckClass);
          }
        }
      }
    },
    { rootMargin: `-${props.topOffset}px 0px 0px 0px`, threshold: [0, 1] },
  );
  observer.observe(sentinel);

  el.style.zIndex = String(props.zIndex);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<template>
  <div
    ref="root"
    class="vd-sticky"
  >
    <slot />
  </div>
</template>
