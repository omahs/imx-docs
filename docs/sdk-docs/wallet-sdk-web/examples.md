---
description: Examples using the Wallet SDK
id: code-examples
slug: /code-examples
tags: [wallet-sdk-web, code-examples]
keywords: [imx-wallets]
---

# Examples

## Events

Events are a really powerful tool that can be used for a sort of different scenarios. Find below some different examples on how to control the application flow using the events provided by the Wallet SDK.

:::note
Check out the [Supported events reference](/sdk-docs/wallet-sdk-web/reference#supported-events) to get the complete list of events.
:::

### Ensuring an up-to-date connection

It is important that applications have the most recent wallet connected for each user, to ensure that functions behave as expected. There may be instances where users change wallets or have two wallets connected, so the below code ensures the connection is up to date.

```ts
import {
  WALLET_SDK_EVENTS,
  WalletConnection,
  walletSdkEvents,
} from '@imtbl/wallet-sdk-web';
import { Workflows } from '@imtbl/core-sdk';

// Defines a simple state interface
type UserWallet = {
  connection: WalletConnection | null,
}

// Creates the state
let userWallet: UserWallet = {
  connection: null,
};

// Defines the function to update the state
function updateUserWallet(newUserWallet: UserWallet) {
  userWallet = newUserWallet;
}

// Listens for connection update notifications and when triggered, updates the state
walletSdkEvents.on(
  WALLET_SDK_EVENTS.CONNECTION_UPDATED,
  (updatedWalletConnection: WalletConnection) =>
    updateUserWallet({ connection: updatedWalletConnection }),
);

// Listens for disconnection notifications and when triggered, cleans the state up
walletSdkEvents.on(
  WALLET_SDK_EVENTS.WALLET_DISCONNECTED,
  () => updateUserWallet({ connection: null }),
);

// Provides a function to register a user with the up-to-date connection
async function registerUser(coreSdkWorkflows: Workflows) {
  const { connection } = userWallet;

  if (!connection) throw new Error('There is still no wallet connection available.');

  await coreSdkWorkflows.registerOffchain(connection);
}
```

### Handling screen statuses

It is useful for users to understand the status of their wallet (e.g Connected/disconnected). The below code allows developers to return the wallet status:

```ts
import {
  WALLET_SDK_EVENTS,
  walletSdkEvents,
} from '@imtbl/wallet-sdk-web';

// Defines possible wallet statuses
enum WalletStatus {
  CONNECTED = 'Connected',
  DISCONNECTED = 'Disconnected'
}

// Creates the state
let walletStatus = WalletStatus.DISCONNECTED;

// Listens for connection update notifications and when triggered, updates the state
walletSdkEvents.on(
  WALLET_SDK_EVENTS.CONNECTION_UPDATED,
  (_) => { walletStatus = WalletStatus.CONNECTED; },
);

// Listens for disconnection notifications and when triggered, updates the state
walletSdkEvents.on(
  WALLET_SDK_EVENTS.WALLET_DISCONNECTED,
  () => { walletStatus = WalletStatus.DISCONNECTED; },
);

// Provides a function to get the current status
function getWalletStatus(): WalletStatus {
  return walletStatus;
}
```

## Workflows 

The Wallet SDK was designed to work in tandem with Core SDK and, as such, you can use the signers provided by the Wallet SDK to perform the workflows available in the Core SDK. Below you can find some examples of how to use the Wallet SDK to perform some of the workflows.

:::note
The following examples use a Core SDK package version compatible with Wallet SDK integration.
Check out the [Compatibility matrix](/sdk-docs/wallet-sdk-web/reference#compatibility-matrix) to get versions of the Core SDK which currently accepts Wallet SDK integration.
:::

### Buy (Create Trade)

```ts
import {
  ENVIRONMENTS,
  L1_PROVIDERS,
  WALLET_SDK_EVENTS,
  WalletConnection,
  walletSdkEvents,
  WalletSDK,
} from '@imtbl/wallet-sdk-web';
import {
  getConfig,
  Workflows,
  GetSignableTradeRequest,
} from '@imtbl/core-sdk';

// Creates the state
const state : { walletConnection: WalletConnection | null; } =
  { walletConnection: null };

// Listens for connection update notifications and when triggered, updates the state
walletSdkEvents.on(
  WALLET_SDK_EVENTS.CONNECTION_UPDATED,
  (updatedWalletConnection: WalletConnection) =>
    { state.walletConnection = updatedWalletConnection; },
);

// Listens for disconnection notifications and when triggered, cleans the state up
walletSdkEvents.on(
  WALLET_SDK_EVENTS.WALLET_DISCONNECTED,
  () => { state.walletConnection = null; },
);

// Provides a function to build the Wallet SDK and connect on the chosen provider
async function setupWalletSDK(): Promise<WalletConnection> {
  const sdk = await WalletSDK.build({ env: ENVIRONMENTS.STAGING });

  return await sdk.connect({ provider: L1_PROVIDERS.METAMASK });
}

// Provides a function to build the Core SDK workflows
function setupCoreSDKWorkflows(): Workflows {
  const coreSdkConfig = getConfig({
    coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
    registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    chainID: 3, // Ropsten
    basePath: 'https://api.ropsten.x.immutable.com',
  });

  return new Workflows(coreSdkConfig);
}

// Provides a function to execute the Create Trade workflow
async function createTrade(
  walletConnection: WalletConnection,
  coreSdkWorkflows: Workflows,
  tradeRequest: GetSignableTradeRequest,
) {
  if (!walletConnection) throw new Error('There is still no wallet connection available.');

  await coreSdkWorkflows.registerOffchain(walletConnection);

  const createTradeResponse =
    await coreSdkWorkflows.createTrade(
      walletConnection,
      tradeRequest,
    );

  console.log(createTradeResponse);
}

(async () => {
  state.walletConnection = await setupWalletSDK();

  const coreSdkWorkflows = setupCoreSDKWorkflows();

  const fakeTradeRequest = {
    user: '0x00', // Ethereum address of the submitting user
    order_id: 1000, // The ID of the maker order involved
  };

  const { walletConnection } = state;

  await createTrade(walletConnection, coreSdkWorkflows, fakeTradeRequest);
})();
```
