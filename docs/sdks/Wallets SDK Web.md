---
title: "Wallets SDK Web"
slug: "/imx-wallets-sdk-web"
---

## Github

Find the <a href="https://github.com/immutable/imx-wallets-sdk-web">Immutable Wallets SDK Web on Github</a>.

## Installation

Install the package with:

```sh
npm install @imtbl/imx-wallets-sdk-web --save
```

## Usage

### Setup: Build And Connect

Two main steps are required to have the SDK up and running:

1. [Build](#build)
2. [Connect](#connect)

#### Build

The build step is the starting point and is responsible for instantiating and providing the `WalletsSDK` object. To make it happen it is needed to import the `WalletsSDK` and call its static `build` method:

```ts
import {
  ENVIRONMENTS,
  WalletsSDK,
} from '@imtbl/imx-wallets-sdk-web';

(async () => {
  // Uses the static "build" function to get the SDK object instance
  const walletsSdk = await WalletsSDK.build({ env: ENVIRONMENTS.STAGING });
})();

(async () => {
  // If you want to support WalletConnect, make sure to set your RPC config as well
  // Reference: https://docs.walletconnect.com/quick-start/dapps/web3-provider#provider-options
  const walletsSdk = await WalletsSDK.build({
    env: ENVIRONMENTS.STAGING,
    rpc: {
      1: "https://mainnet.mycustomnode.com",
    }
  });
})();
```

> **NOTICE:** An environment is required to put the `WalletsSDK` object running into the correct infrastructure. For this particular, the enum `ENVIRONMENTS` can be imported from the package and used for such purpose. Access the [supported environments reference](#supported-environments) to check which environments are currently supported.

#### Connect

The connection step takes care of communicating with the selected L1 and L2 providers, establishing the connection, and retrieving the signers for each one of them, letting the L1 and L2 signers available in the `WalletConnection` object through the `getWalletConnection` method:
<!-- TODO: The WalletConnection is also returned by the connection function itself. Document it properly. -->

> **NOTICE:** Only the L1 provider is selectable at this point, the supported providers can be found on the enum `L1_PROVIDERS`. The L2 provider also has an enum (`L2_PROVIDERS`) but it is always resolved by default to `L2_PROVIDERS.IMX_WALLET` which is the SDK built-in L2 wallet solution. To check the available options for both L1 and L2 providers, access the [supported L1 wallets reference](#supported-l1-wallets) and [supported L2 wallets reference](#supported-l2-wallets).

```ts
import {
  ENVIRONMENTS,
  L1_PROVIDERS,
  WalletsSDK,
} from '@imtbl/imx-wallets-sdk-web';

(async () => {
  // Defines the connection params (L1 provider) for MetaMask
  await walletsSdk.connect({ provider: L1_PROVIDERS.METAMASK });
  // Or WalletConnect
  await walletsSdk.connect({ provider: L1_PROVIDERS.WALLET_CONNECT });
  
  // Gets the "WalletConnection" object which contains the L1 and L2 signers
  const walletConnection = walletsSdk.getWalletConnection();
})();
```

### IsConnected

> TBD

### Disconnect

> TBD

## Reference

### Supported Environments

* `ENVIRONMENTS.DEVELOPMENT` - For local development infrastructure. Usually combined with the Ropsten Ethereum network.
* `ENVIRONMENTS.STAGING` - For testing and validation infrastructure. Usually combined with the Ropsten Ethereum
  network.
* `ENVIRONMENTS.PRODUCTION` - For the live and fresh daily basis infrastructure. Usually combined with the Mainnet
  Ethereum network.

### Supported L1 Wallets

* `L1_PROVIDERS.METAMASK` - To connect using <a href="https://docs.metamask.io/guide/">MetaMask</a>.
* `L1_PROVIDERS.WALLET_CONNECT` - To connect using <a href="https://docs.walletconnect.com/">WalletConnect</a>.

### Supported L2 Wallets

* `L2_PROVIDERS.IMX_WALLET` - Built-in L2 wallet solution.

## Code Examples

### Workflows

Refer to the following code examples to understand how to use the [Core SDK](/docs/imx-core-sdk-ts) workflows and signers provided by the Wallets SDK.

> :warning: The following examples use a Core SDK package version compatible with Wallets SDK integration.
> 
> Access the [compatibility matrix](#compatibility-matrix) to check versions of Core SDK, which currently accepts the Wallets SDK integration and the whole compatibility scheme.

#### Buy (Create Trade)

```ts
import {
  ENVIRONMENTS,
  L1_PROVIDERS,
  WalletsSDK,
} from '@imtbl/imx-wallets-sdk-web';
import { getConfig, Workflows } from '@imtbl/core-sdk';

(async () => {
  // Sets up Wallets SDK
  const walletsSdk = await WalletsSDK.build({ env: ENVIRONMENTS.STAGING });
  await walletsSdk.connect({ provider: L1_PROVIDERS.METAMASK });

  // Gets the "WalletConnection" object which contains the L1 and L2 signers
  const walletConnection = walletsSdk.getWalletConnection();

  // Sets up Core SDK
  const config = getConfig('ropsten');
  const coreSdkWorkflows = new Workflows(config);

  // Registers the user off-chain if needed
  await coreSdkWorkflows.registerOffChain(walletConnection);

  // Creates a fake object of type GetSignableTradeRequest (just for reference)
  const fakeTradeRequest = {
    user: '0x00',   // Ethereum address of the submitting user
    order_id: 1000, // The ID of the maker order involved
  };

  // Executes the create trade method
  const createTradeResponse = await coreSdkWorkflows.createTrade(
    walletConnection,
    fakeTradeRequest,
  );
})();
```

## Compatibility Matrix

| Core SDK Typescript version  | Wallets SDK Web version |
| ---------------------------- | ----------------------- |
| `Pending`                    | `Pending`               |
