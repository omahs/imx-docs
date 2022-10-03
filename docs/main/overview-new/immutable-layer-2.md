---
id: "layer-2-solutions"
title: "What are its layer 2 solutions?"
slug: "/overview-new/immutable-layer-2"
excerpt: "Immutable's layer 2 solutions"
sidebar_position: 2
---

# Immutable X's layer 2 solutions

## What is layer 2?
"Layer 2" is a term used to describe mechanisms that process batches of transactions independently of layer 1 and only periodically reports them to the main chain. This decreases the total number of transactions that have to be validated on layer 1. Layer 2s are also known as "settlement layers" or "rollups".

Immutable X offer [two settlement layers](#layer-2s-on-immutable-x), both of which use the [ZK rollup](#how-do-zk-rollups-work) batching mechanism.

### How do ZK rollups work?
ZK rollups consist of two main components:
1. **Off-chain batching mechanism (virtual machine)** - generates a cryptographic proof from a batch of transactions in a highly compressed form together with the previous state root and the new state root.
2. **On-chain contract:**
    * Stores the current state root of the rollup.
    * Verifies that the previous state root in the batch matches the current state root. If so, it switches the state root to the new state root.

#### Steps:
1. A collection of layer 2 transactions are sent to the batching mechanism which generates a cryptographic proof from the transactions, previous state root and the new state root.
2. This proof is sent to the layer 1 smart contract to verify.
3. The layer 1 smart contract checks that the proof's previous state root is the same as its current state root.
4. If it does, then it updates its current state root to the new state root of the batch.

#### For more information:
* [***An Incomplete Guide to Rollups***](https://vitalik.ca/general/2021/01/05/rollup.html) - by Vitalik Buterin
* [***Layer 2***](https://ethereum.org/en/layer-2/) and [***ZK rollups***](https://ethereum.org/en/developers/docs/scaling/zk-rollups/) explanations - by the Ethereum Foundation

## Layer 2s on Immutable X
Immutable X currently provides two layer 2 solutions:

| | How does it work? | Who can use it? | How does Immutable provide<br/>access to it? | 
| --- | --- | --- | --- |
| [StarkEx](https://starkware.co/starkex/) | Provides a service that batches certain types of transactions. The StarkEx service is created and maintained by the company, Starkware. Only transactions that are built for this service can be processed. | Applications (like Immutable X) must sign up to use this service. | Immutable X allows other applications to submit, via API endpoints, accepted types of transactions to be processed. |
| [StarkNet](https://starknet.io/what-is-starknet/) | Smart contract platform where any developer can write and deploy smart contracts permissionlessly. | Anyone. | Immutable X deploy smart contracts on StarkNet that enable certain functionality (ie. orderbook contracts, trade settlement contracts) that other applications can permissionlessly send transactions to. |

### What about transactions between rollups?
Each settlement layer is its own independent environment that only maintains the state of the transactions that occur within them. 

As such, the following examples illustrate the issues that can arise when users on different rollups try to interact with each other:

| Attempted transaction | How to facilitate? |
| --- | --- |
| Alice lists an item for sale on StarkEx<br/><br/>Bob does not have ETH on StarkEx, only on StarkNet<br/><br/>Bob wants to buy Alice's asset | Bob needs to obtain ETH on StarkEx, or withdraw his StarkNet ETH to layer 1 and then deposit it on StarkEx, in order to purchase Alice's asset |
| Alice has an NFT that she minted on StarkNet<br/><br/>She wants to gift this NFT to Bob<br/><br/>Bob does not have a user account on StarkNet, only StarkEx | Alice needs to withdraw the NFT to layer 1, deposit it into her corresponding StarkEx account and then transfer it from that account to Bob<br/><br/>_or_<br/><br/>Bob needs to create a StarkNet account which Alice can transfer the NFT to |

### But.. Cross-rollup functionality is coming!
While Immutable wants to provide users with many different settlement layer options, it does not want to maintain an ecosystem of isolated rollups. From our blog post on [Cross-Rollup NFT Liquidity](https://immutablex.medium.com/immutable-starknet-cross-rollup-nft-liquidity-b32df88cda02):
> Immutable will ensure that there is robust interoperability between the rollups our platform supports, through the construction of seamless and trustless asset bridges and the abstraction of these assets in our APIs. As these rollups share a settlement layer (L1 Ethereum), bridging is possible without compromising asset security.

### What settlement layer should I build on?
See [here](/docs/overview-new/what-can-you-build#what-functionality-does-immutable-x-provide) for the features of each settlement layer and the functionality that Immutable provides for each.