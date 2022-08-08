---
description: General Wallet SDK Web reference
id: reference
slug: /reference
tags: [wallet-sdk-web, reference]
---

# Reference

## Supported Environments

- `ENVIRONMENTS.DEVELOPMENT` For local development infrastructure. Usually combined with the Ropsten Ethereum network.
- `ENVIRONMENTS.STAGING` For testing and validation infrastructure. Usually combined with the Ropsten Ethereum
  network.
- `ENVIRONMENTS.PRODUCTION` For the live and fresh daily basis infrastructure. Usually combined with the Mainnet
  Ethereum network.

## Supported L1 Wallets

- `L1_PROVIDERS.WALLET_CONNECT` To connect using [WalletConnect](https://docs.walletconnect.com).
- `L1_PROVIDERS.METAMASK` To connect using [MetaMask](https://docs.metamask.io/guide).

## Supported L2 Wallets

- `L2_PROVIDERS.IMX_WALLET` To connect using the built-in L2 wallet solution.

## Events

The [Immutable X Wallet SDK package](https://www.npmjs.com/package/@imtbl/imx-wallet-sdk-web) make use of the [Event system](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) in order to provide meaningful indications of its current state through the emitter `walletSdkEvents` and the enum `WALLET_SDK_EVENTS`. Check out below the current list of events and examples on how to use them.

- `WALLET_SDK_EVENTS.CONNECTION_UPDATED` When the user connects a fresh wallet or opens the application with a wallet already connected before.
```ts
import {
  ENVIRONMENTS,
  WALLET_SDK_EVENTS,
  L1_PROVIDERS,
  WalletSDK,
  walletSdkEvents,
} from '@imtbl/imx-wallet-sdk-web';
import { Workflows } from '@imtbl/core-sdk';

const walletConnection: WalletConnection | null = null;

// Listens for connection notifications
walletSdkEvents.on(
  WALLET_SDK_EVENTS.CONNECTION_UPDATED,
  (updatedWalletConnection: WalletConnection) 
    => walletConnection = updatedWalletConnection;
);

// Connects to the wallet
async function connect(walletSdk: WalletSDK) {
  await walletSdk.connect({ provider: L1_PROVIDERS.METAMASK });
}

// Registers a user
async function registerUser(coreSdkWorkflows: Workflows) {
  if(!walletConnection) throw new Error('There is still no wallet connection available.');

  await coreSdkWorkflows.registerOffChain(walletConnection);
}
```
- `WALLET_SDK_EVENTS.WALLET_DISCONNECTED` When the user disconnects the wallet on purpose, changes the wallet itself or changes the network.


## Compatibility Matrix

| Core SDK Typescript version  | Wallets SDK Web version |
| ---------------------------- | ----------------------- |
| `0.7.0`                      | `0.1.2`                 |
| `0.7.0`                      | `0.1.3`                 |
