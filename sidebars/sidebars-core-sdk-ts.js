const { url } = require('../docusaurus.config');
const { coreSDKs } = require('../src/constants.tsx');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK TypeScript',
      items: [
        'overview',
        'installation',
        'initialization',
        'metadata-refresh',
        'additional-info',
        'core-sdk-migration-guide',
        'changelog',
        {
          type: 'link',
          label: 'Examples',
          href: `https://github.com/immutable/imx-core-sdk/tree/827da9438d3be96852c8391b5a44950f4582a1be/examples`,
        },
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-ts/1.0.0-beta.3/classes/ImmutableX.ImmutableX.html`,
        },
        {
          type: 'link',
          label: 'Github',
          href: 'https://github.com/immutable/imx-core-sdk/tree/v1.0.0-beta.3'
        },
      ],
    },
  ],
};
