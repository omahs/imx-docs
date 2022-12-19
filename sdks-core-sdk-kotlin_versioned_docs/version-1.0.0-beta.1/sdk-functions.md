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
* Deposit ERC20/ERC721/ETH
* Withdraw ERC20/ERC721/ETH
* Check if user is registered on chain

### Wallet Connection

In order to call authorised API and use workflow functions, you will need to pass in the connected wallet provider. This means you will need to implement your own Wallet L1 [Signer](https://github.com/immutable/imx-core-sdk-kotlin-jvm/blob/main/imx-core-sdk-kotlin-jvm/src/main/kotlin/com/immutable/sdk/Signer.kt) and L2 [StarkSigner](https://github.com/immutable/imx-core-sdk-kotlin-jvm/blob/main/imx-core-sdk-kotlin-jvm/src/main/kotlin/com/immutable/sdk/Signer.kt).

Use `StarkKey.generateStarkPrivateKey()` to create an instance of `StandardStarkSigner`, an implementation of `StarkSigner`.

#### 🚨🚨🚨 Warning 🚨🚨🚨
> You will have to persist the Stark private key. The key is [randomly generated](/src/utils/stark/starkCurve.ts#L99) so **_cannot_** be deterministically re-generated.
```kt
val starkPrivateKey = StarkKey.generateStarkPrivateKey()
val starkSigner = StandardStarkSigner(starkPrivateKey)
```
