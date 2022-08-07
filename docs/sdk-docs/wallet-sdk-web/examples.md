---
description: Examples using the Wallet SDK Web
id: code-examples
slug: /code-examples
tags: [wallet-sdk-web, code-examples]
---

# Examples

Refer to the following code examples to understand how to use the [Core SDK Typescript](/sdk-docs/core-sdk-ts) workflows with the `WalletConnection` provided by the Immutable X Wallet SDK.

:::note
The following examples use a Core SDK package version compatible with Wallets SDK integration. <br/>
Access the [Compatibility Matrix](/sdk-docs/wallet-sdk-web/reference#compatibility-matrix) to check versions of Core SDK which currently accepts the Wallets SDK integration.
:::

## Buy (Create Trade)

```ts
import {
  ENVIRONMENTS,
  L1_PROVIDERS,
  WalletSDK,
} from '@imtbl/imx-wallet-sdk-web';
import { getConfig, Workflows } from '@imtbl/core-sdk';

(async () => {
  // Sets up the Wallet SDK
  const walletSdk = await WalletSDK.build({ env: ENVIRONMENTS.STAGING });
  await walletSdk.connect({ provider: L1_PROVIDERS.METAMASK });

  // Gets the "WalletConnection" object containing the L1 and L2 signers
  const walletConnection = walletSdk.getWalletConnection();

  // Sets up Core SDK
  const coreSdkConfig = getConfig({
    coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
    registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    chainID: 3, // Ropsten
    basePath:  'https://api.ropsten.x.immutable.com',
    // headers are optional unless specified otherwise
    headers: { 'x-api-custom-header': '...' }
  })
  const coreSdkWorkflows = new Workflows(coreSdkConfig);

  // Registers the user
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
