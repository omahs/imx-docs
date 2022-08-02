---
description: How to make a first SDK request
id: quickstart
slug: /quickstart
tags: [core-sdk-example, quickstart]
---

# Quickstart

## Usage

### Configuration

A configuration object is required to be passed into Core SDK requests. This can be obtained by using the `getConfig` function available within the Core SDK. You are required to select the Ethereum network. The Immutable X platform currently supports `ropsten` for testing and `mainnet` for production.

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { getConfig } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;

// Use the helper function to get the config
const config = getConfig(ethNetwork);

// Setup a provider and signer
const privateKey = YOUR_PRIVATE_KEY;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const signer = new Wallet(privateKey).connect(provider);
```

#### Stark Wallet

Some methods require a stark wallet as a parameter. The Core SDK expects you will generate your own stark wallet.

```ts
import { Wallet } from '@ethersproject/wallet';
import { generateStarkWallet } from '@imtbl/core-sdk';

// generate your own stark wallet
const generateWallets = async (provider: AlchemyProvider) => {
  // L1 credentials
  const wallet = Wallet.createRandom().connect(provider);

  // L2 credentials
  // Obtain stark key pair associated with this user
  const starkWallet = await generateStarkWallet(wallet); // this is sdk helper function

  return {
    wallet,
    starkWallet,
  };
};
```
