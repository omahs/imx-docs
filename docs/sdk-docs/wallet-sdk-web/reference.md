---
description: General Wallet SDK reference
id: reference
slug: /reference
tags: [wallet-sdk-web, reference]
keywords: [imx-wallets]
---

# Reference

## Supported environments

To facilitate the environment changes, there is a provided list of enums that helps to control the environments/networks used.

- `ENVIRONMENTS.DEVELOPMENT` For local development infrastructure. Usually combined with the Ropsten/Goerli Ethereum network.
- `ENVIRONMENTS.STAGING` For testing and validation infrastructure. Usually combined with the Ropsten/Goerli Ethereum network.
- `ENVIRONMENTS.PRODUCTION` For the live and fresh daily basis infrastructure. Usually combined with the Mainnet Ethereum network.

:::danger ROPSTEN DEPRECATION
Ropsten network is set to be deprecated in the near future.
:::

## Supported L1 wallets

- `L1_PROVIDERS.WALLET_CONNECT` To connect using [WalletConnect](https://docs.walletconnect.com).
- `L1_PROVIDERS.METAMASK` To connect using [MetaMask](https://docs.metamask.io/guide).

## Supported events

To help keep the application up to date with possible wallet changes externally triggered by the user, the Wallet SDK uses the event system to provide meaningful indications of its current state through the emitter `walletSdkEvents` and the enum `WALLET_SDK_EVENTS`. Check out below the current list of events.

- `WALLET_SDK_EVENTS.CONNECTION_UPDATED` When the user connects a fresh wallet or opens the application with a wallet already connected before.
- `WALLET_SDK_EVENTS.WALLET_DISCONNECTED` When the user disconnects the wallet on purpose, changes the wallet itself or changes the network.

:::note
Check out the [Events examples](/sdk-docs/wallet-sdk-web/code-examples#events) for code examples.
:::

<!-- ## Error dictionary -->
<!-- TODO: TBD -->

## Compatibility matrix

| Core SDK version                                               | Wallet SDK version                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.2](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.2)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.3](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.3)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.4](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.4)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.5](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.5)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.6](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.6)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.7](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.7)  |
