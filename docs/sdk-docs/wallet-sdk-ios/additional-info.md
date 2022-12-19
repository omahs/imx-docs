---
description: Additional into about the Wallet SDK iOS
id: additional-info
slug: /additional-info
tags: [wallet-sdk-ios]
keywords: [imx-wallets]
---

# Additional info

## Usage with the Core SDK

This Wallet SDK is designed to be used in tandem with the [ImmutableX Core SDK for Swift](https://github.com/immutable/imx-core-sdk-swift).

Once you connect a user's wallet with the Wallet SDK you can provide the `Signer` and `StarkSigner` instances to Core SDK workflows.

```swift
guard let signer = ImmutableXWallet.shared.signer, 
    let starkSigner = ImmutableXWallet.shared.starkSigner else {
    // handle not connected
    return
}

let result = try await ImmutableX.shared.createTrade(
    orderId: orderId, 
    signer: signer, 
    starkSigner: starkSigner
)
```
