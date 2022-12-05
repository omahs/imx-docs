---
description: Additional into about the Wallet SDK Android
id: additional-info
slug: /additional-info
tags: [wallet-sdk-android]
keywords: [imx-wallets]
---

# Additional info

## Usage with the Core SDK
Wallet SDK Android is designed to be used in tandem with the [Immutable Core SDK for Kotlin/JVM](https://github.com/immutable/imx-core-sdk-kotlin-jvm).

Once you connect a user's wallet with the Wallet SDK you can provide the `Signer` and `StarkSigner` instances to Core SDK workflows.
```kotlin
val signer = ImmutableXWallet.signer
val starkSigner = ImmutableXWallet.starkSigner
if (signer != null && starkSigner != null) {
    immutableX.createTrade(orderId, emptyList(), signer, starkSigner).whenComplete { ... }
} else {
    // handle not connected
}
```
