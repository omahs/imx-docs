---
title: "Wallets SDK Web"
slug: "/imx-wallets-sdk-web"
---

## Github

Find the [Immutable Wallets SDK Web on Github](https://github.com/immutable/imx-wallets-web-sdk) <!-- https://github.com/immutable/imx-wallets-sdk-web -->

## Installation

Install the package with:

<!-- @immutable/imx-wallets-sdk-web -->
```sh
npm install @immutable/imx-wallets-web-sdk --save
```

## Usage

### Setup: Build And Connect

Two main steps are required to have the SDK up and running:
1. [Build](#build)
2. [Connect](#connect)

#### Build

The build step is the starting point and is responsible for instantiating and providing the `WalletsSDK` object. To make it happen it is needed the
call to `buildWalletsSDK` helper function, available in the package:

```ts
import { buildWalletsSDK } from '@immutable/imx-wallets-web-sdk';

// Uses the helper function to get the SDK object instance
const walletsSdk = await buildWalletsSDK();
```

#### Connect

The connection step takes care of communicating with the selected L1 and L2 providers, establishing the connection, and retrieving the signers for each one of them, letting the L1 and L2 signers be available in the `WalletsSDK` object through the `getL1Signer` and `getL2Signer` methods:

```ts
import { L1_PROVIDERS, buildWalletsSDK } from '@immutable/imx-wallets-web-sdk';

// Uses the helper function to get the SDK object instance
const walletsSdk = await buildWalletsSDK();

// Defines the connection params (L1 provider)
const connectionParams = { provider: L1_PROVIDERS.METAMASK };
// Connects to the desired wallets
await walletsSdk.connect(connectionParams);

// Gets the L1 signer
const l1Signer = walletsSdk.getL1Signer();
// Gets the L2 signer
const l2Signer = walletsSdk.getL2Signer();
```

> **NOTICE:** L1 provider is the only selectable at this point, and it can be found on the enum `L1_PROVIDERS` available in package. The L2 provider also has an enum (`L2_PROVIDERS`) but it is always resolved by default to `L2_PROVIDERS.IMX_WALLET` which is the SDK built-in L2 wallet solution.
To check the available options for both L1 and L2 providers, access the [supported L1 wallets reference](#supported-l1-wallets) and [supported L2 wallets reference](#supported-l2-wallets).

### IsConnected

> TBD

### Disconnect

> TBD

## Reference

### Supported L1 Wallets

  * `L1_PROVIDERS.METAMASK` - To make use of the MetaMask wallets tool.

### Supported L2 Wallets

  * `L2_PROVIDERS.IMX_WALLET` - To make use of the SDK built-in L2 wallet solution.

## Code Examples

Refer to the following code examples to get clarification on how to use the Core SDK workflows by using the signers provided by the Wallets SDK.

> :warning: The following examples make use of a Core SDK package version compatible with Wallets SDK integration.
To check versions of Core SDK which currently accepts the Wallets SDK integration as well as the whole compatibility scheme, access the [compatibility matrix](#compatibility-matrix).

### Buy (Create Trade)

```ts
import { L1_PROVIDERS, buildWalletsSDK } from '@immutable/imx-wallets-web-sdk';
import { getConfig, Workflows } from '@imtbl/core-sdk';

// Wallets SDK setup
const walletsSdk = await buildWalletsSDK();
await walletsSdk.connect({ provider: L1_PROVIDERS.METAMASK });

// Gets L1 and L2 signers from the WalletsSDK object 
const l1Signer = walletsSdk.getL1Signer();
const l2Signer = walletsSdk.getL2Signer();

// Core SDK setup
const ethNetwork = 'ropsten';
const config = getConfig(ethNetwork);
const coreSdkWorkflows = new Workflows(config);

// Registers the user off-chain if needed
await coreSdkWorkflows.registerOffChainWithSigner(l1Signer, l2Signer);

// Creates a fake object of type GetSignableTradeRequest (just for reference)
const fakeTradeRequest = {
  user: '0x00',   // Ethereum address of the submitting user
  order_id: 1000, // The ID of the maker order involved
};

// Executes the create trade method
const createTradeResponse = await coreSdkWorkflows.createTradeWithSigner(
  l1Signer, 
  l2Signer, 
  fakeTradeRequest,
);
```

## Compatibility Matrix

| Core SDK Typescript version  | Wallets SDK Web version |
| ---------------------------- | ----------------------- |
| `Pending`                    | `Pending`               |