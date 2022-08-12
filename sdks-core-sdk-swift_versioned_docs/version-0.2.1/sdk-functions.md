---
description: Functions included in the SDK
id: sdk-functions
slug: /sdk-functions
tags: [core-sdk-swift, sdk functions]
keywords: [imx-wallets]
---

# SDK Functions

## Workflow Functions

Utility functions accessed via `ImmutableXCore.shared` that will chain necessary API calls to complete a process or perform a transaction.

- Register a user with Immutable X
- Buy cryptocurrency via Moonpay
- Buy ERC721
- Sell ERC721
- Cancel order
- Transfer ERC20/ERC721/ETH

## Wallet Connection

In order to use any workflow functions, you will need to pass in the connected wallet provider. This means you will need to implement your own Wallet L1 [Signer](https://github.com/immutable/imx-core-sdk-swift/blob/main/Sources/ImmutableXCore/Signer.swift) and L2 [StarkSigner](https://github.com/immutable/imx-core-sdk-swift/blob/main/Sources/ImmutableXCore/Signer.swift).

Once you have a `Signer` instance you can generate the user's Stark key pair and use the result to instantiate a `StarkSigner`, for example, by using the default `StandardStarkSigner` provided by the SDK.

```swift
let keyPair = try await StarkKey.generateKeyPair(from: signer)
let starkSigner = StandardStarkSigner(pair: keyPair)
```
