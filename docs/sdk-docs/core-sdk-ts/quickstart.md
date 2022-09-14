---
description: How to make a first SDK request
id: quickstart
slug: /quickstart
tags: [core-sdk-ts, quickstart]
keywords: [imx-games]
---

# Quickstart

## Usage

### Configuration

A configuration object is required to be passed into Core SDK requests. This can be obtained by using the `getConfig` function available within the Core SDK. You are required to provide the correct contract addresses, Chain ID, and API base path of the network you wish to use. The Immutable X platform currently supports `goerli` for testing and `mainnet` for production.

| Network   | Chain ID | API Base Path                       | Core Contract Address                        | Registration Contract Address                |
| --------- | -------- | ----------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `goerli`  | 5        | https://api.sandbox.x.immutable.com | `0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623` | `0x1C97Ada273C9A52253f463042f29117090Cd7D83` |
| `ropsten` | 3        | https://api.ropsten.x.immutable.com | `0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef` | `0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864` |
| `mainnet` | 1        | https://api.x.immutable.com         | `0x5FDCCA53617f4d2b9134B29090C87D01058e27e9` | `0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c` |

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { getConfig } from '@imtbl/core-sdk';

const ethNetwork = 'goerli'; // or mainnet;

// Use the helper function to get the config
const config = getConfig({
  coreContractAddress: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623',
  registrationContractAddress: '0x1C97Ada273C9A52253f463042f29117090Cd7D83',
  chainID: 5,
  basePath:  'https://api.goerli.x.immutable.com',
  headers: { 'x-api-custom-header': '...' } // headers are optional unless specified otherwise
});

// Set up a provider and a signer
const privateKey = YOUR_PRIVATE_KEY;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const signer = new Wallet(privateKey).connect(provider);
```

#### WalletConnection

WalletConnection is a top level connector which contains all the required resources (eg. L1 and L2 signers) to enable usage of the Core SDK workflows.

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { WalletConnection, generateStarkWallet, BaseSigner } from '@imtbl/core-sdk';

// Generate your own WalletConnection
const generateWalletConnection = async (provider: AlchemyProvider) : Promise<WalletConnection> => {
  // L1 credentials
  const l1Signer = Wallet.createRandom().connect(provider);

  // L2 credentials
  const starkWallet = await generateStarkWallet(l1Signer);
  const l2Signer = new BaseSigner(starkWallet.starkKeyPair);

  return {
    l1Signer,
    l2Signer,
  };
};
```
