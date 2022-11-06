const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Wallet SDK iOS',
      items: [
        'overview',
        'installation',
        'quickstart',
        'additional-info',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/wallet-sdk-ios/0-1-0/`,
        },
        {
          type: 'link',
          label: 'Github',
          href: `https://github.com/immutable/imx-wallet-sdk-ios/tree/v0.1.0`,
        },
      ],
    },
  ],
};
