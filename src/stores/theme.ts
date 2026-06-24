import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import {
  applyPreference,
  defaultPreference,
  defaultPrimary,
  isDefaultPrimary,
  loadPreference,
  persistPreference,
  type RadiusOption,
  type ThemeMode,
  type ThemePreference,
} from "@/composables/useTheme";

export const useThemeStore = defineStore("theme", () => {
  const prefs = reactive<ThemePreference>(defaultPreference());
  const ready = ref(false);

  const commit = (): void => {
    applyPreference(prefs);
    persistPreference(prefs);
  };

  /** Hydrate from localStorage; call once on the client after mount. */
  const init = (): void => {
    if (ready.value) return;
    Object.assign(prefs, loadPreference());
    applyPreference(prefs);
    ready.value = true;

    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (!mq || typeof mq.addEventListener !== "function") return;
      mq.addEventListener("change", () => {
        // Re-evaluate the auto-default primary when the OS scheme flips.
        if (prefs.theme === "system" && isDefaultPrimary(prefs.primary)) {
          prefs.primary = defaultPrimary("system");
          commit();
        }
      });
    }
  };

  const setTheme = (theme: ThemeMode): void => {
    // Keep auto-default primary in step with the chosen scheme.
    if (isDefaultPrimary(prefs.primary)) {
      prefs.primary = defaultPrimary(theme);
    }
    prefs.theme = theme;
    commit();
  };
  const setPrimary = (primary: string): void => {
    prefs.primary = primary;
    commit();
  };
  const setNeutral = (neutral: string): void => {
    prefs.neutral = neutral;
    commit();
  };
  const setRadius = (radius: RadiusOption): void => {
    prefs.radius = radius;
    commit();
  };
  const setFont = (font: string): void => {
    prefs.font = font;
    commit();
  };
  const reset = (): void => {
    Object.assign(prefs, defaultPreference());
    commit();
  };

  return {
    prefs,
    ready,
    theme: computed(() => prefs.theme),
    primary: computed(() => prefs.primary),
    neutral: computed(() => prefs.neutral),
    radius: computed(() => prefs.radius),
    font: computed(() => prefs.font),
    init,
    setTheme,
    setPrimary,
    setNeutral,
    setRadius,
    setFont,
    reset,
  };
});
