<script setup lang="ts">
import DocsLayout from "@/layout/DocsLayout.vue";
import DocCodeSnippet from "@/components/DocCodeSnippet.vue";
import EngineSwitch from "@/components/EngineSwitch.vue";
import { VdMusicPlayer } from "@vanduo-oss/music-player/vue";

// Stellardrone — "Invent the Universe" (Creative Commons). Audio files ship with
// the site's media assets; the player UI renders from these names regardless.
const tracks = [
  { name: "Pale Blue Dot", url: "/music/Stellardrone/Invent the Universe/06 - Pale Blue Dot.mp3" },
  { name: "Maia Nebula", url: "/music/Stellardrone/Invent the Universe/03 - Maia Nebula.mp3" },
  { name: "Approaching the Heliopause", url: "/music/Stellardrone/Invent the Universe/04 - Approaching the Heliopause.mp3" },
  { name: "An Ocean of Galaxies", url: "/music/Stellardrone/Invent the Universe/07 - An Ocean of Galaxies.mp3" },
  { name: "Infinite Void", url: "/music/Stellardrone/Invent the Universe/08 - Infinite Void.mp3" },
];

const installShell = `pnpm add @vanduo-oss/music-player`;

const vue3Usage = `<script setup lang="ts">
import { VdMusicPlayer } from '@vanduo-oss/music-player/vue';

const tracks = [
  { name: 'Pale Blue Dot', url: '/music/pale-blue-dot.mp3' },
  { name: 'Maia Nebula', url: '/music/maia-nebula.mp3' },
];
<\/script>

<template>
  <VdMusicPlayer
    :tracks="tracks"
    :options="{ showPlaylist: true, showProgress: true }"
    @trackchange="(d) => console.log(d.name)" />
</template>`;

const vanillaJs = `import { VanduoMusicPlayer } from '@vanduo-oss/music-player';
import '@vanduo-oss/music-player/css';

VanduoMusicPlayer.initPlayer(document.getElementById('player'), {
  tracks,
  showPlaylist: true,
  showProgress: true,
});`;

const vanillaHtml = `<div class="vd-music-player" data-music-player
  data-music-player-options='{"tracks":[
    {"name":"Pale Blue Dot","url":"/music/pale-blue-dot.mp3"}
  ],"showPlaylist":true}'></div>

<script>VanduoMusicPlayer.init();<\/script>`;

const vue3Api: [string, string][] = [
  [":tracks", "Playlist — [{ name, url }]."],
  [":options", "Player options object (see Options below)."],
  ["@play / @pause / @ended", "Playback lifecycle."],
  ["@trackchange", "Active track changed; detail { index, name, url }."],
  ["@volumechange / @repeatchange", "Volume or repeat-mode changed."],
  ["@detach / @attach / @minimize / @expand", "Floating-mode transitions."],
  ["@ready", "Emitted once with the container element."],
];

const options: [string, string][] = [
  ["tracks", "[{ name, url }] — required playlist."],
  ["volume / shuffle / repeat", "Initial volume (0–1), shuffle, repeat 'off' | 'one' | 'all'."],
  ["showProgress / showPlaylist", "Seek bar; expandable playlist panel."],
  ["autoAdvance", "Auto-play the next track on end (default true)."],
  ["glass", "Frosted-glass surface styling."],
  ["detachable / floatingPosition / draggable", "Float above the page when detached; corner preset; drag by handle."],
  ["minimizable / startMinimized", "Minimize/expand control; start minimized on first detach."],
  ["persistPosition / persistKey", "Persist floating x/y in localStorage."],
];
</script>

<template>
  <DocsLayout>
    <section id="music-player">
      <h5 class="demo-title"><i class="ph ph-music-note"></i>Music Player</h5>
      <p class="vd-mb-8">
        <strong>Vanduo Music Player</strong> is a standalone HTML5 audio player with
        transport controls, volume, shuffle/repeat, seek bar, playlist, glass surface,
        and a detachable floating mode — installed separately from the framework. It
        ships an optional Vue 3 binding (<code>@vanduo-oss/music-player/vue</code>) used
        here.
      </p>

      <div class="vd-card demo-card vd-mb-6">
        <div class="vd-card-header"><h6><i class="ph ph-playlist"></i> Player with playlist</h6></div>
        <div class="vd-card-body">
          <VdMusicPlayer :tracks="tracks" :options="{ showPlaylist: true, showProgress: true }" />
        </div>
      </div>

      <div class="vd-card vd-card-glow demo-card">
        <div class="vd-card-header">
          <h6><i class="ph ph-list-dashes mr-2" style="color: var(--vd-color-primary);"></i>API Reference</h6>
        </div>
        <div class="vd-card-body">
          <h4>Install</h4>
          <DocCodeSnippet :shell="installShell" />

          <h4 class="vd-mt-6">Usage</h4>
          <EngineSwitch>
            <template #vue3><DocCodeSnippet :html="vue3Usage" :default-open="true" /></template>
            <template #vanilla>
              <DocCodeSnippet :js="vanillaJs" :default-open="true" />
              <DocCodeSnippet :html="vanillaHtml" />
            </template>
          </EngineSwitch>

          <EngineSwitch>
            <template #vue3>
              <h4 class="vd-mt-6">Component API</h4>
              <div class="vd-table-responsive">
                <table class="vd-table vd-table-striped">
                  <thead><tr><th>Prop / event</th><th>Description</th></tr></thead>
                  <tbody>
                    <tr v-for="row in vue3Api" :key="row[0]"><td><code>{{ row[0] }}</code></td><td>{{ row[1] }}</td></tr>
                  </tbody>
                </table>
              </div>
            </template>
            <template #vanilla>
              <h4 class="vd-mt-6">Programmatic API</h4>
              <p class="vd-text-muted vd-mb-3">
                <code>VanduoMusicPlayer.init(root?)</code> auto-inits <code>[data-music-player]</code>; or
                <code>initPlayer(el, options)</code>, then <code>play/pause/toggle/next/previous(container)</code>.
                Events bubble as <code>musicplayer:*</code> DOM CustomEvents.
              </p>
            </template>
          </EngineSwitch>

          <h4 class="vd-mt-6">Options</h4>
          <div class="vd-table-responsive">
            <table class="vd-table vd-table-striped">
              <thead><tr><th>Option</th><th>Description</th></tr></thead>
              <tbody>
                <tr v-for="row in options" :key="row[0]"><td><code>{{ row[0] }}</code></td><td>{{ row[1] }}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </DocsLayout>
</template>
