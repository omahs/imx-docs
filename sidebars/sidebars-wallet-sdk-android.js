const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Wallet SDK Android',
      items: [
        'overview',
        'installation',
        'quickstart',
        'additional-info',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/wallet-sdk-android/0-4-0/`,
        },
      ],
    },
  ],
};
