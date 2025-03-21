// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WhyDRS',
  tagline: 'Not your name, not your shares. 🔐',
  favicon: 'imgs/brand/favicon.ico',

  url: 'https://dao.whydrs.org',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WhyDRS',
  projectName: 'DAO Docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/WhyDRS/DUNA-docs/tree/main',
        },
        blog: {
          path: 'blog',
          routeBasePath: '/blog',
          blogTitle: 'DUNA Blog',
          blogDescription: 'Community DUNA posts',
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/WhyDRS/DUNA-docs/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        pages: {
          path: 'meetings',
          routeBasePath: '/meetings',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'imgs/brand/jpg/social-card.jpg',
      navbar: {
        title: 'WhyDRS',
        logo: {
          alt: 'Direct Register Your Shares to Protect Your Investment',
          src: 'imgs/brand/png/shield.png', // TODO - Make svg
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/meetings',
            label: 'Meetings',
            position: 'right'
          },
          {
            href: 'https://www.whydrs.org/advocacy',
            label: 'Advocate',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Repositories',
            items: [
              {
                label: 'Database',
                href: 'https://github.com/WhyDRS/Database',
              },
              {
                label: 'Taking Stock',
                href: 'https://github.com/WhyDRS/Taking-Stock',
              },
              {
                label: 'SEC Petitions',
                href: 'https://github.com/WhyDRS/SEC-Petitions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/orgs/WhyDRS/discussions',
              },
              {
                label: 'Discord',
                href: 'https://mee6.xyz/i/xyGz2buGJR',
              },
              {
                label: 'X',
                href: 'https://x.com/whydrs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Database',
                href: 'https://database.whydrs.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/whydrs/DUNA-docs',
              },
              {
                label: 'Podcast',
                href: 'https://linktr.ee/takingstockpodcast',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
