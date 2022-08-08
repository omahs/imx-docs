---
description: Quickly starting to enjoy the benefits of the Wallet SDK Web
id: quickstart
slug: /quickstart
tags: [wallet-sdk-web, quickstart]
---

# Quickstart

Setting up and starting using the Wallet SDK Web is effortless. All that is needed is to `build`, `connect`, `getWalletConnection` and begin using the signers for the purposes.

```ts
import {
  ENVIRONMENTS,
  L1_PROVIDERS,
  WalletSDK,
} from '@imtbl/imx-wallet-sdk-web';

(async () => {
  // Builds the sdk object
  const sdk = await WalletSDK.build({
    env: ENVIRONMENTS.STAGING,
    /*
      RPC config is just used for WalletConnect supporting. If it is the case, 
      make sure to set the RPC config following this reference:
      https://docs.walletconnect.com/quick-start/dapps/web3-provider#provider-options
    */
    rpc: {
      3: 'https://ropsten.mycustomnode.com',
    },
  });

  // Connects on the chosen provider WalletConnect
  const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.WALLET_CONNECT });
  // Or MetaMask
  // const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.METAMASK });

  // Ensures user registered
  await coreSdkWorkflows.registerOffchain(walletConnection);
})();
```

:::tip
The object `WalletConnection` can also be retrieved: 
```ts
// By calling the method `getWalletConnection`
const walletConnection = sdk.getWalletConnection();

// By listening to the event `WALLET_SDK_EVENTS.CONNECTION_UPDATED`
walletSdkEvents.on(
  WALLET_SDK_EVENTS.CONNECTION_UPDATED,
  (updatedWalletConnection: WalletConnection) =>
    { const walletConnection = updatedWalletConnection; },
);
```
:::
