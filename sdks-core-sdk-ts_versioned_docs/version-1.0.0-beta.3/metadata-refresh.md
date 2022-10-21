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

1. [Installed](/sdk-docs/core-sdk-ts/installation) the Core Typescript SDK
1. [Initialized](/sdk-docs/core-sdk-ts/initialization) the Core Typescript SDK
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
    pageSize: 5,
    collection: collectionAddress,
});

// Example response
{
  result: [
    {
      token_address: '0x94742ebb6279a3ddb70a1bec53ecd75',
      token_id: '5',
      id: '0x1111114971ed8cf199c019028dea827bd5f05735111111111',
      user: '0xa257d2c65c91d1e111181da9fbafac8a3111111',
      status: 'imx',
      uri: null,
      name: 'Sample NFT',
      description: null,
      image_url: 'https://www.example.com/some-image/5',
      metadata: {
        name: 'Some image',
        image_url: 'https://www.example.com/some-image/5'
      },
      collection: {
        name: '0x111111bb6279a3bc3e44da9ddb70a1bec111111',
        icon_url: 'https://www.example.com/some-icon/5'
      },
      created_at: '2022-09-30T10:58:32.04664Z',
      updated_at: '2022-09-30T11:58:13.85627Z'
    },
    ......
  ],
  cursor: 'eyJpZCI6IjB4NjczZWY3MDI2NDk0NzAzNjA4OTFiZDZiZTdlN2FiZTdkYTgyNzY0MTIyYzVjNTczMTllNTUyMWVkMGRjN2E5YSIsIm5hbWUiOiJMaW5hIiwidXBkYXRlWUiOiJMaW5hIiwidXBkYXR',
  remaining: 0
}

const tokenIds: string[] = listAssetsResponse.result.map((asset) => asset.token_id);

const createRefreshRequestParams = {
  collection_address: collectionAddress,
  token_ids: tokenIds // Token ids for metadata refresh, limit to 1000 per request
};
```


:::info Customising List Assets

You can narrow down the results returned by listAssets. Please refer to the [listAssets request SDK reference](https://docs.x.immutable.com/sdk-references/core-sdk-ts/1.0.0-beta.3/interfaces/index.assetsapilistassetsrequest).

For more information regarding limits on metadata refreshes, please refer to [metadata refresh limits](https://docs.x.immutable.com/docs/asset-metadata-refreshes#metadata-refresh-limits).
:::

### Request the refresh

```ts
const createMetadataRefreshResponse = await client.createMetadataRefresh(ethSigner, createRefreshRequestParams);
// Example response

{ refresh_id: '8cc5552-6276-4af7-9099-ce4135350e2d' }
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

// Once the metadata refresh request has been completed
{
  refresh_id: '8cc5552-6276-4af7-9099-ce4135350e2d',
  status: 'completed',
  collection_address: '0x6e7eaa111499b876b964f24ae4a9d36bf8228dff',
  started_at: '2022-10-20T04:17:51.351675Z',
  completed_at: '2022-10-20T04:19:23.240863Z',
  summary: { succeeded: 5, failed: 0, pending: 0 }
}
```

:::info Metadata Refresh Statuses

For more information regarding refresh and summary statuses, please refer to [viewing status of a metadata refresh](https://docs.x.immutable.com/docs/asset-metadata-refreshes#viewing-the-status-of-a-metadata-refresh).
:::

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
      client_response_body: "{message: 'Bad request'}",
      error_code: 'unable_to_retrieve_metadata',
      created_at: '2022-10-20T04:25:26.354327Z'
    },
    ......
  ],
  cursor: 'eyJjcmVhdGVkX2F0IjoiMjAyMi0xMC0yMFQwNDoyNDo1Ny4xMjYxODZaIiwiaWQiOiI2MTZkMTg4MC0zOTZiLTRmMGUtOGZmaaa',
  remaining: 0
}
```

:::info Metadata Refresh Errors

For more information regarding metadata refresh errors and various error codes, please refer to [viewing metadata refresh errors](https://docs.x.immutable.com/docs/asset-metadata-refreshes#viewing-metadata-refresh-errors).
:::

### Viewing all your current and previous refreshes

```ts
const listMetadataRefreshesRespose = await client.listMetadataRefreshes(ethSigner, collectionAddress);

// Example response
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
