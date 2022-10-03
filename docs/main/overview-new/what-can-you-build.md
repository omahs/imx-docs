---
title: "What can you build on it?"
slug: "/overview-new/what-can-you-build"
sidebar_position: 3
---

Immutable X allows you to create applications on layer 2 by interacting with its APIs and developer tools. It provides the key functionality you'll need to build web3 games or NFT applications without having to deploy your own smart contracts (for the most part), or build your own ZK rollup batching mechanisms.

### On this page:
* [What functionality do web3 games and applications need?](#what-functionality-do-web3-games-and-applications-need)
* [What functionality does Immutable X provide?](#what-functionality-does-immutable-x-provide)

## What functionality do web3 games and applications need?

There are two main types of functionality that web3 games and applications will need:
1. [Facilitate user transactions](#1-facilitate-user-transactions)
2. [Retrieve data about current state and historical transactions](#2-retrieve-data-about-current-state-and-historical-transactions)

### 1. Facilitate user transactions
These enable users to _do things_ on the blockchain. These transactions include:
* Buying and selling assets
* Minting NFTs
* Transferring assets to other users
* Depositing assets from L1 to L2, or withdrawing assets from L2 to L1

These transactions require user signatures to authorize because they update state on the blockchain (as opposed to simply reading data).

#### Examples and use cases:
<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>Description</th>
      <th>Use cases</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Minting assets</td>
      <td>Minting assets simply means to call a function in a token smart contract that brings into existence new tokens.
      <br/><br/>
      Users can mint an asset either for themselves, or another user.</td>
      <td>
        <ul>
          <li>Creators can launch a collection of NFTs on a website that users can mint from</li>
          <li>Games can release a new category of in-game items and allow players to mint them</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Creating orders</td>
      <td>An order is a sale listing. It can be created by users who want to sell an asset that they own. They can specify things like price, sale period, etc.</td>
      <td>
        <ul>
          <li>A marketplace wanting to allow users to put their assets up for sale so that other users can buy them.</li>
          <li>Games can create their own in-game marketplace, allowing players to sell in-game items that they own.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Creating trades</td>
      <td>A trade is simply filling an order. A user executes a trade by agreeing to purchase an asset at the terms specified in the order and then becomes the new owner of the asset.</td>
      <td>
        <ul>
          <li>An NFT marketplace can display assets for sale and enable users to buy them.</li>
          <li>An exchange can allow users to trade their fungible (ERC-20) tokens.</li>
          <li>Games can allow players to buy assets from other players in their own in-game marketplace.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Transfers</td>
      <td>A user can transfer the ownership of an asset that they own to another user.</td>
      <td>
        <ul>
          <li>Games may allow players to give assets to each other.</li>
          <li>Games might mint a collection of in-game items and transfer them to players based on the fulfilment of certain achivements.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>L1 to L2 asset tranfers (deposits and withdrawals)</td>
      <td>
        Deposits are when users transfer assets that they own on layer 1 to layer 2. <br/><br/>
        Withdrawals are when users transfer assets that they own from layer 2 to layer 1. 
      </td>
      <td>
        <ul>
          <li>An NFT marketplace can implement a 'bridging mechanism' which allows users to transfer ETH that they own from L1 to L2 so that they can purchase assets on L2</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 2. Retrieve data about current state and historical transactions
Applications often need to provide information about the current state (ie. who owns which assets) and historical transactions (ie. past owners of an asset, previous sales of an asset) on a blockchain. This information can be used for analysis purposes, or to provide users with the information they need in order to execute a transaction (ie. an NFT marketplace application providing information on current sale orders enables users to be able to create a trade that fills the order - purchases the asset).

#### Examples and use cases:
<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>Description</th>
      <th>Examples of use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Asset data</td>
      <td>Details about fungible or non-fungible tokens, like metadata, image URL, current owner, etc.</td>
      <td>
        <ul>
          <li>NFT marketplaces display the details of an asset that is listed for sale so that buyers know what they are purchasing</li>
          <li>Game mechanics utilize the attributes of an in-game asset in order to know what action to execute</li>
        </ul>
      </td>
    </tr>
     <tr>
      <td>Order data</td>
      <td>Details about orders, like sale price, sale period, etc.</td>
      <td>
        <ul>
          <li>NFT marketplaces will list orders in order to show buyers what is for sale and provide them with the opportunity to purchase</li>
        </ul>
      </td>
    </tr>
     <tr>
      <td>User data</td>
      <td>Details about users, like the types of tokens they own and the balance of each token.</td>
      <td>
        <ul>
          <li>Wallet applications can display to their users their token balances</li>
          <li>Marketplaces can let users know that an attempt to purchase an asset will fail because the user has insufficient tokens to fulfil the order</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What functionality does Immutable X provide?
The table below outlines key functionality provided by the Immutable X platform (see [API reference](https://docs.x.immutable.com/reference) for full list) for the different settlement layers offered:
<table>
    <tbody>
        <tr>
          <th colspan="1" rowspan="3">Functionality</th>
          <th colspan="3">Settlement layer</th>
        </tr>
        <tr>
          <th colspan="1">StarkEx</th>
          <th colspan="2">StarkNet</th>
        </tr>
        <tr>
          <th><font size="2">via API/SDKs</font></th>
          <th><font size="2">Integrate directly<br/>with contracts</font></th>
          <th><font size="2">via API/SDKs</font></th>
        </tr>
        <tr>
          <td><a href="/docs/guides-new/generate-signers">Generate signers for<br/>user signatures</a></td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
          <td>🚧 Coming soon</td>
        </tr>
        <tr>
          <td><a href="">Mint assets</a></td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
          <td>🚧 Coming soon</td>
        </tr>
        <tr>
          <td><a href="/docs/guides-new/orders">Create orders</a></td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
          <td>🚧 Coming soon</td>
        </tr>
        <tr>
          <td><a href="/docs/guides-new/trades">Create trades</a></td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
          <td>🚧 Coming soon</td>
        </tr>
        <tr>
          <td><a href="/docs/guides-new/transfers">Transfer assets</a></td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
          <td>🚧 Coming soon</td>
        </tr>
        <tr>
          <td><a href="/docs/guides-new/deposits-withdrawals">Deposit assets to L2 and<br/>withdraw assets to L1</a></td>
          <td>✅</td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
        </tr>
        <tr>
          <td><a href="/docs/guides-new/get-data">Get data on assets,<br/>orders, trades, etc.</a></td>
          <td>✅</td>
          <td>🚧 Coming soon</td>
          <td>🚧 Coming soon</td>
        </tr>
    </tbody>
</table>

### What happens if the functionality I need isn't provided by Immutable's API?
If your application requires functionality that isn't provided via Immutable's API endpoints, you can implement custom functionality by deploying your own smart contracts on the StarkNet settlement layer ([see StarkNet guide](https://github.com/immutable/imx-starknet/blob/main/immutablex/starknet/README.md)).

### Immutable provides the functionality that I require. How do I get started?
Immutable provide SDKs which are a wrapper around the API functions and make it easy for developers to integrate Immutable X with their application's particular language or framework.

For more information on the SDKs that we have and how they work together, please see [here](/docs/sdks/).

#### Get started with building:
* [Launch a collection](/docs/launch-collection-new/overview)
* [Guides](/docs/guides-new/get-started)

