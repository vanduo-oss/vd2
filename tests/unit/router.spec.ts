import { describe, expect, it } from 'vitest';
import { routes } from '@/router';

describe('router', () => {
  it('exports a non-empty route array', () => {
    expect(routes.length).toBeGreaterThan(0);
  });

  it('every route has a meta.title', () => {
    for (const route of routes) {
      expect(route.meta?.title).toBeTypeOf('string');
    }
  });
});