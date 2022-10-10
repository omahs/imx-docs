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

A configuration object is provided with preset configurations for both Test and Production networks to simplify the environment setup required for which the Core SDK requests are made. This can be obtained by using the `GetConfig` function available within the `config` package of Core SDK. 

Select one of the following Ethereum networks Immutable X platform currently supports.

| Environment | Description   |
|-------------|---------------|
| Sandbox     | Test network  |
| Mainnet     | Production    |

```go
import "github.com/immutable/imx-core-sdk-golang/config"

const alchemyAPIKey = "alchemy api key"

func main() {
   cfg := config.GetConfig(config.Sandbox, alchemyAPIKey)
   ...
}
```

#### Ethereum client

For information about how Ethereum client is setup, see [`examples/workflows/main.go`](https://github.com/immutable/imx-core-sdk-golang/tree/v0.1.0/examples/workflows/main.go)

### How to generate the required signers

#### L1 Signer

Almost all the POST requests will need signed message. To sign a message as a minimum an L1 signer is required. An Ethereum wallet can be used to implement an L1 signer ([Getting started > Wallet](https://docs.x.immutable.com/docs/getting-started-guide/#wallet)).

When you implement an L1signer, it must satisfy [L1Signer interface](https://github.com/immutable/imx-core-sdk-golang/tree/v0.1.0/signers/signers.go). See [BaseL1Signer](https://github.com/immutable/imx-core-sdk-golang/tree/v0.1.0/examples/workflows/utils/signer.go) for a sample implementation of L1 Signer.

Also refer [`examples/publicapi/list_assets/main.go`](https://github.com/immutable/imx-core-sdk-golang/tree/v0.1.0/examples/publicapi/list_assets/main.go) for environment setup examples.

#### L2 Signer

Some of the endpoints like Withdrawal, Orders, Trades, Transfers require an L2 signer. See `signers/stark` for information about generating your own L2 signer and also the following code snippet.

```go
import (
   "github.com/immutable/imx-core-sdk-golang/signers/stark"
   ...
)

func main() {
   // L1 credentials
   l1signer := YourImplementationOfL1SignerInterface() // See examples/workflows/utils/signer.go

   // L2 credentials
   // Obtain the STARK signer associated with this user.
   l2signer, err := stark.GenerateStarkSigner(l1signer) // this is the sdk helper function
   if err != nil {
      ...
   }
}
```

Also see the examples for a sample l2 signer usage [`examples/workflows/main.go`](https://github.com/immutable/imx-core-sdk-golang/tree/v0.1.0/examples/workflows/main.go#L63)
