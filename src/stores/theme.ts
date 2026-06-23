import { defineStore } from "pinia";
import { useTheme, type UseThemeReturn } from "@/composables/useTheme";

export const useThemeStore = defineStore("theme", () => {
  const api: UseThemeReturn = useTheme();
  return api;
});
