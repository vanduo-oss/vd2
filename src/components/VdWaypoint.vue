<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

interface Props {
  scrollRoot?: string;
  navSelector?: string;
  activeClass?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  scrollRoot: '',
  navSelector: '',
  activeClass: 'is-active',
  disabled: false,
});

const root = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const setActive = (id: string | null): void => {
  if (!root.value) return;
  const nav =
    (props.navSelector ? root.value.querySelector(props.navSelector) : root.value) ??
    root.value;
  for (const link of nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
    link.classList.remove(props.activeClass);
    if (id && link.getAttribute('href') === `#${id}`) {
      link.classList.add(props.activeClass);
    }
  }
};

const setupObserver = (): void => {
  if (typeof window === 'undefined' || props.disabled) return;
  if (!root.value) return;
  const el = root.value;
  const sections = Array.from(
    el.querySelectorAll<HTMLElement>('[id]'),
  ).filter(
    (section) => el.contains(section) || section.closest(el.tagName.toLowerCase()) === el,
  );

  if (sections.length === 0) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      const first = visible[0] ?? null;
      setActive(first ? (first.target as HTMLElement).id : null);
    },
    { rootMargin: '0px 0px -70% 0px', threshold: [0, 1] },
  );
  for (const section of sections) observer.observe(section);
};

onMounted(setupObserver);

watch(
  () => props.disabled,
  (disabled) => {
    observer?.disconnect();
    observer = null;
    if (!disabled) setupObserver();
  },
);

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<template>
  <div
    ref="root"
    data-vd-waypoint
  >
    <slot />
  </div>
</template>
