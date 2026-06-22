import type { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';
import ChangelogPage from '@/pages/changelog.vue';
import KiloOssPage from '@/pages/kilo-oss.vue';
import DocsLandingPage from '@/pages/docs-landing.vue';
import QuickStartPage from '@/pages/quick-start.vue';
import PlaceholderPage from '@/pages/_placeholder.vue';

import ButtonPage from '@/pages/components/Button.vue';
import BadgePage from '@/pages/components/Badge.vue';
import AlertPage from '@/pages/components/Alert.vue';
import CardPage from '@/pages/components/Card.vue';
import ModalPage from '@/pages/components/Modal.vue';
import ToastPage from '@/pages/components/Toast.vue';
import TooltipPage from '@/pages/components/Tooltip.vue';
import TabsPage from '@/pages/components/Tabs.vue';
import AccordionPage from '@/pages/components/Accordion.vue';
import FlowPage from '@/pages/components/Flow.vue';
import ProgressPage from '@/pages/components/Progress.vue';
import SpinnerPage from '@/pages/components/Spinner.vue';
import CodeSnippetPage from '@/pages/components/CodeSnippet.vue';
import IconPage from '@/pages/components/Icon.vue';

import { nav } from '@/nav';

const componentPages: Record<string, ReturnType<typeof definePage>> = {
  button: ButtonPage,
  badge: BadgePage,
  alert: AlertPage,
  card: CardPage,
  modal: ModalPage,
  toast: ToastPage,
  tooltip: TooltipPage,
  tabs: TabsPage,
  accordion: AccordionPage,
  flow: FlowPage,
  progress: ProgressPage,
  spinner: SpinnerPage,
  'code-snippet': CodeSnippetPage,
  icon: IconPage,
};

function definePage<T>(component: T): T {
  return component;
}

const pageComponents: Record<string, ReturnType<typeof definePage>> = {
  home: HomePage,
  about: AboutPage,
  changelog: ChangelogPage,
  'kilo-oss': KiloOssPage,
  'docs-landing': DocsLandingPage,
  'quick-start': QuickStartPage,
};

export const buildRoutes = (): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = [];

  for (const page of nav.pages) {
    const component = pageComponents[page.id];
    if (!component) continue;
    routes.push({
      path: page.route,
      name: `page-${page.id}`,
      component,
      meta: { title: page.title, keywords: page.keywords },
    });
  }

  for (const tab of nav.tabs) {
    for (const category of tab.categories) {
      for (const section of category.sections) {
        const component = componentPages[section.id];
        if (!component) continue;
        routes.push({
          path: section.route,
          name: `section-${section.id}`,
          component,
          meta: {
            title: `${section.title} — ${category.title}`,
            keywords: section.keywords,
            category: category.title,
            sectionId: section.id,
          },
        });
      }
    }
  }

  routes.push({
    path: '/:pathMatch(.*)*',
    name: 'placeholder',
    component: PlaceholderPage,
    meta: { title: 'Coming soon', keywords: [] },
  });

  return routes;
};