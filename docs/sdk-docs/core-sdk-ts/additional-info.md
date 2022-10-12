---
description: Additional into about the Core SDK
id: additional-info
slug: /additional-info
tags: [core-sdk-ts]
keywords: [imx-dx]
---

# Additional info

## Get data (on assets, orders, past transactions, etc.)

These methods allow you to read data about events, transactions or current state on ImmutableX (layer 2). They do not require any user authentication because no state is being changed.

Examples of the types of data that are typically retrieved include:

- Assets or details of a particular asset
- Token balances for a particular user
- Orders or details about a particular order
- Historical trades and transfers

### Examples

#### Get all collections and get assets from a particular collection:

```ts
const listCollectionsResponse = await client.listCollections({
  pageSize: 2,
});

const collection = listCollectionsResponse.result[0];

const collectionAssetsResponse = await client.listAssets({
  collection: collection.address,
  pageSize: 10,
});
```

## Operations requiring user signatures

There are two types of operations requiring user signatures:

1. Transactions that update blockchain state
2. Operations that ImmutableX require authorization for

In order to get user signatures, applications need to [generate "signers"](#how-do-applications-generate-and-use-signers).

#### What are transactions that update blockchain state?

A common transaction type is the transfer of asset ownership from one user to another (ie. asset sale). These operations require users to sign (approve) them to prove that they are valid.

#### What are operations that require authorization?

These operations add to or update data in Immutable's databases and typically require the authorization of an object's owner (ie. a user creating a project on ImmutableX).

### How do applications generate and use signers?

Signers are abstractions of user accounts that can be used to sign transactions. A user's private key is required to generate them.

There are two ways to get signers in your application:

1. [Generate your own by obtaining and using the user's private keys](#1-generate-your-own-signers)
2. [Use our Wallet SDK to connect to a user's wallet application](#2-generate-signers-using-the-wallet-sdk)

The first option, where an application obtains a user's private key directly, is risky because these keys allow anyone in possession of them full control of an account.

The second option provides an application with an interface to the user's account by prompting the user to connect with their wallet application (ie. mobile or browser wallet). Once connected the app can begin asking the user to sign transactions and messages without having to reveal their private key.

As ImmutableX enables applications to execute signed transactions on both Ethereum (layer 1) and StarkEx (layer 2), signers are required for both these layers.

### 1. Generate your own signers

The Core SDK provides functionality for applications to generate STARK (L2) [private keys](https://github.com/immutable/imx-core-sdk/blob/v1.0.0-beta.1/src/utils/stark/starkCurve.ts#L99) and [signers](https://github.com/immutable/imx-core-sdk/blob/v1.0.0-beta.1/src/utils/stark/starkSigner.ts#L60).

#### 🚨🚨🚨 Warning 🚨🚨🚨
> If you generate your own STARK private key, you will have to persist it. The key is [randomly generated](https://github.com/immutable/imx-core-sdk/blob/v1.0.0-beta.1/src/utils/stark/starkCurve.ts#L99) so **_cannot_** be deterministically re-generated.

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { generateStarkPrivateKey, createStarkSigner } from '@imtbl/core-sdk';

// Create Ethereum signer
const ethNetwork = 'goerli'; // Or 'mainnet'
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const ethSigner = new Wallet(YOUR_PRIVATE_ETH_KEY).connect(provider);

// Create STARK signer
const starkPrivateKey = generateStarkPrivateKey(); // Or retrieve previously generated key
const starkSigner = createStarkSigner(starkPrivateKey);
```

### 2. Generate signers using the Wallet SDK

The [Wallet SDK Web](https://docs.x.immutable.com/sdk-docs/wallet-sdk-web/overview) provides connections to Metamask and WalletConnect browser wallets.

See [this guide](https://docs.x.immutable.com/sdk-docs/wallet-sdk-web/quickstart) for how to set this up.

### Examples

#### Create a project (requires an Ethereum layer 1 signer)

```ts
const createProjectResponse = await client.createProject(ethSigner, {
  company_name: 'My Company',
  contact_email: 'project@company.com',
  name: 'Project name',
});

const projectId = createProjectResponse.id.toString();

const getProjectResponse = await client.getProject(ethSigner, projectId);
```

#### Deposit tokens from L1 to L2 (requires an Ethereum layer 1 signer)

```ts
const depositResponse = await client.deposit(ethSigner, {
  type: 'ETH',
  amount: '500000000000000000', // Amount in wei
});
```

#### Create an order (requires an Ethereum layer 1 and StarkEx layer 2 signer)

```ts
const signers = { ethSigner, starkSigner };

const orderResponse = await client.createOrder(signers, {
  buy: {
    type: 'ETH',
    amount: '1230000000000000000', // Sale price in wei
  },
  sell: {
    type: 'ERC721',
    tokenAddress: '0x0fb969a08c7c39ba99c1628b59c0b7e5611bd396',
    tokenId: '5',
  },
});
```

## Contract requests

ImmutableX is built as a ZK-rollup in partnership with StarkWare. We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on ImmutableX, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum.

The Core SDK provides interfaces for all smart contracts required to interact with the ImmutableX platform.

[See all smart contracts available in the Core SDK](#smart-contract-autogeneration).

```ts
import { Contracts, Config } from '@imtbl/core-sdk';

const config = Config.SANDBOX;

// Get instance of core contract
const contract = Contracts.Core.connect(
  config.ethConfiguration.coreContractAddress,
  ethSigner,
);

// Obtain necessary parameters...

// Populate and send transaction
const populatedTransaction = await contract.populateTransaction.depositNft(
  starkPublicKey,
  assetType,
  vaultId,
  tokenId,
);

const transactionResponse = await signer.sendTransaction(populatedTransaction);
```

## Smart contract autogeneration

The Immutable solidity contracts can be found under `contracts` folder. Contract bindings in typescript is generated using [hardhat](https://hardhat.org/guides/compile-contracts.html).

### Core

The Core contract is Immutable's main interface with the Ethereum blockchain, based on [StarkEx](https://docs.starkware.co/starkex-v4).

[View contract](https://github.com/immutable/imx-core-sdk/blob/v1.0.0-beta.1/contracts/Core.sol)

### Registration

The Registration contract is a proxy smart contract for the Core contract that combines transactions related to onchain registration, deposits and withdrawals. When a user who is not registered onchain attempts to perform a deposit or a withdrawal, the Registration combines requests to the Core contract in order to register the user first. Users who are not registered onchain are not able to perform a deposit or withdrawal.

For example, instead of making subsequent transaction requests to the Core contract, i.e. `registerUser` and `depositNft`, a single transaction request can be made to the proxy Registration contract - `registerAndWithdrawNft`.

[View contract](https://github.com/immutable/imx-core-sdk/blob/v1.0.0-beta.1/contracts/Registration.sol)

### IERC20

Standard interface for interacting with ERC20 contracts, taken from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20).

### IERC721

Standard interface for interacting with ERC721 contracts, taken from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721).
