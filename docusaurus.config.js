// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const { ProvidePlugin } = require('webpack');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const pageOptions = {
  sidebarCollapsible: false,
  showLastUpdateTime: true,
};

/** @type {import('@docusaurus/types').Config} */
const configuration = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  title: 'Immutable X Documentation',
  tagline:
    'Experience zero gas fees, instant trades, and carbon neutral NFTs for marketplaces, games, and applications without compromise. Build your NFT business in hours with our APIs.',
  url: 'https://docs.x.immutable.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'immutable', // Usually your GitHub org/user name.
  projectName: 'imx-docs', // Usually your repo name.
  staticDirectories: ['api-docs', 'static'],
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
            },
          },
        };
      },
    }),
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/sdk-docs/core-sdk-ts/', // path to the markdown files
        routeBasePath: '/sdk-docs/core-sdk-ts', // URL path to rewrite in the browser
        id: 'sdks-core-sdk-ts', // doc instance id
        sidebarPath: require.resolve('./sidebars/sidebars-core-sdk-ts.js'),
        includeCurrentVersion: false,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/sdk-docs/core-sdk-kotlin/',
        routeBasePath: '/sdk-docs/core-sdk-kotlin',
        id: 'sdks-core-sdk-kotlin',
        sidebarPath: require.resolve('./sidebars/sidebars-core-sdk-kotlin.js'),
        // includeCurrentVersion: false, // enable this when Kotlin docs are versioned
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/sdk-docs/core-sdk-swift/',
        routeBasePath: '/sdk-docs/core-sdk-swift',
        id: 'sdks-core-sdk-swift',
        sidebarPath: require.resolve('./sidebars/sidebars-core-sdk-swift.js'),
        // includeCurrentVersion: false, // enable this when Swift docs are versioned
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/sdk-docs/wallet-sdk-android/',
        routeBasePath: '/sdk-docs/wallet-sdk-android',
        id: 'sdks-wallet-sdk-android',
        sidebarPath: require.resolve(
          './sidebars/sidebars-wallet-sdk-android.js'
        ),
        // includeCurrentVersion: false, // enable this when Android docs are versioned
        ...pageOptions,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/main',
          routeBasePath: '/docs',
          id: 'default',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
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
        gtag: {
          trackingID: 'G-4JBHZ7F06X',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Immutable Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'doc',
            docId: 'overview/welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/reference',
            position: 'left',
            label: 'APIs',
          },
          {
            to: '/docs/sdks',
            position: 'left',
            label: 'SDKs',
          },
          {
            type: 'html',
            position: 'left',
            value: '<hr/>',
            className: 'custom_sidebar_menu hr',
          },
          {
            to: 'https://support.immutable.com/hc/en-us/articles/4405227590799-Immutable-X-Whitepaper',
            label: 'IMX Whitepaper',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
          {
            to: 'https://support.immutable.com/hc/en-us/articles/4404531555855-Immutable-X-Token',
            label: 'IMX Tokenomics',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
          {
            to: 'https://immutascan.io/',
            label: 'Immutascan.io',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
          {
            to: 'https://www.immutable.com/careers',
            label: 'Careers at Immutable',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      algolia: {
        appId: '9WZROGGS1R',
        apiKey: '68314d39481ee96c026affcd3b8d174e', // Public API key: it is safe to commit it
        indexName: 'immutable-x',
        contextualSearch: true,
      },
    }),
  scripts: [
    {
      src: 'https://survey.survicate.com/workspaces/eda6c86ea6ecb85e8b2eb630f344dcd5/web_surveys.js',
      async: true,
    },
  ],
  customFields: {
    survicate: {
      surveyId: process.env.SURVICATE_DQS_SURVEY_ID,
      starRatingQuestionId:
        process.env.SURVICATE_DQS_SURVEY_STAR_RATING_QUESTION_ID,
    },
  },
};

module.exports = configuration;
