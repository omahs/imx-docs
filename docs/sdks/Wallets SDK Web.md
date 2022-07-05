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

To have the SDK up and running, 2 main steps are required: 
1. [Build](#build)
2. [Connect](#connect)

#### Build

The build step is the starting point and is the responsible to instantiate and provide the `WalletsSDK` object. To make it happen it is needed the 
call to `buildWalletsSDK` helper function, available in the package:

```ts
import { 
  ENVIRONMENTS,
  buildWalletsSDK
} from '@immutable/imx-wallets-web-sdk';

// Defines the build params (environment)
const buildParams = { env: ENVIRONMENTS.ROPSTEN };

// Uses the helper function to get the SDK object instance
const sdk = await buildWalletsSDK(buildParams);
```

> **NOTICE:** An environment is required in order to instantiate the `WalletsSDK` object on top of the correct Ethereum network. For this particular, the enum `ENVIRONMENTS` can be imported from the package and used for such purpose. Access the [supported environments reference](#supported-environments) to check which environments are currently supported.

#### Connect

The connection step takes care of to communicate with the selected L1 and L2 providers, stablish the connection and retrieve the signers for each one of them, letting
the L1 and L2 signers available in the `WalletsSDK` object through the `getL1Signer` and `getL2Signer` methods:

```ts
import { 
  ENVIRONMENTS,
  buildWalletsSDK,
  L1_PROVIDERS
} from '@immutable/imx-wallets-web-sdk';

// Defines the build params (environment)
const buildParams = { env: ENVIRONMENTS.ROPSTEN };

// Uses the helper function to get the SDK object instance
const sdk = await buildWalletsSDK(buildParams);

// Defines the connection params (L1 provider)
const connectionParams = { provider: L1_PROVIDERS.METAMASK };

// Connects to the desired wallets
await sdk.connect(connectionParams);

// Gets the L1 signer
const l1Signer = sdk.getL1Signer();

// Gets the L2 signer
const l2Signer = sdk.getL2Signer();
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