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
import { 
  ENVIRONMENTS,
  buildWalletsSDK
} from '@immutable/imx-wallets-web-sdk';

// Defines the build params (environment)
const buildParams = { env: ENVIRONMENTS.ROPSTEN };

// Uses the helper function to get the SDK object instance
const walletsSdk = await buildWalletsSDK(buildParams);
```

> **NOTICE:** An environment is required in order to instantiate the `WalletsSDK` object on top of the correct Ethereum network. For this particular, the enum `ENVIRONMENTS` can be imported from the package and used for such purpose. Access the [supported environments reference](#supported-environments) to check which environments are currently supported.

#### Connect

The connection step takes care of communicating with the selected L1 and L2 providers, establishing the connection, and retrieving the signers for each one of them, letting the L1 and L2 signers be available in the `WalletsSDK` object through the `getL1Signer` and `getL2Signer` methods:

```ts
import { 
  ENVIRONMENTS,
  buildWalletsSDK,
  L1_PROVIDERS
} from '@immutable/imx-wallets-web-sdk';

// Defines the build params (environment)
const buildParams = { env: ENVIRONMENTS.ROPSTEN };

// Uses the helper function to get the SDK object instance
const walletsSdk = await buildWalletsSDK(buildParams);

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

### Supported Environments

  * `ENVIRONMENTS.ROPSTEN` - For testing and validation on the Ropsten Ethereum network.
  * `ENVIRONMENTS.MAINNET` - For the Mainnet Ethereum production network.

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
import { 
  ENVIRONMENTS,
  buildWalletsSDK,
  L1_PROVIDERS
} from '@immutable/imx-wallets-web-sdk';
import { getConfig, Workflows } from '@imtbl/core-sdk';

// Wallets SDK setup
const buildParams = { env: ENVIRONMENTS.ROPSTEN };
const walletsSdk = await buildWalletsSDK(buildParams);
const connectionParams = { provider: L1_PROVIDERS.METAMASK };
await walletsSdk.connect(connectionParams);

// Core SDK setup
const ethNetwork = 'ropsten';
const config = getConfig(ethNetwork);
const coreSdkWorkflows = new Workflows(config);

// Creates a fake object of type GetSignableTradeRequest (just for reference)
const fakeTradeRequest = {
  user: '0x00',   // Ethereum address of the submitting user
  order_id: 1000, // The ID of the maker order involved
};

// Executes the create trade method
const createTradeResponse = await coreSdkWorkflows.createTradeWithSigner(
  walletsSdk.getL1Signer(), // The L1 signer contained inside the WalletsSDK object
  walletsSdk.getL2Signer(), // The L2 signer contained inside the WalletsSDK object
  fakeTradeRequest,         // The trade request object
);
```

### Burn

> TBD

### Deposit

> TBD

### Mint

> TBD

### Orders

> TBD

### Registration

> TBD

### Withdraw

> TBD

## Compatibility Matrix

| Core SDK Typescript version  | Wallets SDK Web version |
| ---------------------------- | ----------------------- |
| `Pending`                    | `Pending`               |