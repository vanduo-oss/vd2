import { test, expect } from '@playwright/test';

test.describe('VdSidenav interaction', () => {
  test('opens, traps focus, and closes on Escape', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/components/sidenav', { waitUntil: 'networkidle' });

    const trigger = page.getByRole('button', { name: 'Open Sidenav' }).first();
    await expect(trigger).toBeVisible();
    await trigger.click();

    const dialog = page.locator('aside.vd-sidenav');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-label', 'Menu');

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('emits close on backdrop click', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/components/sidenav', { waitUntil: 'networkidle' });

    await page.getByRole('button', { name: 'Open Sidenav' }).first().click();
    const dialog = page.locator('aside.vd-sidenav');
    await expect(dialog).toBeVisible();

    await page.locator('.vd-sidenav-overlay').click();
    await expect(dialog).toBeHidden();
  });
});

test.describe('VdOffcanvas interaction', () => {
  test('opens on trigger and closes on Escape', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/components/offcanvas', { waitUntil: 'networkidle' });

    const trigger = page.getByRole('button', { name: 'Right' }).first();
    await expect(trigger).toBeVisible();
    await trigger.click();

    const dialog = page.locator('aside.vd-offcanvas');
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });
});

test.describe('VdSticky interaction', () => {
  test('renders sticky content', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/components/sticky', { waitUntil: 'networkidle' });
    const sticky = page.locator('.vd-sticky').first();
    await expect(sticky).toBeVisible();
  });
});

test.describe('VdWaypoint interaction', () => {
  test('renders wrapper and observes sections', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/components/scrollspy', { waitUntil: 'networkidle' });
    const wrap = page.locator('[data-vd-waypoint]').first();
    await expect(wrap).toBeVisible();
    const sections = wrap.locator('[id]');
    await expect(sections.first()).toBeVisible();
  });
});
