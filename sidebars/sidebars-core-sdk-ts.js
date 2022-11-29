const { url } = require('../docusaurus.config');

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
        'changelog',
        {
          type: 'link',
          label: 'Examples',
          href: `https://github.com/immutable/imx-core-sdk/tree/1.0.0/examples`,
        },
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-ts/1-0-0/classes/ImmutableX.ImmutableX.html`,
        },
        {
          type: 'link',
          label: 'Github',
          href: 'https://github.com/immutable/imx-core-sdk/tree/1.0.0'
        },
      ],
    },
  ],
};
