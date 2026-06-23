<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="vd-footer"
    role="contentinfo"
  >
    <div class="vd-container vd-footer-container">
      <p class="vd-muted vd-text-sm">
        © {{ year }} vanduo-oss — MIT license
      </p>
      <ul class="vd-footer-list">
        <li>
          <a
            href="https://github.com/vanduo-oss"
            rel="noopener"
            class="vd-footer-link"
          >GitHub</a>
        </li>
        <li>
          <a
            href="https://vanduo.dev"
            rel="noopener"
            class="vd-footer-link"
          >vanduo.dev</a>
        </li>
        <li>
          <a
            href="/changelog"
            class="vd-footer-link"
          >Changelog</a>
        </li>
      </ul>
    </div>
  </footer>
</template>