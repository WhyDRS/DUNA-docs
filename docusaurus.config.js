// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WhyDRS DAO',
  tagline: 'Not your name, not your shares. 🔐',
  favicon: 'imgs/brand/favicon.ico',

  url: 'https://dao.whydrs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WhyDRS', // Usually your GitHub org/user name.
  projectName: 'DAO Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          editUrl: 'https://github.com/WhyDRS/DAO-docs/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/WhyDRS/DAO-docs/tree/main/blog',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
        title: 'WhyDRS DAO',
        logo: {
          alt: 'Direct Register Your Shares to Protect Your Investment',
          src: 'imgs/brand/png/shield.png', // TODO - Make svg
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/whydrs/dao-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Lemmy',
                href: 'https://lemmy.whynotdrs.org',
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
                href: 'https://github.com/whydrs/database',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/whydrs/dao-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WhyDRS`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
