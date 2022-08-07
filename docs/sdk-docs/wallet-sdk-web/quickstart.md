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
      RPC config is optional if you do not want to support WalletConnect. But If 
      you do, make sure to set your RPC config following this reference: 
      https://docs.walletconnect.com/quick-start/dapps/web3-provider#provider-options
    */
    rpc: {
      1: "https://mainnet.mycustomnode.com",
    }
  });

  // Connects on the chosen provider WalletConnect
  await sdk.connect({ provider: L1_PROVIDERS.WALLET_CONNECT });
  // Or MetaMask
  // await sdk.connect({ provider: L1_PROVIDERS.METAMASK });
  
  // Gets the "WalletConnection" object containing the L1 and L2 signers
  const walletConnection = sdk.getWalletConnection();

  // Passing the "WalletConnection" for the chosen core workflow
  await coreSdkWorkflows.registerOffChain(walletConnection);
})();
```

:::tip
The object `WalletConnection` can also be directly retrieved from the return of the method `connect`.
```ts
const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.WALLET_CONNECT });
```
:::
