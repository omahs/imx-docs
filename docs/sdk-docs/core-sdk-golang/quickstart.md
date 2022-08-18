---
description: How to make a first SDK request
id: quickstart
slug: /quickstart
tags: [core-sdk-golang, quickstart]
keywords: [imx-dx]
---

# Quickstart

## Usage

### Configuration

A configuration object is required to setup the environment for which the Core SDK requests are made. This can be obtained by using the `GetConfig` function available within the `config` package of Core SDK.

Select one of the following Ethereum networks Immutable X platform currently supports.

| Environment | Description   |
|-------------|---------------|
| Sandbox     | Test Network  |
| Mainnet     | Production    |

```go
import "immutable.com/imx-core-sdk-golang/config"

const alchemyAPIKey = "alchemy api key"

func main() {
   cfg := config.GetConfig(config.Sandbox, alchemyAPIKey)
   ...
}
```

#### L1 Signer

The L1 signer is based on your ethereum wallet ([Getting started > Wallet](https://docs.x.immutable.com/docs/getting-started-guide/#wallet)).
To use most workflow functions, you will need to implement an L1 signer using your ethereum wallet.
Your implementation must satisfy [L1Signer interface](https://github.com/immutable/imx-core-sdk-golang/tree/main/src/signers/signers.go).
See [BaseL1Signer](https://github.com/immutable/imx-core-sdk-golang/tree/main/examples/workflows/utils/signer.go) for a sample implementation of L1 Signer.

#### L2 Signer

Some methods require an L2 signer as a parameter. The Core SDK expects you will generate your own L2 signer.

```go
import (
   "immutable.com/imx-core-sdk-golang/signers/stark"
   ...
)

func main() {
   // L1 credentials
   l1signer := YourImplementationOfL1SignerInterface() // See examples/workflows/utils/signer.go 

   // L2 credentials
   // Obtain the stark signer associated with this user.
   l2signer, err := stark.GenerateStarkSigner(l1signer) // this is the sdk helper function
   if err != nil {
      ...
   }
}
```
