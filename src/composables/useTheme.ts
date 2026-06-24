/**
 * Theme model for the Vue engine. Token *data* (palette/neutral/radius/font
 * options + defaults) is owned by @vanduo-oss/core — the design-system source of
 * truth shared with the legacy framework. This file keeps only the Vue-side
 * application logic that drives the same `data-*` attributes the framework CSS
 * reads. Re-exports core's data so vd2 consumers keep a single import surface.
 */
import {
  DEFAULTS,
  FONT_OPTIONS,
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  RADIUS_OPTIONS,
  THEME_MODES,
  type ColorDef,
  type FontDef,
  type RadiusOption,
  type ThemeMode,
} from "@vanduo-oss/core";

export type { ColorDef, FontDef, RadiusOption, ThemeMode };
export {
  DEFAULTS,
  FONT_OPTIONS,
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  RADIUS_OPTIONS,
  THEME_MODES,
};

export interface ThemePreference {
  theme: ThemeMode;
  primary: string;
  neutral: string;
  radius: RadiusOption;
  font: string;
}

const STORAGE_KEYS = {
  PRIMARY: "vanduo-primary-color",
  NEUTRAL: "vanduo-neutral-color",
  RADIUS: "vanduo-radius",
  FONT: "vanduo-font-preference",
  THEME: "vanduo-theme-preference",
} as const;

const isClient = (): boolean => typeof window !== "undefined";

const prefersDark = (): boolean => {
  if (!isClient() || typeof window.matchMedia !== "function") return false;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  return !!mq && mq.matches;
};

/** Default primary depends on the effective light/dark scheme. */
export const defaultPrimary = (theme: ThemeMode): string => {
  if (theme === "system") {
    return prefersDark() ? DEFAULTS.PRIMARY_DARK : DEFAULTS.PRIMARY_LIGHT;
  }
  return theme === "dark" ? DEFAULTS.PRIMARY_DARK : DEFAULTS.PRIMARY_LIGHT;
};

const read = (key: string, fallback: string): string => {
  if (!isClient()) return fallback;
  try {
    return window.localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
};

const write = (key: string, value: string): void => {
  if (!isClient()) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage may be unavailable (private mode, quota) */
  }
};

export const defaultPreference = (): ThemePreference => ({
  theme: DEFAULTS.THEME,
  primary: defaultPrimary(DEFAULTS.THEME),
  neutral: DEFAULTS.NEUTRAL,
  radius: DEFAULTS.RADIUS,
  font: DEFAULTS.FONT,
});

export const loadPreference = (): ThemePreference => {
  const theme = read(STORAGE_KEYS.THEME, DEFAULTS.THEME) as ThemeMode;
  const radius = read(STORAGE_KEYS.RADIUS, DEFAULTS.RADIUS) as RadiusOption;
  return {
    theme: THEME_MODES.includes(theme) ? theme : DEFAULTS.THEME,
    primary: read(STORAGE_KEYS.PRIMARY, defaultPrimary(theme)),
    neutral: read(STORAGE_KEYS.NEUTRAL, DEFAULTS.NEUTRAL),
    radius: RADIUS_OPTIONS.includes(radius) ? radius : DEFAULTS.RADIUS,
    font: read(STORAGE_KEYS.FONT, DEFAULTS.FONT),
  };
};

const isDefaultPrimary = (primary: string): boolean =>
  primary === DEFAULTS.PRIMARY_LIGHT || primary === DEFAULTS.PRIMARY_DARK;

/** Apply a full preference set to <html>, mirroring framework attribute logic. */
export const applyPreference = (prefs: ThemePreference): void => {
  if (!isClient()) return;
  const root = document.documentElement;

  // Keep auto-default primary aligned with the active scheme (black <-> amber).
  if (isDefaultPrimary(prefs.primary)) {
    prefs.primary = defaultPrimary(prefs.theme);
  }

  root.setAttribute("data-primary", prefs.primary);
  root.setAttribute("data-neutral", prefs.neutral);
  root.setAttribute("data-radius", prefs.radius);
  root.style.setProperty("--vd-radius-scale", prefs.radius);

  if (prefs.font === "system") {
    root.removeAttribute("data-font");
  } else {
    root.setAttribute("data-font", prefs.font);
  }

  if (prefs.theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", prefs.theme);
  }
};

export const persistPreference = (prefs: ThemePreference): void => {
  write(STORAGE_KEYS.THEME, prefs.theme);
  write(STORAGE_KEYS.PRIMARY, prefs.primary);
  write(STORAGE_KEYS.NEUTRAL, prefs.neutral);
  write(STORAGE_KEYS.RADIUS, prefs.radius);
  write(STORAGE_KEYS.FONT, prefs.font);
};

export { isDefaultPrimary };
