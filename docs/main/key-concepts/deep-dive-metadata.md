---
title: "Deep dive into metadata"
slug: "/deep-dive-metadata"
---

import ListAdmonition from '@site/src/components/ListAdmonition';

<ListAdmonition>
    <ul>
        <li>What is metadata?</li>
        <li><a href="#where-is-metadata-stored">Where is metadata stored and a comparison of the options</a></li>
        <li><a href="#why-is-nft-metadata-so-important">What's so important about metadata?</a></li>
        <li><a href="#what-is-ipfs">What is IPFS?</a></li>
        <li><a href="#metadata-compatibility">Metadata compatibility</a></li>
    </ul>
</ListAdmonition>

Assets belonging to a collection (tokens that have been minted from a smart contract) can contain metadata that specify attributes about the asset. The aim of metadata is to allow applications to utilize this data.

#### Examples of how games or applications can use asset metadata:
* An in-game asset has characteristics that allow its owner to wield certain advantages within the game, like being able to defeat opponents whose assets have lesser characteristics. The game needs to be able to read the attributes of the asset in order to execute the game mechanics accordingly.
* An NFT marketplace will want to display attributes of an asset that is for sale, like the asset's name, rarity, image (using the URL specified in the asset's metadata), etc.

Metadata is most commonly in JSON format.

#### Example metadata:
```json
{
  "name": "Rufus",
  "animation_url": "https://guildofguardians.mypinata.cloud/ipfs/QmQDee8BPDfAH2ykRX375AWJwYZcbbJQa8wHokrSnMLLUC/HLS/Base/CollectionAsset_Hero_Rufus_Base.m3u8",
  "animation_url_mime_type": "application/vnd.apple.mpegurl",
  "image_url": "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Thumbnails/Heroes/Rufus/Thumbnail_Hero_Rufus_Base.png",
  "attack": 4,
  "collectable": true,
  "god": "Ranged",
  "element": "Water",
  "product": 2,
  "rarity": 2,
  "type": 3
}
```

## Where is metadata stored?

How metadata is stored impacts on a key characteristic of an NFT collection's metadata, which is its ***immutability***. The immutability of a collection's metadata requires the following:
1. Metadata values are fixed (determined by [how the metadata is hosted/represented](#1-host-or-create-a-representation-of-the-metadata-json-file))
2. Metadata is stored on the blockchain (on-chain) so that it cannot be updated (determined by [how the metadata is stored so it can be accessed by applications](#2-store-the-url-or-uri-of-the-metadata-where-it-can-be-accessed-by-applications))

:::info Metadata storage consists of two main components:
1. [Host or create a representation of the metadata JSON file](#1-host-or-create-a-representation-of-the-metadata-json-file)
2. [Store the URL or URI of the metadata where it can be accessed by applications](#2-store-the-url-or-uri-of-the-metadata-where-it-can-be-accessed-by-applications)
:::

### 1. Host or create a representation of the metadata JSON file

The way a collection's metadata is hosted or represented gives rise to whether or not it is immutable. Of the options below, option 1, where a hosted URL is provided as the location of a collection's metadata, is not immutable because the data provided at that link can be changed at anytime by the provider. However, option 2, which refers to the content via a hash produced from the content itself is immutable because the hash can only represent that exact data.

There are two main ways of hosting/representing a collection's metadata:
1. Host the metadata JSON file at a URL endpoint, ie. `https://mynftcollection.com/pink_elephants`
2. Use a content representation of the metadata JSON:
    * Create a CID (content identifier) hash of the metadata JSON, ie. `bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi`
    * Construct an [IPFS](#what-is-ipfs) URI using the CID, ie. `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi`
    * Provide a HTTP gateway URL to the IPFS URI, ie. `https://ipfs.io/ipfs/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi`


### 2. Store the URL or URI of the metadata where it can be accessed by applications

Where the metadata values are stored so that it can be accessed by applications also impacts on the immutability of that data. Data stored on the blockchain is immutable, whereas, data stored off-chain (ie. in application databases) can be updated by those hosting providers or other entities with the ability to manage those storage options.

### _On L1:_
Store the URL or URI in the `tokenURI` field in the token smart contract as part of the [ERC721 standard](../key-concepts/anatomy-smart-contract.md). Most marketplaces and applications on L1 know how to access the NFT metadata using this function.
```typescript 
function tokenURI(uint256 _tokenId) external view returns (string);

// Returns "https://mynftcollection.com/elephants" if hosted URL is provided

// Returns "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi"
// if IPFS URI is provided

// Returns "https://dweb.link/ipfs/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi"
// if a HTTP gateway for an IPFS URI is provided
```

### _On L2 (ImmutableX):_
There are two ways to store metadata about tokens on ImmutableX:
1. Provide a URL in the `metadata_api_url` request body when [creating a collection](https://docs.x.immutable.com/reference#/operations/createCollection)
2. Provide a `blueprint` string for a token that is [minted on ImmutableX](https://docs.x.immutable.com/reference#/operations/mintTokens)

***Comparison:***

| Storage method | Stored on-chain or off-chain? | What happens when the token is withdrawn to L1 |
| --- | --- | --- |
| [Providing a `metadata_api_url`](#providing-a-metadata_api_url) | Off-chain - stored in Immutable's databases and accessible via API endpoints | That URL is not specified on-chain (L1) |
| [Providing a `blueprint` string when token is minted on L2](#providing-a-blueprint-string-when-token-is-minted-on-l2) | Both - off-chain in Immutable's databases until the token is withdrawn to L1, then that value is written to the blockchain | The value is written to the L1 blockchain | 

#### Providing a `metadata_api_url`

After a user has uploaded their off chain metadata to a provider, they will need to provide ImmutableX with an API endpoint for us to retrieve the metadata. This is the value for `metadata_api_url` when [registering a collection](../launch-collection/register-collection/index.mdx). This endpoint must be accessible via HTTPs and need to return JSON. The IPFS gateway in the previous section is an example of this: 

```json 
https://bafybeiaujofuzawix6cgwawua6rkil2j4gurhp3jzwux7gdf5iwx4onmy4.ipfs.nftstorage.link
```
Our metadata crawler will access ```<metadata_api_url>/<token_id>``` at the time of minting a new token. It appends ```/<token_id>``` to the ```metadata_api_url```, for example: https://metadata_api_url.com/1 

Tips
* Ensure your endpoint returns valid JSON for each tokenID 
* Use a dedicated gateway if using IPFS 
* Avoid trailing characters in your `metadata_api_url` eg https://metadata_api_url.com/ will throw an error. 

:::info How can I modify off chain data?
Users can modify off chain data via an [asset metadata refresh](../guides/advanced-guides/asset-metadata-refreshes.md).
:::

#### Providing a `blueprint` string when token is minted on L2

The **blueprint** is a required field defined at the time of minting on ImmutableX for each NFT. This represents the on-chain immutable metadata of the NFT that will be written to the blockchain when it is withdrawn from ImmutableX L2 to L1. 

The blueprint can be a string of any format - examples include values like attack, an identifier, or an IPFS hash. This is passed to the `mintFor()` function in your smart contract where you could add some logic to decode it on-chain, or just save it unchanged. Check out our [minting assets guide](../guides/basic-guides/mint-assets/index.md) to see an example of this. 

### Costs of metadata storage

When metadata is stored on-chain, blockchain state is updated, so transaction costs apply. These costs increase if the amount of data stored is larger, like those of images, videos and media. This is why links to IPFS hashes representing metadata JSON values is typically what is stored, and within those metadata JSONs are links to other files stored on IPFS, like images or videos.

### Persisting metadata between L1 and L2

L2 tokens are merely representations of their corresponding L1 smart contract tokens. When a token is minted on L2, the L1 contract doesn't know anything about it. The link between the L1 and L2 token is only created when the L2 token is "withdrawn" to L1, which means that its corresponding L1 token is minted on the L1 smart contract. However, this token is purely derived from its L1 contract, and, as such, only contains data that the L1 contract contains. This means that its metadata will be that associated with the L1 contract, not anything that was specified on L2.

However, the way we understand that an L2 token represents a particular L1 smart contract token is because, when [registering a collection on ImmutableX](#), the L1 contract owner signs a transaction linking the L2 collection on ImmutableX to a L1 smart contract address. These nuances of this relationship highlights the nature of the L1-L2 relationship, in that the L1 "base chain" operates autonomously and independently of L2, while the L2 chain relies on L1 for transaction validation and finalization and can choose to update its state based on the L1 state.

#### How to ensure that L2 metadata is persisted when the token is withdrawn to L1?

ImmutableX provides a way for tokens to provide a string that is written to the L1 blockchain (Ethereum) when that token is withdrawn to L1. This is the `blueprint` parameter when an L2 token is minted and has the following characteristics:
* This can only be set when the token is minted on L2
* It is a required field (however, can be be any string, including an empty one)
* It cannot be updated once set

This can be used by collections that want to provide token owners with certainty regarding the attributes of their tokens on both L2 and L1.

## Why is NFT metadata so important?

An NFT's metadata is so important because it specifies the characteristics of an NFT, highlighting desired qualities (ie. like the qualities of a game item providing its user with special advantages), or providing information about the "rarity" of certain traits, thereby making certain assets more valuable.

Since an asset's traits can have a big impact on its utility or value, a major concern for NFT consumers is to ensure that the traits that they have purchased remain as they expect. This also suggests that NFT project creators would want to enhance trust in their projects and released assets by assuring consumers that those traits cannot be changed.

#### Best way to represent and store metadata so that it is immutable?
1. [Use a content hash (CID) representation of the token's metadata](#1-use-a-content-hash-cid-representation-of-the-tokens-metadata)
2. [Store this CID in the token's contract on-chain where a record of it remains forever](#2-store-this-cid-in-the-tokens-contract-on-chain-where-a-record-of-it-remains-forever)

### 1. Use a content hash (CID) representation of the token's metadata

The most common way that NFT collection creators ensure the immutability of an asset's metadata is by using content addressing of this data. Content addressing is when a hash is created from data (meaning that if this data changes, the hash will also change) and assigned as its content identifier (CID). Then, this identifier is used to organize and locate this data in a storage network. The most common storage network used by web3 collections is IPFS (interplanetary file system), which 

IPFS (interplanetary file system), which is a peer-to-peer storage network based on content addressing.

#### How does it work?
1. Create a hash from the content, called a [CID (content identifier)](https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid).
2. Upload the content to the [IPFS network](https://docs.ipfs.tech/concepts/how-ipfs-works/#directed-acyclic-graphs-dags)
3. IPFS uses a [distributed hash table](https://docs.ipfs.tech/concepts/how-ipfs-works/#distributed-hash-tables-dhts) (key-value database) to store the information about which node (computer) in the network holds the content represented by a particular CID.
4. The DHT can then be queried with the hash to find the node hosting the content, and then connecting to the node to get the content required.
5. The IPFS hash (CID) is stored in the token smart contract, and since the content represented by this hash cannot change without the hash changing, then it provides assurance that a collection's attributes are fixed. Of course, token contract owners can structure the contract in such a way that they can change the hash stored in the contract, however, since a smart contract's code is clearly visible on the blockchain, this behaviour can be publicly observed.

### 2. Store this CID in the token's contract on-chain where a record of it remains forever

As [stated above](#on-l1), typically the link to a collection's metadata is stored in the `tokenURI()` of the L1 smart contract. For maximum immutability, it would be ideal for the contract to be constructed such that this value cannot be updated once set. 

However, sometimes developers want to ensure that they are able to make updates to the metadata, ie. fix errors, update stated features, etc. that are not detrimental to token owners.

#### How to be able to update metadata whilst maintaining trust?

This comprises of a couple of elements:
* The tokenURI, which is the standard function to retrieve an NFT's metadata should be able to be updated
* "Maintaining trust" needs to be defined. Is it ensuring that:
  * The original metadata that a token owner received at the time of minting should remain relatively unchanged?
  * The original metadata should be always be accessible, regardless of what it has been changed to?

In order to determine the best metadata storage pattern for a collection, the creators need to decide on these factors.

There are a couple of pattern options (all require the `tokenURI()` to be updated):
1. Simply update the tokenURI of a contract with a new IPFS link, however, as this is an on-chain state update, there will be a blockchain record and previous values can always be accessed.
2. In the original metadata file (stored on IPFS), include a link to an IPNS URI, which points to the latest collection metadata JSON. Each time metadata is updated, the IPNS pointer can be pointed to a new IPFS URI. Thus, the latest metadata JSON file can always be accessed via the IPNS link. However, since the original metadata file contains the original metadata JSON, it is still always accessible. If applications and marketplaces adopted this pattern, they can display to users both the original and most updated metadata.

## What is IPFS?

InterPlanetary File System (IPFS) is a distributed system for storing and accessing files, websites, applications, and data. If that sounds like a mouthful, don't worry, you can think of IPFS as decentralized file storage. Here are some characteristics of IPFS: 

* Decentralized and not owned by a single party
* Censorship resistant 
* Easier to backup files 

IPFS uses a method called content addressing to access files. This involves generating a hash every time a file is uploaded and instead of using a URL like www.test.com/file we use the hash to locate the file. This hash also enables us to verify where the content has come from and whether it has been modified. [NFTStorage](https://nft.storage/) and [Pinata](https://www.pinata.cloud/) are examples of IPFS providers. 


When you upload a folder to an IPFS provider, you will often receive an IPFS Gateway which allows web browsers to access IPFS. There will also be an option to specify the type of [gateway]((https://www.pinata.cloud/blog/the-power-of-dedicated-gateways)) you use. 

* **Public gateway** - Available for everyone, free, slower, subject to rate limiting - use for testing 
* **Private(dedicated) gateway** - Ability to control access, costs money, generallty more uptime - use in production and mainnet launches 

Here's an example of a gateway you can copy into your browser: 

```json 
https://bafybeiaujofuzawix6cgwawua6rkil2j4gurhp3jzwux7gdf5iwx4onmy4.ipfs.nftstorage.link
```

* This is often referred to as a `baseURI` in smart contracts and on L1s. 
* On ImmutableX this is the `metadata_API_URL`

Any files inside the folder will be accessible by appending the filename to the gateway. Example: 

```json
https://bafybeiahnvizkbk5ni234sbqc572ejdpy5627d63jojr7lvygw4bcq6jny.ipfs.nftstorage.link/1`
```
In this example, the name of the file is `1`

### Alternative storage options
While IPFS is the most popular method of storing NFT data, there are alternatives: 

* Centralized - [AWS](https://aws.amazon.com/s3/)
* Decentralized - [Arweave ](https://www.arweave.org/)

## Metadata compatibility 

It's also worth mentioning that while most NFTs follow the ERC721 standard, marketplaces can have different standards for metadata. This means metadata needs to be structured in a certain way to be accessed. For example, in all ImmutableX marketplaces, metadata is not nested. 

```json
{
  "name": "Rufus",
  "animation_url": "https://guildofguardians.mypinata.cloud/ipfs/QmQDee8BPDfAH2ykRX375AWJwYZcbbJQa8wHokrSnMLLUC/HLS/Base/CollectionAsset_Hero_Rufus_Base.m3u8",
  "animation_url_mime_type": "application/vnd.apple.mpegurl",
  "image_url": "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Thumbnails/Heroes/Rufus/Thumbnail_Hero_Rufus_Base.png",
  "attack": 4,
  "collectable": true,
  "element": "Water",
}
```
whereas in a marketplace like OpenSea, fields like attack, collectable and element would be nested under the attributes field. 

```json
{
  "description": "Rufus but on a different marketplace", 
  "external_url": "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Thumbnails/Heroes/Rufus/Thumbnail_Hero_Rufus_Base.png", 
  "image": "https://gog-art-assets.s3-ap-southeast-2.amazonaws.com/Content/Thumbnails/Heroes/Rufus/Thumbnail_Hero_Rufus_Base.png", 
  "name": "Rufus",
  "attributes": [   
    { "trait_type": "Example 1", "value": "Black" },
    { "trait_type": "Example 2", "value": "Red" },
    { "trait_type": "Example 3", "value": "Yellow" } ], 
}
```
Read more about our metadata schema [here](../launch-collection/register-metadata-schema/index.md).