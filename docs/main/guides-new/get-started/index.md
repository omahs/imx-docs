---
title: "Get started"
slug: "/guides-new/get-started"
keywords: [imx-dx]
---

Guides provide information on how to execute key functionality of the Immutable X platform.

Specifically, they provide guidance on how to execute this functionality:
* Using our [SDKs](/docs/sdks)
* On the [StarkNet settlement layer](#)

## Initialize the [Core SDK](/sdk-docs/core-sdk-ts/overview)

The Core SDK is a wrapper around our [API](/reference) and provides the bulk of the functionality of the Immutable X platform.

Before you can start using the Core SDK, you must initialize the client.

#### Guide for:
* [Typescript Core SDK](#typescript-core-sdk)
* [Kotlin (JVM) Core SDK](#kotlin-jvm-core-sdk)
* [Swift Core SDK](#swift-core-sdk)
* [Golang Core SDK](#golang-core-sdk)

#### Typescript Core SDK

Initialize the Core SDK client with the network on which you want your application to run (see [all networks available](./src/config/config.ts)):

| Param | Description |
| -- | -- |
| `Config.SANDBOX` | The default test network (currently, it is Goërli)  |
| `Config.ROPSTEN` | Ropsten test network (to be deprecated soon) |
| `Config.PRODUCTION` | Ethereum network  |

```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';
const config = Config.SANDBOX; // Or PRODUCTION or SANDBOX
const client = new ImmutableX(config);
```

#### Kotlin (JVM) Core SDK
[Add info]

#### Swift Core SDK
[Add info]

#### Golang Core SDK
[Add info]
