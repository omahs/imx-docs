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
package onboarding

import (
    "context"
    "fmt"
    "math/big"

    "github.com/immutable/imx-core-sdk-golang/config"
    "github.com/immutable/imx-core-sdk-golang/examples/workflows/utils"
    "github.com/immutable/imx-core-sdk-golang/generated/api"
    "github.com/immutable/imx-core-sdk-golang/signers/stark"
    "github.com/immutable/imx-core-sdk-golang/workflows/registration"
)

func Register(signerPrivateKey string, chainID *big.Int) (*api.RegisterUserResponse, error) {
    // User registration workflow example
    configuration := api.NewConfiguration()
    apiClient := api.NewAPIClient(configuration)
    ctx := context.WithValue(context.Background(), api.ContextServerIndex, config.Sandbox)

    // Setup L1 signer
    l1signer, err := utils.NewBaseL1Signer(signerPrivateKey, chainID)
    if err != nil {
        return nil, fmt.Errorf("error in creating BaseL1Signer: %v", err)
    }

    // Setup L2 signer
    l2signer, err := stark.GenerateStarkSigner(l1signer)
    if err != nil {
        return nil, fmt.Errorf("error in creating StarkSigner: %v", err)
    }

    response, err := registration.RegisterOffchain(ctx, apiClient.UsersApi, l1signer, l2signer, "user@email.com")
    if err != nil {
        return nil, fmt.Errorf("error in RegisterOffchain: %v", err)
    }
    return response, nil
}
```

The workflows can be found in the [workflows directory](https://github.com/immutable/imx-core-sdk-golang/tree/main/workflows/).
Sample usage of workflows can be found in [examples](https://github.com/immutable/imx-core-sdk-golang/tree/main/examples/workflows).

## Available workflows

| Workflow                  | Description                                         |
|---------------------------|-----------------------------------------------------|
| `RegisterOffchain`        | Register L2 wallet.                                 |
| `IsRegisteredOnchain`     | Check wallet registered on L1.                      |
| `MintTokensWorkflow`      | Mint tokens on L2.                                  |
| `CreateTransfer`          | Transfer tokens to another wallet.                  |
| `CreateBatchTransfer`     | Batch transfer NFT tokens.                          |
| `Burn`                    | Burn tokens.                                        |
| `GetBurn`                 | Verify burn/transfer details.                       |
| `Deposit`                 | Deposit based on token type. (ETH, ERC20, ERC721)   |
| `PrepareWithdrawal`       | Prepare token (ETH, ERC20, ERC721) for withdrawal.  |
| `CompleteEthWithdrawal`   | Withdraw ETH to L1.                                 |
| `CompleteWithdrawal`      | Withdraw to L1 based on token type. (ERC20, ERC721) |
| `CreateOrder`             | Create an order to sell an asset.                   |
| `CancelOrder`             | Cancel an order.                                    |
| `CreateTrade`             | Create a trade to buy an asset.                     |
