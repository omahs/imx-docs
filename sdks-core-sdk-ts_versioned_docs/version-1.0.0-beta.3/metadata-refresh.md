---
description: Metadata refresh walkthrough
id: metadata-refresh
slug: /metadata-refresh
tags: [core-sdk-ts]
keywords: [imx-games]
---

# Metadata Refresh

Immutable allows developers to request [asset metadata refreshes](/docs/asset-metadata-refreshes) on-demand. This introductory guide shows you how to use the [Core Typescript SDK](https://docs.x.immutable.com/sdk-references/core-sdk-ts/1.0.0-beta.3/classes/immutablex.immutablex) to request and check for updates on your metadata refreshes.

## Pre-requisites

1. [Installed](sdk-docs/core-sdk-ts/installation) the Core Typescript SDK
1. [Initialized](sdk-docs/core-sdk-ts/initialization) the Core Typescript SDK
1. Have satisified all the metadata refresh [requirements](/docs/asset-metadata-refreshes#requirements)


## Examples

### Create Ethereum Signer

First, we need to create an `Ethereum Signer` to tell Immutable that you're the right person to request the refresh:

```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';
import { Wallet } from '@ethersproject/wallet';

// Create Ethereum Signer
const ethSigner = new Wallet('YOUR_PRIVATE_ETH_KEY');

// Initialize client

const config = Config.SANDBOX;
const client = new ImmutableX(config);

// Address of the collection the asset was minted under.
// This is the address that was generated when you registered
// your collection with Immutable e.g 0x6e7eaac66499b8733964f24ae4a9d36bf8118dff

const collectionAddress = 'YOUR_COLLECTION_ADDRESS';
```

### Construct the refresh request

In order to construct the refresh request, we need to grab the token ids for the assets that require a metadata refresh:

```ts
// Fetch token ids for refresh
const listAssetsResponse  = await client.listAssets({
    collection: collectionAddress,
});

const token_ids: string[] = listAssetsResponse.result.map((asset) => asset.token_id);
// Example response
// ['1', '2', '3', '4']

const createRefreshRequestParams = {
  collection_address: collectionAddress,
  token_ids: token_ids // Token ids which require metadata refresh
};
```

:::info Customising List Assets

You can narrow down the results returned by listAssets. Please refer to the [listAssets request SDK reference](https://docs.x.immutable.com/sdk-references/core-sdk-ts/1.0.0-beta.3/interfaces/index.assetsapilistassetsrequest).
:::

### Request the refresh

```ts
const createMetadataRefreshResponse = await client.createMetadataRefresh(ethSigner, createRefreshRequestParams);
// Example response
// { refresh_id: '8cc5552-6276-4af7-9099-ce4135350e2d' }
```

### Checking the status of your request

The duration of the refresh depends on the amount of tokens in the request. You can check on the status of your request using the following code:

```ts
const refresh_id = createMetadataRefreshResponse.refresh_id;
const getMetadataRefreshResultsResponse = await client.getMetadataRefreshResults(ethSigner, refresh_id);
// Example response
{
  refresh_id: '8cc5552-6276-4af7-9099-ce4135350e2d',
  status: 'in_progress',
  collection_address: '0x6e7eaa111499b876b964f24ae4a9d36bf8228dff',
  started_at: '2022-10-20T04:17:51.351675Z',
  completed_at: null,
  summary: { succeeded: 3, failed: 0, pending: 2 }
}

// Once the request is complete
{
  refresh_id: '8cc5552-6276-4af7-9099-ce4135350e2d',
  status: 'completed',
  collection_address: '0x6e7eaa111499b876b964f24ae4a9d36bf8228dff',
  started_at: '2022-10-20T04:17:51.351675Z',
  completed_at: '2022-10-20T04:19:23.240863Z',
  summary: { succeeded: 5, failed: 0, pending: 0 }
}
```

### Checking the status of failed requests

If your requests fails for some reason, you should see the folowing response:

```ts
{
  refresh_id: '2a5796a1-2f2f-4443-8142-bfcf0ffcdfcb',
  status: 'completed',
  collection_address: '0x6e7eaac66111b876b964f24ae4a9d36bf8228dff',
  started_at: '2022-10-20T04:23:52.316555Z',
  completed_at: '2022-10-20T04:25:26.359759Z',
  summary: { succeeded: 0, failed: 5, pending: 0 }
}
```

To check why your requests failed, you can use the following snippet:

```ts
const getMetadataRefreshErrors = await client.getMetadataRefreshErrors(ethSigner, refresh_id);
// Example output
{
  result: [
    {
      token_id: '12',
      collection_address: '0x6e7eaa111119b876b964f24ae4a9d36bf8228dff',
      client_token_metadata_url: 'https://your-metadata-url.com/12',
      client_response_status_code: 400,
      client_response_body: "{message: 'Bad request'},
      error_code: 'unable_to_retrieve_metadata',
      created_at: '2022-10-20T04:25:26.354327Z'
    },
    ......
  ],
  cursor: 'eyJjcmVhdGVkX2F0IjoiMjAyMi0xMC0yMFQwNDoyNDo1Ny4xMjYxODZaIiwiaWQiOiI2MTZkMTg4MC0zOTZiLTRmMGUtOGZmaaa',
  remaining: 0
}
```

### Viewing all your current and previous refreshes

```ts
{
  result: [
    {
      refresh_id: '2a5796a1-1f1f-4443-8142-bfcf0ffcdfcb',
      status: 'completed',
      collection_address: '0x6e7e111199b876b964f24ae4a9d36bf8228dff',
      started_at: '2022-10-20T04:23:52.316555Z',
      completed_at: '2022-10-20T04:25:26.359759Z'
    },
    {
      refresh_id: '8cc2c472-6276-4af7-9099-ce4135350e2d',
      status: 'completed',
      collection_address: '0x6e7e111199b876b964f24ae4a9d36bf8228dff',
      started_at: '2022-10-20T04:17:51.351675Z',
      completed_at: '2022-10-20T04:19:23.240863Z'
    }
  ],
  cursor: 'eyJjcmVhdGVkX2F0IjoiMjAyMi0xMC0yMFQwNDoxNzo1MS4zNTE2NzVaIiwiaWQiOiI4Y2MyYzQ3Mi02Mjc2LTRhZjctOTA5OS1jZ111111',
  remaining: 0
}
```
