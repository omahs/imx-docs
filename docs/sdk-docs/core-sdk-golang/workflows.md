---
description: How to make a first SDK request
id: workflows
slug: /workflows
tags: [core-sdk-golang, sdk functions]
keywords: [imx-dx]
---

# Workflows

A workflow is a combination of API and contract calls required for more complicated functionality.

```go
   // User registration workflow example
   configuration := api.NewConfiguration()
   apiClient := api.NewAPIClient(configuration)
   ctx := context.WithValue(context.Background(), api.ContextServerIndex, config.Sandbox)

   // Setup L1 signer
   l1signer, err := utils.NewBaseL1Signer(signerPrivateKey, chainID)
   if err != nil {
      log.Panicf("error in creating BaseL1Signer: %v", err)
   }

   // Setup L2 signer
   l2signer, err := stark.GenerateStarkSigner(l1signer)
   if err != nil {
      log.Panicf("error in creating StarkSigner: %v", err)
   }

   response, err := registration.RegisterOffchain(ctx, apiClient, l1signer, l2signer, "user@email.com")
   if err != nil {
      log.Panicf("error in RegisterOffchain: %v", err)
   }
```

The workflows can be found in the [workflows directory](https://github.com/immutable/imx-core-sdk-golang/tree/main/src/workflows/).
Sample usages of workflows can be found in [examples](https://github.com/immutable/imx-core-sdk-golang/tree/main/examples/workflows)

### Available Workflows

| Workflow                 | Description                                          |
|--------------------------|------------------------------------------------------|
| `RegisterOffchain`       | Register L2 wallet.                                  |
| `IsRegisteredOnchain`    | Check wallet registered on L1.                       |
| `MintTokensWorkflow`     | Mint tokens on L2.                                   |
| `CreateTransfer`         | Transfer tokens to another wallet.                   |
| `CreateBatchTransfer`    | Batch transfer NFT tokens.                           |
| `Burn`                   | Burn tokens.                                         |
| `GetBurn`                | Verify burn/transfer details.                        |
| `Deposit`                | Deposit based on token type. (ETH, ERC20, ERC721)    |
| `PrepareEthWithdrawal`   | Prepare Eth token for withdrawal.                    |
| `PrepareERC20Withdrawal` | Prepare ERC20 token for withdrawal.                  |
| `PrepareERC721Withdrawal`| Prepare ERC721 token for withdrawal.                 |
| `CompleteEthWithdrawal`  | Withdraw ETH to L1.                                  |
| `CompleteWithdrawal`     | Withdraw to L1 based on token type. (ERC20, ERC721)  |
| `CreateOrder`            | Create an order to sell an asset.                    |
| `CancelOrder`            | Cancel an order.                                     |
| `CreateTrade`            | Create a trade to buy an asset.                      |
