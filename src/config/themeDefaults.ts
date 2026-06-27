import { DEFAULTS as CORE_DEFAULTS } from "@vanduo-oss/core";

/** vd2 docs site overrides — core remains the generic Vanduo baseline. */
export const SITE_THEME_DEFAULTS = {
  ...CORE_DEFAULTS,
  PRIMARY_DARK: "blue",
} as const;
