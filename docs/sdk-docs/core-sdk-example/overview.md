---
description: Overview of the Core SDK TypeScript
id: overview
slug: /overview
tags: [core-sdk-example]
---

# Overview

:::danger Core TypeScript SDK Interface is unstable

The TypeScript SDK hasn't hit v1.0 yet. Its public interface is unstable, and there are breaking changes scheduled to happen in the coming weeks to its interface. Some of the upcoming changes include:

<br />

The `config` object is getting a revamp.

<br />

The `/src/utils/stark` signing methods will end up private.

<br />

The `/src/utils/crypto` methods will end up private.

<br />

Many API endpoints require a type to be defined. E.g., `TokenType.ETH`, `TokenType.ERC20`. We are doing away with these constants since they're superfluous and can be inferred from the API being called and the parameters passed in.

<br />

The workflow methods' signatures are changing to accommodate the new wallet SDK due to be released soon. E.g. the method.
`isRegisteredOnchain(signer: Signer, starkWallet: StarkWallet)` will be changed on v0.7 to `isRegisteredOnchain(walletConnection: WalletConnection)` to be compatible with the Wallets SDK's interface.

:::

The Immutable Core SDK provides convenient access to Immutable's APIs and smart contracts to help projects build better web3 games and marketplaces.

Currently, our SDK supports interactions with our application-specific rollup based on StarkWare's StarkEx. In future, we'll be adding StarkNet support across our platform.

## Documentation

See the [developer guides](https://docs.x.immutable.com) for information on building on Immutable X.

See the [API reference documentation](https://docs.x.immutable.com/reference) for more information on our API's.
