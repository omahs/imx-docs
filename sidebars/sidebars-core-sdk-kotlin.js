const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK Kotlin',
      items: [
        'overview',
        'installation',
        'quickstart',
        'sdk-functions',
        'additional-info',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-kotlin/1.0.0-beta.1/`,
        },
        {
          type: 'link',
          label: 'Github',
          href: 'https://github.com/immutable/imx-core-sdk-kotlin-jvm/tree/v1.0.0-beta.1'
        },
      ],
    },
  ],
};
