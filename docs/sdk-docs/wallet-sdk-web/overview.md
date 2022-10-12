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

The [Immutable Wallet SDK Web](https://www.npmjs.com/package/@imtbl/wallet-sdk-web) (Wallet SDK) connects with users' L1 and L2 wallets and returns "signers". Signers are abstractions of blockchain user accounts (also known as "wallets") that can be used to sign messages and transactions that execute blockchain state-changing operations. The Wallet SDK is used in conjunction with the [Immutable Core SDK Typescript](https://www.npmjs.com/package/@imtbl/core-sdk) (Core SDK), to which the Wallet SDK passes the signers to the Core SDK to execute its functionality.

## Documentation

- [Core SDK reference](/sdk-docs/core-sdk-ts)
- [ImmutableX developer docs](/)
- [UI guide for implementing user wallet interactions](/docs/wallet-sdk-ui-guide)
