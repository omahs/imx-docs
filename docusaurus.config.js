// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable */
const { webpackPlugin } = require('./src/plugins')
const { ProvidePlugin } = require('webpack')

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  title: 'Immutable X Documentation',
  tagline:
    'Experience zero gas fees, instant trades, and carbon neutral NFTs for marketplaces, games, and applications without compromise. Build your NFT business in hours with our APIs.',
  url: 'https://docs.x.immutable.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'immutable', // Usually your GitHub org/user name.
  projectName: 'imx-docs', // Usually your repo name.

  plugins: [
    () => ({
      name: 'custom-webpack-config',
      configureWebpack(config) {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve('process/browser'),
            }),
          ],
          resolve: {
            fallback: {
              stream: require.resolve('stream-browserify'),
              path: require.resolve('path-browserify'),
              buffer: require.resolve('buffer/'),
              url: require.resolve('url/'),
            }
          },
        }
      },
    }),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/immutable/imx-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Immutable X Developer Documentation',
        logo: {
          alt: 'Immutable Logo',
          src: 'img/immutable_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/welcome',
            position: 'left',
            label: 'Documentation',
          },
          {
            position: 'left',
            label: 'Guides',
            type: 'doc',
            docId: 'guides/getting-started-guide',
          },
          // {
          //   position: 'left',
          //   label: 'API Reference',
          //   to: '/reference',
          // },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discourse',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/6GjgPkp464',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Immutable',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@immutablex',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/immutable',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Immutable.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      algolia: {
        appId: '2KKA2HFUSD',
        apiKey: '2cb7547e9bf1ee7ee1b033acb6387c1d', // Public API key: it is safe to commit it
        indexName: 'prod_imxdocs',
        contextualSearch: true,
      }
    }),
}

module.exports = config
