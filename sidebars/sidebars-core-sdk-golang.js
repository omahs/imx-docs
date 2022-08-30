const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK Golang',
      items: [
        'overview',
        'installation',
        'authentication',
        'quickstart',
        'workflows',
        'additional-info',
        {
          type: 'link',
          label: 'Examples',
          href: `https://github.com/immutable/imx-core-sdk-golang/tree/main/examples`,
        },
        {
          type: 'link',
          label: 'API client reference',
          href: `${url}/sdk-references/core-sdk-golang/0-1-0/apiclient/`,
        },
        {
          type: 'link',
          label: 'Package reference',
          href: `https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang/`,
        },
      ],
    },
  ],
};
