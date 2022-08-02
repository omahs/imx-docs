export const SdkIdKey = 'imx-docs-core-sdk-id';
export interface SdkItem {
  id: number;
  sdkId: string;
  name: string;
  displayName: string;
  url: string;
}

export interface SdkList extends Array<SdkItem> {}

export const sdks = [
  {
    id: 0,
    sdkId: 'sdks-core-sdk-ts',
    name: 'Core SDK TypeScript',
    displayName: 'Immutable Core SDK - Typescript',
    url: '/sdk-docs/core-sdk-ts/overview',
  },
  {
    id: 1,
    sdkId: 'sdks-core-sdk-kotlin',
    name: 'Core SDK Kotlin',
    displayName: 'Immutable Core SDK - Kotlin/JVM',
    url: '/sdk-docs/core-sdk-kotlin/overview',
  },
  {
    id: 2,
    sdkId: 'sdks-core-sdk-swift',
    name: 'Core SDK Swift',
    displayName: 'Immutable Core SDK - Swift',
    url: '/sdk-docs/core-sdk-swift/overview',
  },
  {
    id: 2,
    name: 'Core SDK Example',
    url: '/sdk-docs/core-sdk-example',
  },
];
