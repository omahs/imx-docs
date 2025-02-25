---
id: "architecture-overview"
title: "Architecture overview"
slug: "/architecture-overview"
excerpt: "The core components of ImmutableX"
sidebar_position: 5
keywords: [imx-dx]
---
The ImmutableX stack consists primarily of: the ZK-Rollup scaling engine, Link UI, and the APIs. Together, these components lower the barriers of entry in the NFT space for developers and users, enabling instant trade confirmation, massive scalability, and gas-free minting and trading — all without compromising user custody.

There are three distinctions to make when referring to ImmutableX: 
- **ImmutableX platform** is the core infrastructure that allows for the minting, depositing, withdrawing and trading of assets on Layer 2 blockchain.
- **ImmutableX token** (IMX) is the ERC-20 utility token of the ImmutableX protocol, used to reward users for their contribution to the platform. 
- **ImmutableX marketplace** is the first exchange venue for gas-free minting and trading of NFTs, developed by Immutable and powered by ImmutableX.

## ImmutableX APIs 
In Layer 1 blockchains there are no APIs, so any elements that require tracking are tracked individually, then recorded and stored in your own records. The ImmutableX APIs wrap the logic of ImmutableX’s exchange engine so that developers do not need to interact directly with smart contracts via custom logic to build on the ImmutableX platform.

Every interaction, from minting to trading to transferring, is performed via simple API calls. The ImmutableX APIs contain both the read and write functionality required to build applications without building a backend, meaning ImmutableX abstracts the complexity of the blockchain to function as a backend. 

The read functionality also offers various filtering options. This includes filters that can present a list of all orders submitted by a specific user, or more complete filters like metadata filters. Using the API’s read function we can give developers a list of:

- mints
- trades
- withdrawals & deposits
- assets minted
- orders (e.g. display all the orders made).

**[View the API reference documentation](/reference)**

## ZK-Rollups
ImmutableX combines NFT-specific exchange and proof logic with the cutting edge rollup technology developed by StarkWare to create one of the most advanced tools for trading NFTs ever built. Rollups allow for world-class scalability and user experience while retaining the underlying security of Ethereum.

ZK-STARKs (Zero-Knowledge Scalable Transparent ARguments of Knowledge) are a type of cryptographic-proof technology that enable users to share validated data or perform computations with a third party, without the data or computation being revealed to the third party in a publicly verifiable way. This is also known as a zero-knowledge proof (ZKP). 

Prior to the creation of ZK-STARKs, ZK-SNARKs were used to create ZK proof systems. This required a trusted party, or parties, to initially set up the ZK proof system, which introduced a vulnerability: those “trusted parties” could compromise the privacy of the entire system. ZK-STARKs improve on this technology by removing the need for a trusted setup.

A ZK-Rollup requires an “operator”. The operator is responsible for linearising transactions, which means putting them into a consistent, global incremental order with no gaps. In this instance ImmutableX is the operator.

ImmutableX’s rollup technology allows for more than 9,000 NFT transfers, trades and mints per second, meeting and exceeding the scale required by mainstream NFT projects.

To learn more, check out [Vitalik's Incomplete Guide to Rollups](https://vitalik.ca/general/2021/01/05/rollup.html).

## Link UI
The Link is the conduit that we use to connect users to the ImmutableX protocol. This allows ImmutableX to support a thriving third-party marketplace ecosystem, without presenting a security risk.

Unlike other blockchains or sidechains, ImmutableX currently supports all desktop Ethereum wallets without forcing the user to switch networks. All new ImmutableX users are required to [register as a user](../guides/getting-started-guide.md#register-a-user-account), which means setting up a Layer 2 wallet via Link.

ImmutableX partners can embed the Link directly into their site’s transaction flow, making buying and selling NFTs more efficient and intuitive. The Link screens will show up in the site’s transaction flow, allowing their users to authorize purchases, listings, and transfers of ETH and NFTs, all without leaving the page.

**[Learn more about Link SDK](../guides/link-sdk/index.md)**

## ImmutableX SDK
The ImmutableX SDK, combined with the APIs, will allow partners to build NFT projects in hours rather than weeks. Currently, a TypeScript SDK implementation is available, designed to make it easy to integrate the protocol into websites.