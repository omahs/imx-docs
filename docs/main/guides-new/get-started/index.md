---
title: "Get started"
slug: "/guides-new/get-started"
keywords: [imx-dx]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Guides provide information on how to execute key functionality of the Immutable X platform.

Specifically, they provide guidance on how to:
* Use our [SDKs](/docs/sdks)
* Build on the [StarkNet settlement layer](#)

## Initialize the Core SDK

The [Core SDK](/sdk-docs/core-sdk-ts/overview) is a wrapper around our [API](/reference) and provides the bulk of the functionality of the Immutable X platform. Before you can start using the Core SDK, you must initialize the client.

Initialize the Core SDK client with the network on which you want your application to run:

| Network | Description |
| -- | -- |
| `SANDBOX` | The default test network (currently, it is Goërli)  |
| `ROPSTEN` | Ropsten test network (to be deprecated soon) |
| `PRODUCTION` | Ethereum network  |

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">
    Add description, if required.
    <br/><br/>

```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';
const config = Config.SANDBOX; // Or PRODUCTION or SANDBOX
const client = new ImmutableX(config);
```
  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
``` 
  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```
  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```
  </TabItem>
</Tabs>