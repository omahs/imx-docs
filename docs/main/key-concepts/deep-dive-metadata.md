---
title: "Deep dive into metadata"
slug: "/deep-dive-metadata"
---

import ListAdmonition from '@site/src/components/ListAdmonition';

<ListAdmonition>
    <ul>
        <li>What is metadata?</li>
        <li>On-chain vs off-chain metadata</li>
        <li>How does a smart contract specify metadata?</li>
        <li>What is IPFS?</li>
        <li>Metadata compatibility</li>
    </ul>
</ListAdmonition>

Metadata provides information about an NFT's attributes. These attributes contribute to an NFT's utility and applications can use them in different ways. For example a marketplace may use an attribute like `colour` to filter for all the blue items, while a game may use an attribute like  `attack` as a stat within the game. The most common format for metadata is JSON. 

Here's an example: 

```json
  "name": "This is an X and not a Ryan circle",
  "description": "This is not a circle",
  "image": "https://bafybeif3gn5dusnvnuwhrukgswvwdm2gur74czjrd35bozkfjcs6y7roze.ipfs.nftstorage.link/",
  "Background": "Black",
  "Eye color": "Yellow",
```

# Types of metadata

Before diving into how metadata works on ImmutableX, it's important to understand the two types of metadata and their traits:

* **On chain** refers to metadata stored on the blockchain 
* **Off chain** refers to metadata stored anywhere else 

Here's a quick comparison: 

<table>
  <thead>
  <tr>
    <th>
      Trait 
    </th>
    <th>
      On chain 
    </th>
    <th>
      Off chain 
    </th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      What to store
    </td>
    <td>
      Permanent properties that uniquely identify the NFT. eg rarity, identifier. 
    </td>
    <td>
      Flexible properties that can be changed. eg attack, aesthetics, level. 
    </td>
  </tr>
  <tr>
    <td>
      Mutable
    </td>
    <td>
    No - Determined at time of mint and cannot be modified since it is stored on chain
    </td>
    <td>
    Yes - Storage providers can modify data and storage owners can also modify data using metadata refreshes. 
    </td>
  </tr>
  <tr>
    <td>
    Cost
    </td>
    <td>
      High - Images, videos and media are expensive
    </td>
    <td>
      Low - Depending on storage provider 
    </td>
  </tr>
  <tr>
    <td>
      Implementation on IMX
    </td>
    <td>
      Set the `blueprint` parameter when minting
    </td>
    <td>
      Set the `metadata_api_url` parameter when creating a collection, and create a metadata schema for that collection
    </td>
  </tr>
  </tbody>
</table>	

We will explain the `blueprint` and `metadata_api_url` terms later in this article. Generally off chain options are used by applications since storage is significantly cheaper, and many applications benefit from being able to modify their metadata. 

# Where is metadata specified in a smart contract? 

NFTs often use a Uniform Resource Identifier (URI) for **off-chain** metadata, which is a link to an external off-chain resource where the metadata for that particular asset is stored, usually in a JSON format. This URI is stored in the tokenURI field as part of the [ERC721 standard](/docs/anatomy-smart-contract). 

```typescript 
function tokenURI(uint256 _tokenId) external view returns (string);
```

Since off chain data is dependent on the storage provider, whoever controls the storage location has the ability to change it. For example, if their server is shut down the metadata will no longer be accessible. Concerns like this are often why developers choose to use IPFS hashes or links to guarantee the reliability of this off-chain data. Let's explore this further using the example of [IPFS](https://docs.ipfs.tech/concepts/what-is-ipfs/).

# What is IPFS?

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


# Off chain metadata on ImmutableX 

After a user has uploaded their off chain metadata to a provider, they will need to provide ImmutableX with an API endpoint for us to retrieve the metadata. This is the value for `metadata_api_url` when [registering a collection](docs/main/launch-collection-new/register-collection). This endpoint must be accessible via HTTPs and need to return JSON. The IPFS gateway in the previous section is an example of this: 

```json 
https://bafybeiaujofuzawix6cgwawua6rkil2j4gurhp3jzwux7gdf5iwx4onmy4.ipfs.nftstorage.link
```
Our metadata crawler will access ```<metadata_api_url>/<token_id>``` at the time of minting a new token. It appends ```/<token_id>``` to the ```metadata_api_url```, for example: https://metadata_api_url.com/1 

Tips
* Ensure your endpoint returns valid JSON for each tokenID 
* Use a dedicated gateway if using IPFS 
* Avoid trailing characters in your `metadata_api_url` eg https://metadata_api_url.com/ will throw an error. 

:::info How can I modify off chain data?
Users can modify off chain data via an [asset metadata refresh](/docs/asset-metadata-refreshes).
:::

## On chain metadata on ImmutableX

The **blueprint** is a required field defined at the time of minting on ImmutableX for each NFT. This represents the on-chain immutable metadata of the NFT that will be written to the blockchain when it is withdrawn from ImmutableX L2 to L1. 

The blueprint can be a string of any format - examples include values like attack, an identifier, or an IPFS hash. This is passed to the `mintFor()` function in your smart contract where you could add some logic to decode it on-chain, or just save it unchanged. Check out our [minting assets guide](/docs/how-to-mint-assets) to see an example of this. 


# Metadata compatibility 

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
Read more about our metadata schema [here](/docs/launch-collection/register-metadata-schema).