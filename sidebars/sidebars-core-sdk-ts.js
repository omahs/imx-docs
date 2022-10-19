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
        'additional-info',
        'changelog',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-ts/1.0.0-beta.3/classes/ImmutableX.ImmutableX.html`,
        },
      ],
    },
  ],
};
