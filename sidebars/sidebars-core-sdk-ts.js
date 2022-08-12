const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK TypeScript',
      items: [
        'overview',
        'installation',
        'authentication',
        'quickstart',
        'workflows',
        'additional-info',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-ts/0-6-0/`,
        },
      ],
    },
  ],
};
