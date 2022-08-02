---
description: How to make a first SDK request
id: workflows
slug: /workflows
tags: [core-sdk-example, sdk functions]
---

# Workflows

A workflow is a combination of API and contract calls required for more complicated functionality.

```ts
// User registration workflow example
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { getConfig, Workflows } from '@imtbl/core-sdk';

const alchemyApiKey = YOUR_ALCHEMY_API_KEY;
const ethNetwork = 'ropsten';

// Setup provider and signer
const provider = new AlchemyProvider(ethNetwork, alchemyApiKey);
const signer = new Wallet(privateKey).connect(provider);

// Configure Core SDK Workflow class
const config = getConfig(ethNetwork);
const workflows = new Workflows(config);

const registerUser = async () => {
  const response = await workflows.registerOffchain(signer);
  console.log(response);
};
```

The workflow can be found in the [workflows directory](src/workflows/).

### Available Workflows

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
