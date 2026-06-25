<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";

const spacingHtml = `<!-- Fibonacci spacing utilities (rem-based) -->
<div class="vd-p-fib-5">  <!-- padding -->
  <h2 class="vd-mb-fib-3">Title</h2>
  <p class="vd-mb-fib-2">Body copy with harmonious rhythm.</p>
</div>`;

const varCss = `:root {
  /* The scale every spacing/size token derives from */
  --vd-space-fib-1: 0.125rem;
  --vd-space-fib-2: 0.25rem;
  --vd-space-fib-3: 0.5rem;
  --vd-space-fib-5: 1rem;
  --vd-space-fib-8: 2rem;
  --vd-space-fib-13: 4rem;
}`;

const scale: [string, string][] = [
  ["1, 2, 3", "Fine adjustments — borders, tight gaps"],
  ["5, 8", "Component padding, gaps between elements"],
  ["13, 21", "Section spacing, card padding"],
  ["34, 55, 89", "Page rhythm, hero spacing"],
];
</script>

<template>
  <DocsLayout>
    <section id="fibonacci">
      <h5 class="demo-title">
        <i class="ph ph-spiral"></i>The Fibonacci Scale
        <code class="vd-text-sm">Guide</code>
      </h5>
      <p class="vd-mb-6">
        Vanduo's spacing, type, and radius scales follow the Fibonacci sequence
        (1, 2, 3, 5, 8, 13, 21…) instead of a linear 4/8px grid. Because each step
        is the sum of the two before it, sizes relate to one another the way they
        do in nature — producing rhythm that feels balanced without manual tuning.
        This is a design philosophy, so it's identical across both engines.
      </p>

      <div class="vd-row vd-mb-6">
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-ruler"></i> Spacing utilities</h6></div>
            <div class="vd-card-body">
              <DocCodeSnippet :html="spacingHtml" :default-open="true" />
            </div>
          </div>
        </div>
        <div class="vd-col-12 vd-col-md-6">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-brackets-curly"></i> The underlying tokens</h6></div>
            <div class="vd-card-body">
              <DocCodeSnippet :css="varCss" :default-open="true" />
            </div>
          </div>
        </div>
      </div>

      <div class="vd-row vd-mb-6">
        <div class="vd-col-12">
          <div class="vd-card demo-card">
            <div class="vd-card-header"><h6><i class="ph ph-stack"></i> How to reach for each step</h6></div>
            <div class="vd-card-body">
              <div class="vd-table-responsive">
                <table class="vd-table vd-table-striped">
                  <thead><tr><th>Steps</th><th>Typical use</th></tr></thead>
                  <tbody>
                    <tr v-for="row in scale" :key="row[0]">
                      <td><code>{{ row[0] }}</code></td>
                      <td>{{ row[1] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vd-card demo-card">
        <div class="vd-card-header"><h6><i class="ph ph-info"></i> Why not a linear scale?</h6></div>
        <div class="vd-card-body">
          <p>
            A linear 4/8/12/16 scale gives every step the same visual jump, which
            flattens hierarchy. A Fibonacci scale grows proportionally, so small
            and large spaces stay distinct and the eye reads structure faster.
            See it in practice in <a href="/core/golden-ratio">Golden ratio</a> and
            <a href="/core/grid-system">Grid system</a>.
          </p>
        </div>
      </div>
    </section>
  </DocsLayout>
</template>
