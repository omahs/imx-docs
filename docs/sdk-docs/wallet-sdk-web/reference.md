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

## Errors

Refer to the following list for the most common errors raised by the Wallet SDK and to get a guidance on how to solve them.

| Error message | Scenario | Solution |
| ------------- | -------- | -------- |
| `The L1 provider {L1Provider} is not a valid option.` | When an invalid L1 provider option was informed when calling `connect()`. | Provide a valid L1 provider option based on the [Supported L1 wallets](#supported-l1-wallets). |
| `The MetaMask provider was not found.` | When a `connect()` using MetaMask was attempted but most likely the MetaMask extension was not installed. | Install the MetaMask extension or provide another valid L1 provider option based on the [Supported L1 wallets](#supported-l1-wallets). |
| `You cannot connect to WalletConnect Provider because RPC is not defined.` | When a `connect()` using WalletConnect was attemped but the RPC was not provided. | Provide the RPC based on the [Quickstart example](#quickstart). |
| `The L2 IMX Wallet connection has failed.` | a `connect()` was attempted on the L2 but was not succeeded. | Retry a connection, and if the error persists, contact the support team. |

## Compatibility matrix

| Core SDK version | Wallet SDK version |
| :--------------: | :----------------: |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.2](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.2)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.3](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.3)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.4](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.4)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.5](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.5)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.6](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.6)  |
| [0.7.0](https://www.npmjs.com/package/@imtbl/core-sdk/v/0.7.0) | [0.1.7](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web/v/0.1.7)  |
