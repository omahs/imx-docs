---
description: Migrate to the Core SDK
id: core-sdk-migration-guide
slug: /core-sdk-migration-guide
tags: [core-sdk-ts]
keywords: [imx-dx]
---

# Core SDK migration guide

## Learn how to migrate to the Core Typescript SDK

The Core TypeScript SDK was released recently to make integrating with ImmutableX more straightforward and intuitive. We listened to a lot of your feedback, spent much time iterating on the interface of the Core SDK and have landed on a new interface that we’re excited to unveil and maintain over a long time. 

Our old [imx-sdk-js](https://www.npmjs.com/package/@imtbl/imx-sdk) is bloated, unintuitive and hard to grok. It’s worth investing the time to migrate from the imx-sdk-js over to the new Core SDK. 

## Why should you migrate?

The new Core SDK is vastly improved when working with the ImmutableX API. It's easy to understand and use. The new Core SDK’s improvement statistics speak for themselves:

* Hand-written code reduced from **10,589** lines to **2,365** lines (down **78%** 📉)
* Package size reduced from **1.9MB** to **668kB** (down **65%** 📉)
* Minified package size reduced from **575kB** to **195kB** (down **67%** 📉)
* External dependencies reduced from **42** to **9** (down **79%** 📉)
* The number of publicly-exposed functions was reduced from hundreds to just **45** via one ImmutableX class, making it easy to understand all the functionality on offer.
* The confusing fp-ts library has been completely eradicated.

## When should you migrate?

You should consider migrating to Core SDK v1.0.0-beta3 if you use the imx-sdk from the backend to:
* Create projects
* Create and manage collections
* Manage metadata schema
* Mint assets

The Core SDK supports newer features like metadata refresh. If you’d like to trigger asset metadata refreshes using the SDK, you should consider migrating to the Core SDK. 

## What has changed in Core SDK v1.0.0-beta3? 

### Changed:

* ***The Core SDK no longer performs deterministic stark key generation. You will need to persist your stark key as a secret along with your ETH private key to sign for API calls.*** We removed the deterministic key generation feature from the Core SDK to ensure it's lean and only has features that pertain to its domain. The Wallet SDK will provide the deterministic key generation shortly. In the interim, using the [generate-stark-key](https://github.com/immutable/generate-stark-key/) tool, you can generate your stark key from your Ethereum private key.
* Expose fewer public methods to make it easier for us to maintain the SDK.
* Introduced a single entry point for the SDK to improve discoverability
* Clear response and error types
* Simplified complex types required for creating trades, orders and transfers
* Make the deposit method on SDK consistent with the API and industry norms.
* SDK now handles L1 signature-protected APIs; no need to generate imx-signature separately for authentication headers

### Fixed

* Correct the x-sdk-version header value

### Added:

* Added methods from MetadataRefreshesApi

## Migration path from imx-sdk to Core SDK v1.0.0-beta3 for use in the backend

1. Retrieve and persist your stark key using the [generate-stark-key](https://github.com/immutable/generate-stark-key/) tool. Add an entry for your stark key in your secrets manager or .env file like the one below.
```sh
PRIVATE_KEY=<your-eth-key-here>
STARK_PRIVATE_KEY=<your-stark-key-here>
```
2. Remove imx-sdk from the list of dependencies
```sh
npm remove @imtbl/imx-sdk
```
3. Add @imtbl/core-sdk as a dependency. 
```sh
npm i @imtbl/core-sdk
```
4. Call the method of choice. Check out the [examples](https://github.com/immutable/imx-core-sdk/tree/main/examples) to see how to call individual endpoints.

## Migration path from Core SDK v0.7.0 to Core SDK v1.0.0-beta3

1. Retrieve and persist your stark key using the [generate-stark-key](https://github.com/immutable/generate-stark-key/) tool. Add an entry for your stark key in your secrets manager or .env file like the one below.
```sh
PRIVATE_KEY=<your-eth-key-here>
STARK_PRIVATE_KEY=<your-stark-key-here>
```
2. Remove imx-core-sdk v0.7.0 from the list of dependencies
```sh
npm remove @imtbl/core-sdk
```
3. Add @imtbl/core-sdk v1.0.0-beta3 as a dependency. 
```sh
npm i @imtbl/core-sdk
```
4. Call the method of choice. Check out the [examples](https://github.com/immutable/imx-core-sdk/tree/main/examples) to see how to call individual endpoints.
