---
id: 'minting-on-immutable-x'
title: 'Minting on ImmutableX'
slug: '/minting-on-immutable-x'
sidebar_position: 4
keywords: [imx-games]
---

This guide provides context on the steps required to list your game items, collectibles, or other ERC-721 assets (otherwise known as NFTs) on ImmutableX. It's a good overview of tasks and concepts if you're new to the space, or if you want to learn more about the benefits of minting on ImmutableX.
:::info Ready to start?
If you're already across the details and ready to get started, see our [onboarding guide](../guides/onboarding/index.md)
:::

## Benefits

ImmutableX is a “Layer 2” (L2) scaling solution built on top of Ethereum, otherwise known as Layer 1 (L1). ImmutableX inherits the network and security of the Ethereum blockchain, and allows customers to mint and trade NFTs at zero gas cost, carbon-neutrally, and at more than 9,000 transactions per second (TPS) — whereas Ethereum currently does 5.

For more detail on how it works, see:

- [Architecture overview](../overview/architecture-overview.md)
- [Ethereum scalability](../overview/ethereum-scalability.md)

## Liquidity

ImmutableX has a shared assetbook and a shared orderbook. Every asset minted into ImmutableX is stored in the shared assetbook. This enables any application on ImmutableX to view and display the assets of any other application. In addition, every order submitted to ImmutableX is stored by Immutable and made available to all marketplaces, which helps deliver the best liquidity outcome for projects on ImmutableX.

Building on ImmutableX means that you:

- Do not need to build, manage or maintain your own orderbook to facilitate trades.
- Have access to pools of demand that exist outside of a single marketplace.

Here’s an example:

- Project A (marketplace A) lists an NFT (NFT-A) in marketplace A.
- Project B (marketplace B) displays NFT-A on marketplace B.
- Project B users see the NFT and purchase NFT-A on marketplace B.
- NFT-A sale is complete.

In this example, marketplace A receives their market-maker fee and marketplace B receives their market-taker fee on the sale. To summarize, having orders listed on more than one marketplace means that your orders are more likely to sell faster, or for a greater price if on auction.

**[Learn more about fees](../guides/fees/index.md)**

## Asset metadata

There are two types of metadata:

- **Immutable metadata** — Set at the time of asset creation, enforced by the proof, and available [on-chain](./minting-on-immutable-x.md#on-chain-versus-off-chain) when an L2-minted NFT is withdrawn for the first time. The on-chain metadata is stored in the [blueprint](./minting-on-immutable-x.md#metadata-blueprint) or `mintingBlob`. This is where you should store permanent properties, such as IPFS hashes or values you want to access on L1.
- **Mutable metadata** — Fully controlled by the application, and not recorded on-chain, mutable metadata is most useful for marketplaces to describe assets accurately to users. To ensure your NFT appears in marketplaces built on ImmutableX correctly, it is recommended that every project register a metadata schema for their collection. [Learn more](../guides/asset-management/asset-metadata.mdx).

## On-chain versus off-chain

On-chain metadata refers to properties or characteristics that you set for your assets within the smart contract itself, meaning data that is stored on the blockchain (A.K.A on-chain).

The purpose of on-chain data is to uniquely identify the value of the NFT, for example, rarity or character type, but you should store as little data on-chain as possible. In cases where NFTs represent artworks or other media forms, uploading an entire JPEG to the blockchain will cost a huge amount. This is why it's common for most NFT metadata to be stored off-chain.

NFTs often use a Uniform Resource Identifier (URI) for off-chain metadata, which is a link to an external off-chain resource where the metadata for that particular asset is stored, usually in a JSON format. This URI is stored in the `tokenURI` field as part of the [ERC-721 standard](../overview/introduction-smart-contracts.md#erc721):

```solidity
function tokenURI(uint256 _tokenId) external view returns (string);
```

Because this data is off-chain, whoever controls the storage location has the ability to change it. For example, if their server is shut down the metadata will no longer be accessible. Concerns like this are often why developers choose to use [IPFS](https://docs.ipfs.io/) hashes or links to guarantee the reliability and immutability of this off-chain data.

## Metadata API

Projects are expected to self-host their media assets, including both the endpoints for the metadata of the assets, as well as other media defined by the metadata. When [registering your collection's contract](../guides/onboarding/collection-registration.mdx) with ImmutableX, you need to provide a metadata API endpoint for us to retrieve metadata properties for each of your NFTs.

Our metadata crawler will access `<metadata_api_url>/<token_id>` at the time of minting a new token. It appends `/<token_id>` to the metadata_api_url, for example: `https://metadata_api_url.com/1`

Important:

- Make sure your endpoint returns a JSON response for each token ID that will be minted.
- The endpoint URL must be a valid `https` address. If you are using IPFS, you should set up a dedicated (not public) gateway.
- Your metadata endpoint should be able to handle a large amount of requests depending on the volume of your mints. If it fails to provide a response to the crawler after a few retries, or if it gets rate limited, your assets may be displayed without metadata.
- Do not include any trailing characters on the metadata API URL that you provide. For example, if you submit `https://metadata_api_url.com/` it will be read as `/<token_id>`, resulting in https://metadata_api_url.com//1
- Your metadata endpoint does not have to be at the very root of your domain. For example, `https://api.metadata.com/token` is still a valid metadata URL and will result in a crawl of `https://api.metadata.com/token/1`.

After an asset from your collection is minted, we store the metadata returned by this endpoint in our database, and subsequent callers can use these [metadata properties](../guides/asset-management/asset-metadata.mdx#core-properties) in filter queries to the APIs (as defined in your metadata schema).

:::info Updating metadata
Your collection’s metadata schema can be updated by [editing the collection metadata schema.](/docs/metadata-schema-registration#edit-metadata-schema).

In order to update asset metadata values based on the changes that you've made, you can [request a metadata refresh.](/docs/asset-metadata-refreshes) You will need to identify the tokens that need to be re-crawled, and the updates that have been made to them via the Metadata API.

We aim to process requests within 2 business days (AEST) but this can take longer depending on demand.
:::

## Metadata blueprint

The blueprint is a required field defined at the time of minting on ImmutableX for each NFT. This represents the on-chain immutable metadata of the NFT that will be written to the blockchain when it is withdrawn from ImmutableX.

The blueprint string can be of any format; typically it's a comma delimited string (e.g. "100,water,2,3") or an IPFS hash. This is passed to the `mintFor` function in your smart contract, where you can implement custom logic to decode it on-chain or just save it as it is.

For a better understanding of how the blueprint is used, take a look at our smart contract templates in the [imx-contracts repo](https://github.com/immutable/imx-contracts).
:::info Blueprint data
The metadata that appears on ImmutableX does not read any data from the blueprint, so there's no reason to define a blueprint as an entire JSON string. Instead, it could be a link, hash, or a few select properties to optionally decode and save in custom mappings in your smart contract
:::

# Minting on Layer 2

For a smart contract to work with ImmutableX, we need an implementation of a `mintFor` function, which is what our STARK contract calls at the time of withdrawing a minted token from L2 to L1. Contracts also require an `owner()` function to verify the contract’s owner. There is no smart contract interaction at the time of minting on L2, although the minted token will have a L1 representation, token ID, and immutable metadata.

## Token ID

When minting on ImmutableX, you will give us the token ID, which is the L1 token ID representing the token in your smart contract. As mentioned above, you also have to provide a [blueprint](./minting-on-immutable-x.md#metadata-blueprint) for each token. The blueprint represents the on-chain, immutable metadata of the NFT that will be passed (along with the token ID) to your `mintFor` function.

In a Layer 1 smart contract, it's common for the ERC-721 token ID to be incremented in the minting function. With ImmutableX, the token ID is defined at the time of minting to ImmutableX and passed to the `mintFor` function in the minting blob, which then gets decoded into the respective ID and blueprint variables. You will have to keep track of the token ID on your end and increment it off-chain for every mint.

Additionally, token IDs provided when minting on L2 must be unique. Providing a duplicate token ID will result in an API error, with the ID of the duplicate token being returned in the error message. For example, if your mint request contains a token with the ID of `10`, and your collection already has a token with an ID of `10`, you'll get the error message: `Error inserting asset, duplicate ID and token address: [10]`.

**[Learn more in our introduction to smart contracts](../overview/introduction-smart-contracts.md)**

## Mintable contracts

If you have an existing smart contract you want to mint assets into, you'll need to set up a proxy contract to implement the `mintFor` action and ensure that this proxy contract has the appropriate permissions to mint on your non-mintable ERC-721 contract. Your main contract must adopt a flexible enough permission structure to allow for new 'minter' proxy contracts.

## Minting assets

You can mint more than one asset in an API call, and even mint multiple assets to multiple users.
After your [collection's contract has been registered](../guides/onboarding/collection-registration.mdx), you can begin minting.

Here's a summary of things to be aware of:

- **On-chain properties** — If your contract contains [on-chain properties](./minting-on-immutable-x.md#on-chain-versus-off-chain), ensure they are passed into the mint function's [blueprint metadata](./minting-on-immutable-x.md#metadata-blueprint), as those are the only extra values the `mintFor` receives during withdrawal.
- **Token URI** — Consider what data will need to be on-chain if the asset is withdrawn. To include a property on-chain, often a base URI will be used pointing to a decentralized file service, like an IPFS. This ensures the rest of the data will never change and can still be retrieved without having it all on-chain.
- **Token IDs cannot be changed** — When minting, you will [set the IDs](./minting-on-immutable-x.md#token-id) for your assets, but note that they cannot be changed later.
- **Token IDs must be unique** – When minting, the token ID provided must not have already been used in the same collection, as [explained above](./minting-on-immutable-x.md#token-id).
- **Minting throughput** — We recommend doing more mints per minting request over multiple minting requests with fewer mints per request. There is no restriction on the volume of concurrent minting requests, however, you should handle http status code `429` (too many requests) with a sensible retry mechanism. For example: Wait a second then try again. If the same error occurs, wait two seconds and try again, and so on.
- **Length of your asset ID** – Remember that your Asset ID is part of your on-chain mint. If an owner of your collection withdraws the asset to L1, the larger the ID you use, the more gas it will cost buyers to withdraw and transact in L1.

**[Read more about minting assets](../guides/asset-management/asset-minting.md)**
