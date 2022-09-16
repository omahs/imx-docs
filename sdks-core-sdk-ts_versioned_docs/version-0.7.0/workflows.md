---
description: How to make a first SDK request
id: workflows
slug: /workflows
tags: [core-sdk-ts, sdk functions]
keywords: [imx-dx]
---

# Workflows

A workflow is a combination of API and contract calls required for more complicated functionality.

```ts
// User registration workflow example
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import {
  Workflows,
  BaseSigner,
  getConfig,
  generateStarkWallet,
} from '@imtbl/core-sdk';

const ethNetwork = 'goerli';

// Sets up the provider
const alchemyApiKey = 'UPDATE WITH THE ALCHEMY API KEY HERE';
const alchemyProvider = new AlchemyProvider(ethNetwork, alchemyApiKey);

// Sets up the L1Signer
const privateKey = 'UPDATE WITH THE PRIVATE KEY HERE';
const l1Wallet = new Wallet(privateKey);
const l1Signer = l1Wallet.connect(alchemyProvider);

// Sets up the L2Signer
const l2Wallet = await generateStarkWallet(l1Signer);
const l2Signer = new BaseSigner(l2Wallet.starkKeyPair);

// Sets up the Core SDK workflows
const coreSdkConfig = getConfig({
  coreContractAddress: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623',
  registrationContractAddress: '0x1C97Ada273C9A52253f463042f29117090Cd7D83',
  chainID: 5,
  basePath: 'https://api.sandbox.x.immutable.com',
});
const coreSdkWorkflows = new Workflows(coreSdkConfig);

// Registers the user
const walletConnection = { l1Signer, l2Signer };
await coreSdkWorkflows.registerOffchain(walletConnection);
```

The workflow can be found in the [workflows directory](https://github.com/immutable/imx-core-sdk/tree/0.7.0/src/workflows/).

## Available workflows

The current workflow methods exposed from the `Workflow` class.

| Workflow                   | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `registerOffchain`         | Register L2 wallet.                                                          |
| `isRegisteredOnchain`      | Check wallet registered on L1.                                               |
| `mint`                     | Mint tokens on L2.                                                           |
| `transfer`                 | Transfer tokens to another wallet.                                           |
| `batchNftTransfer`         | Batch transfer tokens.                                                       |
| `burn`                     | Burn tokens.                                                                 |
| `getBurn`                  | Verify burn/transfer details.                                                |
| `deposit`                  | Helper method around the other deposit methods. Deposit based on token type. |
| `depositEth`               | Deposit ETH to L2 wallet.                                                    |
| `depositERC20`             | Deposit ERC20 token to L2 wallet.                                            |
| `depositERC721`            | Deposit ERC721 NFT to L2 wallet.                                             |
| `prepareWithdrawal`        | Prepare token for withdrawal.                                                |
| `completeEthWithdrawal`    | withdraw ETH to L1.                                                          |
| `completeERC20Withdrawal`  | withdraw ERC20 to L1.                                                        |
| `completeERC721Withdrawal` | withdraw ERC721 to L1.                                                       |
| `completeWithdrawal`       | Helper method around withdrawal methods. Withdraw based on token type.       |
| `createOrder`              | Create an order to sell an asset.                                            |
| `cancelOrder`              | Cancel an order.                                                             |
| `createTrade`              | Create a trade to buy an asset.                                              |
