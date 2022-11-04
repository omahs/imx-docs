---
description: Overview of the Wallet SDK iOS
id: overview
slug: /overview
tags: [wallet-sdk-ios]
keywords: [imx-wallets]
---

# Overview

:::danger Wallet SDK iOS Interface is unstable

The iOS SDK hasn't hit v1.0 yet. Its public interface is unstable, and there are breaking changes scheduled to happen in the coming weeks to its interface.

:::

The ImmutableX Wallet SDK iOS provides an easy way to connect your users Layer 1 Ethereum wallets and the derivation of an Immutable Layer 2 wallet.

Once both wallets are connected you will have access to the `Signer` (L1 wallet) and `StarkSigner` (L2 wallet) which can be used to perform transactions on ImmutableX.

Session management is handled for you and any changes to the wallets connection will be notified through the callback.

## Documentation

See the [developer guides](https://docs.x.immutable.com) for information on building on ImmutableX.
