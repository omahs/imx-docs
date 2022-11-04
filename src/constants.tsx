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
    displayName: 'Core SDK TypeScript',
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
  {
    id: 3,
    sdkId: 'sdks-core-sdk-golang',
    name: 'Core SDK Golang',
    displayName: 'Core SDK Golang',
    url: '/sdk-docs/core-sdk-golang/overview',
  },
];

export const walletSDKs = [
  {
    // Starting from the end of coreSDK IDs because both
    // arrays will be concatenated as Switcher input
    id: 4,
    sdkId: 'sdks-wallet-sdk-web',
    name: 'Wallet SDK Web',
    displayName: 'Wallet SDK Web',
    url: '/sdk-docs/wallet-sdk-web/overview',
  },
  {
    id: 5,
    sdkId: 'sdks-wallet-sdk-android',
    name: 'Wallet SDK Android',
    displayName: 'Wallet SDK Android',
    url: '/sdk-docs/wallet-sdk-android/overview',
  },
  {
    id: 6,
    sdkId: 'sdks-wallet-sdk-ios',
    name: 'Wallet SDK iOS',
    displayName: 'Wallet SDK iOS',
    url: '/sdk-docs/wallet-sdk-ios/overview',
  },
];

export const jsSDK = [
  {
    id: 0,
    name: 'JS SDK',
    displayName: 'JS SDK reference',
    url: '/docs/integrate-your-application',
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

export const sdkIds = {
  coreTypescript: coreSDKs.find((sdk) => sdk.id === 0).sdkId,
  coreKotlin: coreSDKs.find((sdk) => sdk.id === 1).sdkId,
  coreSwift: coreSDKs.find((sdk) => sdk.id === 2).sdkId,
  coreGolang: coreSDKs.find((sdk) => sdk.id === 3).sdkId,
  walletWeb: walletSDKs.find((sdk) => sdk.id === 4).sdkId,
  walletAndroid: walletSDKs.find((sdk) => sdk.id === 5).sdkId,
  walletIOS: walletSDKs.find((sdk) => sdk.id === 6).sdkId,
};
