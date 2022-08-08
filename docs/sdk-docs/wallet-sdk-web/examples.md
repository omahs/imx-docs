---
description: Examples using the Wallet SDK Web
id: code-examples
slug: /code-examples
tags: [wallet-sdk-web, code-examples]
---

# Examples

## Events 

Events can be used for a sort of different scenarios. Check out below some examples controlling the application flow through the events provided by the Immutable X Wallet SDK.

:::note
Access the [Supported Events reference](sdk-docs/wallet-sdk-web/reference#supported-events) to check the complete list of events provided.
:::

### Ensuring Up-to-date Connections

```ts
import {
  WALLET_SDK_EVENTS,
  WalletConnection,
  walletSdkEvents,
} from '@imtbl/imx-wallet-sdk-web';
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

### Handling Screen Statuses

```ts
import {
  WALLET_SDK_EVENTS,
  walletSdkEvents,
} from '@imtbl/imx-wallet-sdk-web';

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

Refer to the following code examples to understand how to use the [Core SDK Typescript](/sdk-docs/core-sdk-ts) workflows with the `WalletConnection` provided by the Immutable X Wallet SDK.

:::note
The following examples use a Core SDK package version compatible with Wallets SDK integration. <br/>
Access the [Compatibility Matrix](/sdk-docs/wallet-sdk-web/reference#compatibility-matrix) to check versions of Core SDK which currently accepts the Wallets SDK integration.
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
} from '@imtbl/imx-wallet-sdk-web';
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

// Provides a function to build the Core SDK Workflows
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
  workflows: Workflows,
  tradeRequest: GetSignableTradeRequest,
) {
  if (!walletConnection) throw new Error('There is still no wallet connection available.');

  await workflows.registerOffchain(walletConnection);

  const createTradeResponse =
    await workflows.createTrade(
      walletConnection,
      tradeRequest,
    );

  console.log(createTradeResponse);
}

(async () => {
  state.walletConnection = await setupWalletSDK();

  const workflows = setupCoreSDKWorkflows();

  const fakeTradeRequest = {
    user: '0x00', // Ethereum address of the submitting user
    order_id: 1000, // The ID of the maker order involved
  };

  const { walletConnection } = state;

  await createTrade(walletConnection, workflows, fakeTradeRequest);
})();
```
