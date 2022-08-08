---
description: How to make a first SDK request
id: quickstart
slug: /quickstart
tags: [core-sdk-swift, quickstart]
---

# Quickstart

## Initialisation

The Core SDK must be initialised before any of its classes are used. Upon initialisation the base environment and log level may be defined. Once initialised a shared instace will be available for accessing the [Workflow Functions](#workflow-functions).

For example, you initialise the SDK and retrieve a URL to buy crypto through Moonpay:

```swift
ImmutableXCore.initialize(base: .ropsten)

let url = try await ImmutableXCore.shared.buyCryptoURL(signer: signer)
```

## Standard API Requests

The Core SDK includes classes that interact with the Immutable X APIs.

e.g. Get a list of collections ordered by name in ascending order

```swift
let collections = try await CollectionsAPI.listCollections(
    pageSize: 20,
    orderBy: .name,
    direction: "asc"
)
```

View the [OpenAPI spec](https://github.com/immutable/imx-core-sdk-swift/blob/main/openapi.json) for a full list of API requests available in the Core SDK.

NOTE: Closure based APIs are also available.
