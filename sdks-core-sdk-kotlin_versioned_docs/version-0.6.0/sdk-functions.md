---
description: Functions included in the SDK
id: sdk-functions
slug: /sdk-functions
tags: [core-sdk-kotlin, sdk functions]
keywords: [imx-wallets]
---

# SDK Functions

## Workflow Functions

Utility functions that will chain necessary API calls to complete a process or perform a transaction.

* Register a user with Immutable X
* Buy cryptocurrency via Moonpay
* Buy ERC721
* Sell ERC721
* Cancel listing
* Transfer ERC20/ERC721/ETH

### Wallet Connection

In order to use any workflow functions, you will need to pass in the connected wallet provider. This means you will need to implement your own Wallet L1 [Signer](https://github.com/immutable/imx-core-sdk-kotlin-jvm/blob/main/imx-core-sdk-kotlin-jvm/src/main/kotlin/com/immutable/sdk/Signer.kt).

Once you have created a `Signer` instance you can generate the user's Stark key pair and use it to create an instance of `StandardStarkSigner`, an implementation of `StarkSigner`.
```kt
StarkKey.generate(signer).whenComplete { keyPair, error ->
    val starkSigner = StandardStarkSigner(keyPair)
}
```
