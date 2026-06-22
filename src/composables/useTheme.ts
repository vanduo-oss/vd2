import { onMounted, ref, type Ref } from 'vue';

export type ThemeName = 'light' | 'dark' | 'high-contrast';
export type RadiusName = 'compact' | 'normal' | 'loose';
export type FontName = 'inter' | 'system' | 'mono';

export interface ThemePreference {
  theme: ThemeName;
  primary: string;
  neutral: string;
  radius: RadiusName;
  font: FontName;
}

const STORAGE_KEY = 'vanduo-theme-preference';

const DEFAULTS: ThemePreference = {
  theme: 'light',
  primary: 'default',
  neutral: 'default',
  radius: 'normal',
  font: 'inter',
};

const isClient = (): boolean => typeof window !== 'undefined';

const readFromStorage = (): ThemePreference | null => {
  if (!isClient()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ThemePreference>;
    return { ...DEFAULTS, ...parsed };
  } catch {
    return null;
  }
};

export const readPersistedTheme = readFromStorage;

const writeToStorage = (prefs: ThemePreference): void => {
  if (!isClient()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* localStorage may be unavailable (private mode, quota) */
  }
};

const applyToHtml = (prefs: ThemePreference): void => {
  if (!isClient()) return;
  const root = document.documentElement;
  root.setAttribute('data-theme', prefs.theme);
  root.setAttribute('data-primary', prefs.primary);
  root.setAttribute('data-neutral', prefs.neutral);
  root.setAttribute('data-radius', prefs.radius);
  root.setAttribute('data-font', prefs.font);
};

export interface ThemeApi {
  theme: () => ThemeName;
  primary: () => string;
  neutral: () => string;
  radius: () => RadiusName;
  font: () => FontName;
  prefs: () => ThemePreference;
  setTheme: (theme: ThemeName) => void;
  setPrimary: (primary: string) => void;
  setNeutral: (neutral: string) => void;
  setRadius: (radius: RadiusName) => void;
  setFont: (font: FontName) => void;
  reset: () => void;
}

export interface UseThemeReturn extends ThemeApi {
  ready: Ref<boolean>;
}

export const useTheme = (): UseThemeReturn => {
  const state = ref<ThemePreference>({ ...DEFAULTS });
  const ready = ref(false);

  const update = (patch: Partial<ThemePreference>): void => {
    state.value = { ...state.value, ...patch };
    applyToHtml(state.value);
    writeToStorage(state.value);
  };

  onMounted(() => {
    const persisted = readFromStorage();
    if (persisted) state.value = persisted;
    applyToHtml(state.value);
    ready.value = true;
  });

  return {
    theme: () => state.value.theme,
    primary: () => state.value.primary,
    neutral: () => state.value.neutral,
    radius: () => state.value.radius,
    font: () => state.value.font,
    prefs: () => state.value,
    setTheme: (theme) => update({ theme }),
    setPrimary: (primary) => update({ primary }),
    setNeutral: (neutral) => update({ neutral }),
    setRadius: (radius) => update({ radius }),
    setFont: (font) => update({ font }),
    reset: () => {
      state.value = { ...DEFAULTS };
      applyToHtml(state.value);
      writeToStorage(state.value);
    },
    ready,
  };
};