---
title: "Fees"
slug: "/fees"
sidebar_position: 4
---

Fees are additional amounts that a user pays on top of a base price of an asset. These can be imposed by various entities. On ImmutableX, they are:

| Entity | Type of fee | Amount | Example |
| --- | --- | --- | --- |
| ImmutableX | Protocol | 2% of every transaction. | When Bob sends Alice 1 ETH for an NFT, 0.02 ETH is sent to ImmutableX. |
| Application enabling the creation of an order, ie. marketplace | Maker | Any.<br/><br/>When the [create order endpoint](/reference#/operations/createOrder) is called, the caller (usually the marketplace facilitating the creation of the order) can set a fee amount and recipient in the request payload. This amount is added on top of the order price and paid by the user purchasing the asset. | Alice lists an asset for 1 ETH on a marketplace that imposes a maker fee of 1%. Therefore, the price that the asset will be listed for on the marketplace is 1.01 ETH. |
| Application enabling filling of an order (trade), ie. marketplace | Taker | Any.<br/><br/>When the [create trade endpoint](/reference#/operations/createTrade) is called, the caller (usually the marketplace facilitating the creation of the trade) can set a fee amount and recipient in the request payload. This amount is added on top of the order price and paid by the user purchasing the asset. | Bob buys an asset from a marketplace that imposes a taker fee of 1%. If the base price of the asset is 1 ETH, the amount he will pay is 1.01 ETH.<br/><br/>If the marketplace that the asset's owner listed it for also imposed a maker fee of 2%, then Bob must pay for both the maker and the taker fees, so total Bob will pay is 1.03 ETH. |
| Collection royalty recipient, ie. owner of an NFT smart contract | Royalty | Any.<br/><br/>When minting an asset on ImmutableX, the contract owner can set a royalty rate and recipient either collection-wide (for all tokens in the collection), or per token. When the asset is sold on an ImmutableX marketplace, the royalty amount will be added to the price of the asset, to be paid by the purchaser.<br/><br/>See also: [Deep dive into royalties](./deep-dive-royalties). | Alice mints a collection of assets on ImmutableX and sets a 5% royalty for every asset in the collection to go to her.<br/><br/>Bob owns an asset from Alice's collection and sets the sale price of 1 ETH. The ImmutableX marketplace on which he lists the asset will display a selling price of 1.05 ETH, which contains the royalty amount.<br/><br/>When Ciaran comes along and buys this asset, he pays 1.05 ETH, 1 ETH of which goes to Bob, and 0.05 ETH goes to Alice. |

## When are fees paid out?
Fees are paid by the asset purchaser and sent to the recipient accounts as part of the transaction - so as soon as a transaction is confirmed.