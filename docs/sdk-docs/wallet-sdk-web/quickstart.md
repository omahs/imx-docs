---
description: Quickly starting to enjoy the benefits of the Wallet SDK
id: quickstart
slug: /quickstart
tags: [wallet-sdk-web, quickstart]
keywords: [imx-wallets]
---

# Quickstart

It is easy to set up and start using the Wallet SDK:

```ts
import {
  ENVIRONMENTS,
  L1_PROVIDERS,
  WalletSDK,
} from '@imtbl/wallet-sdk-web';

(async () => {
  // Builds the Wallet SDK object
  const sdk = await WalletSDK.build({
    env: ENVIRONMENTS.STAGING,
    /*
      RPC config is only required if the WalletConnect provider (L1_PROVIDERS.WALLET_CONNECT)
      is being used. Follow this reference for the RPC config:
      https://docs.walletconnect.com/quick-start/dapps/web3-provider#provider-options
    */
    rpc: {
      3: 'https://ropsten.mycustomnode.com',
    },
    /*
      Will switch the chain based on this configured chainID when connecting to the wallet.(Optional)
      Following the table below to get the chainID and name mapping. 
      Consult https://chainlist.org/ for more.
      ChainId	| Network
      --- --- | --- --- 
      1	      | Ethereum Main Network (Mainnet)
      3	      | Ropsten Test Network
      5	      | Goerli Test Network
    */
    chainID: 3,
  });

  // Connects on the chosen provider - WalletConnect
  const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.WALLET_CONNECT });
  // For Metamask:
  // const walletConnection = await sdk.connect({ provider: L1_PROVIDERS.METAMASK });

  // Register the user using the Core SDK
  await coreSdkWorkflows.registerOffchain(walletConnection);
})();
```

:::note
The `coreSdkWorkflows` object setup was omitted for brevity. <br/>
Check out the [Workflows examples](/sdk-docs/wallet-sdk-web/code-examples#workflows) to get examples of how to set up the Core SDK workflows.
:::

:::tip
The object `WalletConnection` can also be retrieved in the following ways:
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
