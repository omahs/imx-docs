---
description: Understanding what is the Wallet SDK
id: overview
slug: /overview
tags: [wallet-sdk-web]
keywords: [imx-wallets]
---

# Overview

:::danger IMMUTABLE WALLET SDK WEB IS UNSTABLE
Since it has not hit the version 1.0 yet, its public interface should not be considered final. Future releases may include breaking changes without further notice. We will do our best to keep this documentation updated providing visibility on breaking changes planned.
:::

The [Immutable Wallet SDK Web](https://github.com/immutable/imx-wallet-sdk-web) (Wallet SDK) connects with users' L1 and L2 wallets and returns "signers". Signers are abstractions of blockchain user accounts (also known as "wallets") that can be used to sign messages and transactions that execute blockchain state-changing operations. The Wallet SDK is used in conjunction with the [Immutable Core SDK Typescript](https://github.com/immutable/imx-core-sdk) (Core SDK), to which the Wallet SDK passes the signers to the Core SDK to execute its functionality.

## Documentation

- [Wallet SDK reference](/sdk-docs/wallet-sdk-web)
- [Core SDK reference](/sdk-docs/core-sdk-ts)
- [Immutable X developer docs](/)
