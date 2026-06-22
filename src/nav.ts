export interface NavSection {
  id: string;
  title: string;
  route: string;
  icon?: string;
  keywords: string[];
  file?: string;
}

export interface NavCategory {
  id: string;
  title: string;
  icon?: string;
  sections: NavSection[];
}

export interface NavTab {
  id: string;
  title: string;
  icon?: string;
  categories: NavCategory[];
}

export interface NavPage {
  id: string;
  title: string;
  route: string;
  icon?: string;
  keywords: string[];
}

export interface NavTree {
  pages: NavPage[];
  tabs: NavTab[];
}

export const nav: NavTree = {
  pages: [
    {
      id: 'home',
      title: 'Home',
      route: '/',
      icon: 'house',
      keywords: ['home', 'vanduo', 'framework'],
    },
    {
      id: 'docs-landing',
      title: 'Docs',
      route: '/docs-landing',
      icon: 'book',
      keywords: ['docs', 'documentation', 'guide'],
    },
    {
      id: 'quick-start',
      title: 'Quick start',
      route: '/quick-start',
      icon: 'lightning',
      keywords: ['quickstart', 'install', 'setup'],
    },
    {
      id: 'about',
      title: 'About',
      route: '/about',
      icon: 'info',
      keywords: ['about', 'vanduo', 'mission'],
    },
    {
      id: 'changelog',
      title: 'Changelog',
      route: '/changelog',
      icon: 'clock',
      keywords: ['changelog', 'releases', 'versions'],
    },
    {
      id: 'kilo-oss',
      title: 'kilo-oss',
      route: '/kilo-oss',
      icon: 'star',
      keywords: ['kilo', 'oss', 'open source'],
    },
  ],
  tabs: [
    {
      id: 'components',
      title: 'Components',
      icon: 'squares-four',
      categories: [
        {
          id: 'core',
          title: 'Core',
          icon: 'cube',
          sections: [
            {
              id: 'button',
              title: 'Button',
              route: '/components/button',
              icon: 'cursor-click',
              keywords: ['button', 'click', 'cta'],
              file: 'components/button.html',
            },
            {
              id: 'badge',
              title: 'Badge',
              route: '/components/badge',
              icon: 'tag',
              keywords: ['badge', 'tag', 'pill'],
              file: 'components/badge.html',
            },
            {
              id: 'alert',
              title: 'Alert',
              route: '/components/alert',
              icon: 'warning',
              keywords: ['alert', 'notice', 'banner'],
              file: 'components/alert.html',
            },
            {
              id: 'card',
              title: 'Card',
              route: '/components/card',
              icon: 'credit-card',
              keywords: ['card', 'panel', 'container'],
              file: 'components/card.html',
            },
          ],
        },
        {
          id: 'feedback',
          title: 'Feedback',
          icon: 'chat-circle',
          sections: [
            {
              id: 'modal',
              title: 'Modal',
              route: '/components/modal',
              icon: 'rectangle',
              keywords: ['modal', 'dialog', 'overlay'],
              file: 'components/modal.html',
            },
            {
              id: 'toast',
              title: 'Toast',
              route: '/components/toast',
              icon: 'bell',
              keywords: ['toast', 'notification', 'snackbar'],
              file: 'components/toast.html',
            },
            {
              id: 'tooltip',
              title: 'Tooltip',
              route: '/components/tooltip',
              icon: 'chat-text',
              keywords: ['tooltip', 'hover', 'hint'],
              file: 'components/tooltip.html',
            },
          ],
        },
        {
          id: 'interactive',
          title: 'Interactive',
          icon: 'hand-pointing',
          sections: [
            {
              id: 'tabs',
              title: 'Tabs',
              route: '/components/tabs',
              icon: 'tabs',
              keywords: ['tabs', 'tab', 'segmented'],
              file: 'components/tabs.html',
            },
            {
              id: 'accordion',
              title: 'Accordion',
              route: '/components/accordion',
              icon: 'list',
              keywords: ['accordion', 'collapse', 'expand'],
              file: 'components/accordion.html',
            },
            {
              id: 'flow',
              title: 'Flow',
              route: '/components/flow',
              icon: 'slideshow',
              keywords: ['flow', 'carousel', 'slideshow'],
              file: 'components/flow.html',
            },
          ],
        },
        {
          id: 'primitives',
          title: 'Primitives',
          icon: 'shapes',
          sections: [
            {
              id: 'progress',
              title: 'Progress',
              route: '/components/progress',
              icon: 'progress-bar',
              keywords: ['progress', 'bar', 'loading'],
              file: 'components/progress.html',
            },
            {
              id: 'spinner',
              title: 'Spinner',
              route: '/components/spinner',
              icon: 'spinner',
              keywords: ['spinner', 'loader', 'spinner-gap'],
              file: 'components/spinner.html',
            },
            {
              id: 'code-snippet',
              title: 'Code snippet',
              route: '/components/code-snippet',
              icon: 'code',
              keywords: ['code', 'snippet', 'highlight'],
              file: 'components/code-snippet.html',
            },
            {
              id: 'icon',
              title: 'Icon',
              route: '/components/icon',
              icon: 'icons',
              keywords: ['icon', 'phosphor', 'glyph'],
              file: 'components/icon.html',
            },
          ],
        },
      ],
    },
  ],
};

export const flattenNav = (tree: NavTree): NavSection[] => {
  const sections: NavSection[] = [];
  for (const tab of tree.tabs) {
    for (const category of tab.categories) {
      for (const section of category.sections) {
        sections.push(section);
      }
    }
  }
  return sections;
};