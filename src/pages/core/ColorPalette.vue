<script setup lang="ts">
import { RouterLink } from "vue-router";
import DocsLayout from "@/layout/DocsLayout.vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";

interface Swatch {
  name: string;
  bg: string;
  fg: string;
  star?: boolean;
  border?: boolean;
}

const primary: Swatch[] = [
  { name: "primary-0", bg: "#e3fafc", fg: "#0b7285" },
  { name: "primary-1", bg: "#c5f6fa", fg: "#0b7285" },
  { name: "primary-2", bg: "#99e9f2", fg: "#0b7285" },
  { name: "primary-3", bg: "#66d9e8", fg: "#0b7285" },
  { name: "primary-4", bg: "#3bc9db", fg: "#0b7285" },
  { name: "primary-5", bg: "#22b8cf", fg: "#ffffff", star: true },
  { name: "primary-6", bg: "#15aabf", fg: "#ffffff" },
  { name: "primary-7", bg: "#1098ad", fg: "#ffffff" },
  { name: "primary-8", bg: "#0c8599", fg: "#ffffff" },
  { name: "primary-9", bg: "#0b7285", fg: "#ffffff" },
];

const secondary: Swatch[] = [
  { name: "secondary-0", bg: "#e6fcf5", fg: "#087f5b" },
  { name: "secondary-1", bg: "#c3fae8", fg: "#087f5b" },
  { name: "secondary-2", bg: "#96f2d7", fg: "#087f5b" },
  { name: "secondary-3", bg: "#63e6be", fg: "#087f5b" },
  { name: "secondary-4", bg: "#38d9a9", fg: "#087f5b" },
  { name: "secondary-5", bg: "#20c997", fg: "#ffffff", star: true },
  { name: "secondary-6", bg: "#12b886", fg: "#ffffff" },
  { name: "secondary-7", bg: "#0ca678", fg: "#ffffff" },
  { name: "secondary-8", bg: "#099268", fg: "#ffffff" },
  { name: "secondary-9", bg: "#087f5b", fg: "#ffffff" },
];

const gray: Swatch[] = [
  { name: "gray-0", bg: "#f8f9fa", fg: "#212529", border: true },
  { name: "gray-1", bg: "#f1f3f5", fg: "#212529", border: true },
  { name: "gray-2", bg: "#e9ecef", fg: "#212529", border: true },
  { name: "gray-3", bg: "#dee2e6", fg: "#212529", border: true },
  { name: "gray-4", bg: "#ced4da", fg: "#212529", border: true },
  { name: "gray-5", bg: "#adb5bd", fg: "#212529", border: true },
  { name: "gray-6", bg: "#868e96", fg: "#ffffff" },
  { name: "gray-7", bg: "#495057", fg: "#ffffff" },
  { name: "gray-8", bg: "#343a40", fg: "#ffffff" },
  { name: "gray-9", bg: "#212529", fg: "#ffffff" },
];

const danger: Swatch[] = [
  { name: "danger-0", bg: "#fff5f5", fg: "#c92a2a" },
  { name: "danger-1", bg: "#ffe3e3", fg: "#c92a2a" },
  { name: "danger-2", bg: "#ffc9c9", fg: "#c92a2a" },
  { name: "danger-3", bg: "#ffa8a8", fg: "#c92a2a" },
  { name: "danger-4", bg: "#ff8787", fg: "#c92a2a" },
  { name: "danger-5", bg: "#ff6b6b", fg: "#ffffff" },
  { name: "danger-6", bg: "#fa5252", fg: "#ffffff", star: true },
  { name: "danger-7", bg: "#f03e3e", fg: "#ffffff" },
  { name: "danger-8", bg: "#e03131", fg: "#ffffff" },
  { name: "danger-9", bg: "#c92a2a", fg: "#ffffff" },
];

const success: Swatch[] = [
  { name: "success-0", bg: "#ebfbee", fg: "#2b8a3e" },
  { name: "success-1", bg: "#d3f9d8", fg: "#2b8a3e" },
  { name: "success-2", bg: "#b2f2bb", fg: "#2b8a3e" },
  { name: "success-3", bg: "#8ce99a", fg: "#2b8a3e" },
  { name: "success-4", bg: "#69db7c", fg: "#2b8a3e" },
  { name: "success-5", bg: "#51cf66", fg: "#ffffff" },
  { name: "success-6", bg: "#40c057", fg: "#ffffff", star: true },
  { name: "success-7", bg: "#37b24d", fg: "#ffffff" },
  { name: "success-8", bg: "#2f9e44", fg: "#ffffff" },
  { name: "success-9", bg: "#2b8a3e", fg: "#ffffff" },
];

const warning: Swatch[] = [
  { name: "warning-0", bg: "#fff9db", fg: "#e67700" },
  { name: "warning-1", bg: "#fff3bf", fg: "#e67700" },
  { name: "warning-2", bg: "#ffec99", fg: "#e67700" },
  { name: "warning-3", bg: "#ffe066", fg: "#e67700" },
  { name: "warning-4", bg: "#ffd43b", fg: "#e67700" },
  { name: "warning-5", bg: "#fcc419", fg: "#212529" },
  { name: "warning-6", bg: "#fab005", fg: "#212529", star: true },
  { name: "warning-7", bg: "#f59f00", fg: "#212529" },
  { name: "warning-8", bg: "#f08c00", fg: "#ffffff" },
  { name: "warning-9", bg: "#e67700", fg: "#ffffff" },
];

const info: Swatch[] = [
  { name: "info-0", bg: "#e7f5ff", fg: "#1864ab" },
  { name: "info-1", bg: "#d0ebff", fg: "#1864ab" },
  { name: "info-2", bg: "#a5d8ff", fg: "#1864ab" },
  { name: "info-3", bg: "#74c0fc", fg: "#1864ab" },
  { name: "info-4", bg: "#4dabf7", fg: "#1864ab" },
  { name: "info-5", bg: "#339af0", fg: "#ffffff" },
  { name: "info-6", bg: "#228be6", fg: "#ffffff", star: true },
  { name: "info-7", bg: "#1c7ed6", fg: "#ffffff" },
  { name: "info-8", bg: "#1971c2", fg: "#ffffff" },
  { name: "info-9", bg: "#1864ab", fg: "#ffffff" },
];

const hues: { cls: string; label: string; fg: string }[] = [
  { cls: "vd-bg-red-5", label: "red", fg: "#fff" },
  { cls: "vd-bg-orange-5", label: "orange", fg: "#fff" },
  { cls: "vd-bg-yellow-5", label: "yellow", fg: "#212529" },
  { cls: "vd-bg-lime-5", label: "lime", fg: "#212529" },
  { cls: "vd-bg-green-6", label: "green", fg: "#fff" },
  { cls: "vd-bg-teal-5", label: "teal", fg: "#fff" },
  { cls: "vd-bg-cyan-5", label: "cyan", fg: "#fff" },
  { cls: "vd-bg-blue-5", label: "blue", fg: "#fff" },
  { cls: "vd-bg-indigo-5", label: "indigo", fg: "#fff" },
  { cls: "vd-bg-violet-5", label: "violet", fg: "#fff" },
  { cls: "vd-bg-grape-5", label: "grape", fg: "#fff" },
  { cls: "vd-bg-pink-5", label: "pink", fg: "#fff" },
  { cls: "vd-bg-gray-6", label: "gray", fg: "#fff" },
];

const swatchStyle = (s: Swatch): string => {
  let style = `background: ${s.bg}; color: ${s.fg};`;
  if (s.border) style += " border-bottom: 1px solid var(--vd-border-color);";
  return style;
};

const bgTealHtml = `<div class="vd-bg-teal-3">...</div>`;
const textBlueHtml = `<span class="vd-text-blue-7">...</span>`;
const combinedHtml = `<div class="vd-bg-indigo-8 vd-text-yellow-2">...</div>`;

const cssUsage = `/* Direct scale access */
.my-element {
  background: var(--vd-primary-0);  /* Lightest */
  color: var(--vd-primary-9);       /* Darkest */
}

/* Semantic aliases (recommended) */
.my-button {
  background: var(--vd-color-primary);
  border-color: var(--vd-color-primary-dark);
}

/* Hover states using scale */
.my-button:hover {
  background: var(--vd-primary-6);
}

.my-button:active {
  background: var(--vd-primary-7);
}`;

const themingCss = `:root {
  /* Swap Cyan with Violet */
  --vd-primary-0: #f3f0ff;
  --vd-primary-1: #e5dbff;
  --vd-primary-2: #d0bfff;
  --vd-primary-3: #b197fc;
  --vd-primary-4: #9775fa;
  --vd-primary-5: #845ef7;
  --vd-primary-6: #7950f2;
  --vd-primary-7: #7048e8;
  --vd-primary-8: #6741d9;
  --vd-primary-9: #5f3dc4;
}`;
</script>

<template>
  <DocsLayout>
    <section id="color-palette">
      <h5 class="demo-title"><i class="ph ph-palette"></i>Color Palette</h5>
      <p class="vd-mb-8">
        Vanduo uses the
        <a href="https://yeun.github.io/open-color/" target="_blank" rel="noopener"><strong>Open Color</strong></a>
        palette (MIT License) — a battle-tested, accessible color system with
        10-step scales for each hue. Perfect for the "no-build" philosophy.
      </p>

      <!-- Semantic surfaces: light & dark -->
      <div class="vd-row">
        <div class="vd-col-12">
          <div class="vd-card vd-card-glow demo-card vd-mb-8">
            <div class="vd-card-header">
              <h6>Semantic surfaces — light &amp; dark</h6>
            </div>
            <div class="vd-card-body">
              <p class="vd-mb-6">
                The raw scales above are fixed values. The
                <strong>semantic</strong> tokens (<code>--vd-bg-*</code>,
                <code>--vd-text-*</code>, <code>--vd-border-color</code>) remap
                per theme, so the same markup adapts automatically. Here is the
                same set in both modes:
              </p>
              <div class="vd-row">
                <div class="vd-col-12 vd-col-md-6 vd-mb-5">
                  <p class="vd-text-sm vd-text-muted vd-mb-2"><i class="ph ph-sun"></i> Light</p>
                  <div style="background: var(--vd-bg-primary); border: 1px solid var(--vd-border-color); border-radius: var(--vd-radius-fib-5); padding: 1rem;">
                    <div style="background: var(--vd-bg-secondary); color: var(--vd-text-primary); padding: 0.5rem 0.75rem; border-radius: var(--vd-radius-fib-3); margin-bottom: 0.5rem;"><code>--vd-bg-secondary</code></div>
                    <div style="background: var(--vd-bg-tertiary); color: var(--vd-text-primary); padding: 0.5rem 0.75rem; border-radius: var(--vd-radius-fib-3); margin-bottom: 0.5rem;"><code>--vd-bg-tertiary</code></div>
                    <div style="background: var(--vd-color-primary); color: var(--vd-text-on-primary, #fff); padding: 0.5rem 0.75rem; border-radius: var(--vd-radius-fib-3); margin-bottom: 0.5rem;"><code>--vd-color-primary</code></div>
                    <p class="vd-mb-0" style="color: var(--vd-text-primary);">Text primary · <span style="color: var(--vd-text-muted);">muted</span></p>
                  </div>
                </div>
                <div class="vd-col-12 vd-col-md-6 vd-mb-5">
                  <p class="vd-text-sm vd-text-muted vd-mb-2"><i class="ph ph-moon"></i> Dark</p>
                  <div data-theme="dark" style="background: var(--vd-bg-primary); border: 1px solid var(--vd-border-color); border-radius: var(--vd-radius-fib-5); padding: 1rem;">
                    <div style="background: var(--vd-bg-secondary); color: var(--vd-text-primary); padding: 0.5rem 0.75rem; border-radius: var(--vd-radius-fib-3); margin-bottom: 0.5rem;"><code>--vd-bg-secondary</code></div>
                    <div style="background: var(--vd-bg-tertiary); color: var(--vd-text-primary); padding: 0.5rem 0.75rem; border-radius: var(--vd-radius-fib-3); margin-bottom: 0.5rem;"><code>--vd-bg-tertiary</code></div>
                    <div style="background: var(--vd-color-primary); color: var(--vd-text-on-primary, #fff); padding: 0.5rem 0.75rem; border-radius: var(--vd-radius-fib-3); margin-bottom: 0.5rem;"><code>--vd-color-primary</code></div>
                    <p class="vd-mb-0" style="color: var(--vd-text-primary);">Text primary · <span style="color: var(--vd-text-muted);">muted</span></p>
                  </div>
                </div>
              </div>
              <div class="vd-alert vd-alert-warning vd-mb-0">
                <i class="ph ph-shield-check"></i>
                <div>
                  <strong>Contrast &amp; accessibility.</strong> The default
                  brand step is <code>primary-5</code> (★), tuned for AA contrast
                  with white text. Because the
                  <RouterLink to="/components/theme-customizer">Theme Customizer</RouterLink>
                  lets users pick <em>any</em> primary, verify contrast for custom
                  colors — see
                  <RouterLink to="/guides/accessibility">Accessibility Essentials</RouterLink>.
                  Borders use <code>--vd-border-color</code> (and the
                  <code>.vd-border*</code> utilities), which also adapts per theme.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Primary (Cyan) + Secondary (Teal) -->
      <div class="vd-row">
        <div class="vd-col-12 vd-col-lg-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Primary — Cyan (Brand)</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">The "Water" brand color for Vanduo</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="color-scale">
                <div v-for="s in primary" :key="s.name" class="color-swatch" :style="swatchStyle(s)">
                  <span class="color-swatch-name">{{ s.name }}{{ s.star ? " ★" : "" }}</span>
                  <span class="color-swatch-hex">{{ s.bg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vd-col-12 vd-col-lg-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Secondary — Teal</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">Complementary to Cyan for secondary actions</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="color-scale">
                <div v-for="s in secondary" :key="s.name" class="color-swatch" :style="swatchStyle(s)">
                  <span class="color-swatch-name">{{ s.name }}{{ s.star ? " ★" : "" }}</span>
                  <span class="color-swatch-hex">{{ s.bg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gray (Neutrals) -->
      <div class="vd-row">
        <div class="vd-col-12">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Gray — Neutrals</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">Used for backgrounds, borders, text, and UI structure</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="vd-row" style="margin: 0;">
                <div v-for="s in gray" :key="s.name" class="vd-col-12 vd-col-md-6 vd-col-lg-4" style="padding: 0;">
                  <div class="color-swatch" :style="swatchStyle(s)">
                    <span class="color-swatch-name">{{ s.name }}</span>
                    <span class="color-swatch-hex">{{ s.bg }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Danger (Red) + Success (Green) -->
      <div class="vd-row">
        <div class="vd-col-12 vd-col-lg-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Danger — Red</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">Error states, destructive actions</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="color-scale">
                <div v-for="s in danger" :key="s.name" class="color-swatch" :style="swatchStyle(s)">
                  <span class="color-swatch-name">{{ s.name }}{{ s.star ? " ★" : "" }}</span>
                  <span class="color-swatch-hex">{{ s.bg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vd-col-12 vd-col-lg-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Success — Green</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">Success states, confirmations</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="color-scale">
                <div v-for="s in success" :key="s.name" class="color-swatch" :style="swatchStyle(s)">
                  <span class="color-swatch-name">{{ s.name }}{{ s.star ? " ★" : "" }}</span>
                  <span class="color-swatch-hex">{{ s.bg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Warning (Yellow) + Info (Blue) -->
      <div class="vd-row">
        <div class="vd-col-12 vd-col-lg-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Warning — Yellow</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">Warnings, cautions, attention</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="color-scale">
                <div v-for="s in warning" :key="s.name" class="color-swatch" :style="swatchStyle(s)">
                  <span class="color-swatch-name">{{ s.name }}{{ s.star ? " ★" : "" }}</span>
                  <span class="color-swatch-hex">{{ s.bg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vd-col-12 vd-col-lg-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Info — Blue</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">Information, help, neutral feedback</p>
            </div>
            <div class="vd-card-body" style="padding: 0;">
              <div class="color-scale">
                <div v-for="s in info" :key="s.name" class="color-swatch" :style="swatchStyle(s)">
                  <span class="color-swatch-name">{{ s.name }}{{ s.star ? " ★" : "" }}</span>
                  <span class="color-swatch-hex">{{ s.bg }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Color Utility Classes Usage Guide -->
      <div class="vd-row">
        <div class="vd-col-12">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6><i class="ph ph-paint-brush-broad"></i> Color Utility Classes</h6>
              <p class="vd-text-sm vd-text-muted vd-mb-0">
                Apply background and text colors directly via CSS classes — no
                custom styles needed.
                <span class="vd-badge vd-badge-info" style="font-size: 0.7rem;">v1.2.7</span>
              </p>
            </div>
            <div class="vd-card-body">
              <p class="vd-mb-4">
                Every Open Color hue (0–9 shades) is available as a utility
                class. The pattern maps directly to the CSS custom property names.
              </p>

              <h4 class="vd-mb-3">Background Color</h4>
              <p class="vd-mb-3">Use <code>vd-bg-{color}-{shade}</code> to set an element's background color.</p>
              <div class="vd-bg-teal-3 vd-mb-3" style="padding: 1.25rem; border-radius: var(--vd-btn-border-radius); color: #087f5b;">
                This element has a <strong>vd-bg-teal-3</strong> class
              </div>
              <DocCodeSnippet class="vd-mb-6" :html="bgTealHtml" />

              <h4 class="vd-mb-3">Text Color</h4>
              <p class="vd-mb-3">Use <code>vd-text-{color}-{shade}</code> to set an element's text color.</p>
              <div class="vd-card vd-mb-3" style="border: 1px solid var(--vd-border-color);">
                <div class="vd-card-body">
                  <span class="vd-text-blue-7" style="font-size: 1.1rem; font-weight: 500;">
                    This text has a <strong>vd-text-blue-7</strong> class
                  </span>
                </div>
              </div>
              <DocCodeSnippet class="vd-mb-6" :html="textBlueHtml" />

              <h4 class="vd-mb-3">Combining Background &amp; Text</h4>
              <p class="vd-mb-3">Stack both classes on a single element for full control.</p>
              <div class="vd-bg-indigo-8 vd-text-yellow-2 vd-mb-3" style="padding: 1.25rem; border-radius: var(--vd-btn-border-radius); font-weight: 500;">
                <strong>vd-bg-indigo-8</strong> background with <strong>vd-text-yellow-2</strong> text
              </div>
              <DocCodeSnippet class="vd-mb-4" :html="combinedHtml" />

              <h4 class="vd-mb-3">Available Hues</h4>
              <p class="vd-text-sm vd-text-muted">
                All 13 Open Color hues are supported, each with shades
                <code>0</code> (lightest) through <code>9</code> (darkest):
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
                <code
                  v-for="hue in hues"
                  :key="hue.label"
                  :class="hue.cls"
                  :style="`padding: 0.25rem 0.6rem; border-radius: 4px; color: ${hue.fg};`"
                >{{ hue.label }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Usage Guide -->
      <div class="vd-row">
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>CSS Variable Usage</h6>
            </div>
            <div class="vd-card-body">
              <DocCodeSnippet :css="cssUsage" />
            </div>
          </div>
        </div>

        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card vd-card-glow demo-card">
            <div class="vd-card-header">
              <h6>Theming Guide</h6>
            </div>
            <div class="vd-card-body">
              <p class="vd-mb-3">To change the primary color to another Open Color hue (e.g., Violet):</p>
              <DocCodeSnippet :css="themingCss" />
              <p class="vd-text-sm vd-text-muted vd-mt-3">
                All components using <code>--vd-primary-*</code> or
                <code>--vd-color-primary</code> will automatically update.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Color Attribution -->
      <div class="vd-row">
        <div class="vd-col-12">
          <div class="vd-card vd-card-glow">
            <div class="vd-card-body vd-text-center">
              <p class="vd-text-muted">
                <i class="ph ph-palette" style="color: var(--vd-color-primary);"></i>
                Color palette based on
                <a href="https://yeun.github.io/open-color/" target="_blank" rel="noopener"><strong>Open Color</strong></a>
                by Heeyeun Jeong — MIT Licensed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DocsLayout>
</template>

<style>
.color-swatch {
  padding: 1rem;
  font-size: var(--vd-font-size-sm);
  font-family: var(--vd-font-family-mono);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.color-swatch-name {
  font-weight: var(--vd-font-weight-medium);
}

.color-swatch-hex {
  opacity: 0.8;
}

.color-scale {
  border-radius: var(--vd-btn-border-radius);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.color-scale-title {
  font-weight: var(--vd-font-weight-semibold);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-scale-title code {
  font-size: var(--vd-font-size-xs);
  background: var(--vd-bg-secondary);
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
}
</style>
