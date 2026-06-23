import { test, expect } from '@playwright/test';

interface Route {
  readonly vd2Path: string;
  readonly label: string;
}

const ROUTES: readonly Route[] = [
  { vd2Path: '/', label: 'home' },
  { vd2Path: '/about', label: 'about' },
  { vd2Path: '/changelog', label: 'changelog' },
  { vd2Path: '/kilo-oss', label: 'kilo-oss' },
  { vd2Path: '/quick-start', label: 'quick-start' },
  { vd2Path: '/docs-landing', label: 'docs-landing' },
  { vd2Path: '/components/button', label: 'components-button' },
  { vd2Path: '/components/badge', label: 'components-badge' },
  { vd2Path: '/components/alert', label: 'components-alert' },
  { vd2Path: '/components/card', label: 'components-card' },
  { vd2Path: '/components/modal', label: 'components-modal' },
  { vd2Path: '/components/toast', label: 'components-toast' },
  { vd2Path: '/components/tooltip', label: 'components-tooltip' },
  { vd2Path: '/components/tabs', label: 'components-tabs' },
  { vd2Path: '/components/accordion', label: 'components-accordion' },
  { vd2Path: '/components/flow', label: 'components-flow' },
  { vd2Path: '/components/progress', label: 'components-progress' },
  { vd2Path: '/components/spinner', label: 'components-spinner' },
  { vd2Path: '/components/code-snippet', label: 'components-code-snippet' },
  { vd2Path: '/components/icon', label: 'components-icon' },
];

test.describe('Visual parity', () => {
  for (const route of ROUTES) {
    test(`vd2 ${route.vd2Path} baseline regression`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(route.vd2Path, { waitUntil: 'networkidle' });
      await expect(page).toHaveScreenshot(`vd2-${route.label}.png`, {
        maxDiffPixelRatio: 0.03,
        animations: 'disabled',
      });
    });
  }
});
