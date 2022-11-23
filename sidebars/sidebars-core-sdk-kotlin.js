const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK Kotlin',
      items: [
        'overview',
        'installation',
        // 'authentication', // auth instructions included in installation docs
        'quickstart',
        'sdk-functions',
        'additional-info',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-kotlin/0-6-0/`,
        },
        {
          type: 'link',
          label: 'Github',
          href: 'https://github.com/immutable/imx-core-sdk-kotlin-jvm/tree/0.6.0'
        },
      ],
    },
  ],
};
