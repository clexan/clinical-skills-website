import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kabinet Vještina',
  tagline: 'Simulation of Clinical Skills - A Practical Guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://css-handbook.netlify.app',
  baseUrl: '/',

  organizationName: 'medri-rijeka',
  projectName: 'css-handbook',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'handbook',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/handbook',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Kabinet Vještina',
      logo: {
        alt: 'Kabinet Vještina Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/handbook',
          label: 'Handbook',
          position: 'left',
        },
        {
          to: '/',
          label: 'About',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {
              label: 'Open Chapters',
              to: '/handbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kabinet Vještina`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
