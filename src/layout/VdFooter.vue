<script setup lang="ts">
const year = new Date().getFullYear();

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

interface FooterSection {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

interface Props {
  sections?: readonly FooterSection[];
  showCopyright?: boolean;
  showLegalLinks?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  sections: () => [] as readonly FooterSection[],
  showCopyright: true,
  showLegalLinks: true,
});

const legalLinks: readonly FooterLink[] = [
  { label: "GitHub", href: "https://github.com/vanduo-oss", external: true },
  { label: "vanduo.dev", href: "https://vanduo.dev", external: true },
  { label: "Changelog", href: "/changelog" },
];
</script>

<template>
  <footer class="vd-footer" role="contentinfo">
    <div class="vd-container vd-footer-container">
      <div v-if="props.sections.length > 0" class="vd-footer-columns">
        <div
          v-for="section in props.sections"
          :key="section.title"
          class="vd-footer-section"
        >
          <h4 class="vd-footer-heading">
            {{ section.title }}
          </h4>
          <ul class="vd-footer-list">
            <li
              v-for="link in section.links"
              :key="link.href"
              class="vd-footer-list-item"
            >
              <a
                :href="link.href"
                :rel="link.external ? 'noopener' : undefined"
                :target="link.external ? '_blank' : undefined"
                class="vd-footer-link"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="vd-footer-copyright">
        <p v-if="props.showCopyright" class="vd-muted vd-text-sm">
          © {{ year }} vanduo-oss — MIT license
        </p>
        <ul v-if="props.showLegalLinks" class="vd-footer-list">
          <li
            v-for="link in legalLinks"
            :key="link.href"
            class="vd-footer-list-item"
          >
            <a
              :href="link.href"
              :rel="link.external ? 'noopener' : undefined"
              :target="link.external ? '_blank' : undefined"
              class="vd-footer-link"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <slot name="extra" />
      </div>
    </div>
  </footer>
</template>
