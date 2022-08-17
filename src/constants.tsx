export const SdkIdKey = 'imx-docs-core-sdk-id';
export interface SdkItem {
  id: number;
  sdkId: string;
  name: string;
  displayName: string;
  url: string;
}

export interface SdkList extends Array<SdkItem> {}

export const coreSDKs = [
  {
    id: 0,
    sdkId: 'sdks-core-sdk-ts',
    name: 'Core SDK TypeScript',
    displayName: 'Core SDK Typescript',
    url: '/sdk-docs/core-sdk-ts/overview',
  },
  {
    id: 1,
    sdkId: 'sdks-core-sdk-kotlin',
    name: 'Core SDK Kotlin',
    displayName: 'Core SDK Kotlin/JVM',
    url: '/sdk-docs/core-sdk-kotlin/overview',
  },
  {
    id: 2,
    sdkId: 'sdks-core-sdk-swift',
    name: 'Core SDK Swift',
    displayName: 'Core SDK Swift',
    url: '/sdk-docs/core-sdk-swift/overview',
  },
];

export const walletSDKs = [
  {
    // Starting from the end of coreSDK IDs because both
    // arrays will be concatenated as Switcher input
    id: 3,
    sdkId: 'sdks-wallet-sdk-web',
    name: 'Wallet SDK Web',
    displayName: 'Wallet SDK Web',
    url: '/sdk-docs/wallet-sdk-web/overview',
  },
  {
    id: 4,
    sdkId: 'sdks-wallet-sdk-android',
    name: 'Wallet SDK Android',
    displayName: 'Wallet SDK Android',
    url: '/sdk-docs/wallet-sdk-android/overview',
  },
];

export const linkSDK = [
  {
    id: 0,
    name: 'Link SDK',
    displayName: 'Link SDK reference',
    url: '/docs/sdk-api',
  },
];
