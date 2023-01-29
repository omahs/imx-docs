const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK C Sharp',
      items: [
        "overview",
        "installation",
        "initialization",
        "additional-info",
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-csharp/0-1-0/docs`,
        },
        {
          type: 'link',
          label: 'Github',
          href: `https://github.com/immutable/imx-core-sdk-csharp`,
        },
      ],
    },
  ],
};
