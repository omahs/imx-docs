const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK Golang',
      items: [
        "overview",
        "installation",
        "initialization",
        "additional-info",
        {
          type: 'link',
          label: 'Examples',
          href: `https://github.com/immutable/imx-core-sdk-golang/tree/v1.0.0-beta.1/imx/examples`,
        },
        {
          type: 'link',
          label: 'API client reference',
          href: `${url}/sdk-references/core-sdk-golang/1-0-0-beta-1/apiclient/`,
        },
        {
          type: 'link',
          label: 'Package reference',
          href: `https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v1.0.0-beta.1`,
        },
        {
          type: 'link',
          label: 'Github',
          href: `https://github.com/immutable/imx-core-sdk-golang/tree/v1.0.0-beta.1`,
        },
      ],
    },
  ],
};
