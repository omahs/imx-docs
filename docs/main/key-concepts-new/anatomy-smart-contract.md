---
id: "anatomy-smart-contract"
title: "Anatomy of a smart contract"
slug: "/key-concepts-new/anatomy-smart-contract"
excerpt: "Anatomy of a smart contract"
sidebar_position: 1
---

# Anatomy of a smart contract

In this article, we will cover:
* What is a smart contract?
* Deep dive into the main smart contract types:
    * Fungible
    * Non-fungible
* Use cases of fungible and non-fungible tokens

## What is a smart contract?

A smart contract is a class of code that is deployed to and runs on the blockchain. They can be made up of any arrangement of code and perform a wide range of functionality.

Examples of some common smart contracts:
* **Orderbook contract:** Enables asset owners to post information about assets that they want to sell (ie. asset ID, selling price, sale period). Typically used by marketplace applications to enable users to list assets for sale.
* **Settlement contracts:** Facilitates the sale of assets from one user (seller) to another (buyer) by handling the filling of an order, payment and transfer of assets. Typically used by marketplaces in conjunction with an orderbook contract.
* **Token contracts:** Facilitates the creation ([minting](/docs/key-concepts-new/minting)) of tokens that can be used and transferred between users in the open market.

The main type of smart contract that we are mostly concerned about as developers of blockchain games and NFT applications are [token smart contracts](#token-smart-contracts).

## Token smart contracts

These are smart contracts that govern the issuance (creation) of tokens. These contracts are typically defined by standards, which specify the functions that it needs to have to ensure that there is a standard way that games, applications and other contracts can interact with it.

The two main kinds of token smart contracts that we are concerned with when building games or NFT applications on Immutable X are:
* **Non-fungible (defined by the [ERC-721 standard](https://eips.ethereum.org/EIPS/eip-721))** - these produce tokens with unique properties from other tokens in their collection. For example, [Bored Ape](https://boredapeyachtclub.com/#/gallery) #1 isn't interchangeable for Bored Ape #2 because they differ across a range of characteristics (ie. image, rarity) that different users will value differently.
* **Fungible (defined by the [ERC-20 standard](https://eips.ethereum.org/EIPS/eip-20))** - these produce commodity-like tokens that are interchangeable with another token in its category, ie. ETH, IMX. If you lend someone ETH, it doesn't matter whether they send you back the exact same tokens that you lent them. All ETH tokens are identical and their value is the same.

There are also semi-fungible contracts (defined by the [ERC-1155 standard](https://eips.ethereum.org/EIPS/eip-1155)), which can be very useful for blockchain games, however, they are not fully supported by Immutable X yet.

As you might expected, non-fungible token contracts produce non-fungible tokens (NFTs), fungible contracts produce fungible tokens and... well, you get the drift 😉

### Key components of fungible and non-fungible token contracts:
<table>
  <thead>
    <tr>
      <th></th>
      <th>Fungible</th>
      <th>Non-fungible</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Information stored about tokens</td>
      <td>
        <em>How many tokens in total can this contract create?</em>
        <br/><br/>
        <strong>Contract function:</strong>
        <br/><code>totalSupply()</code> returns this value
      </td>
      <td>
        <em>How many tokens in total can this contract create?</em>
        <br/><br/><strong>Contract function:</strong><br/><code>totalSupply()</code> returns total tokens in the contract
        <hr/>
        <em>Metadata containing each token's characteristics</em>
        <br/><br/><strong>Contract function:</strong><br/><code>tokenURI()</code> returns the URL with the metadata JSON containing the details of each token
      </td>
    </tr>
    <tr>
      <td>Information stored about token ownership</td>
      <td>
        <em>How many tokens does a given user own?</em>
        <br/><br/><strong>Contract function:</strong>
        <ul>
            <li>Mapping of <code>address -> token amount</code></li>
            <li>Retrieved by calling <code>balanceOf(<em>address</em>)</code> which returns the number of tokens owned by this user</li>
        </ul>
      </td>
      <td>
        <em>Who owns the token at a given token ID?</em>
        <br/><br/><strong>Contract function:</strong>
        <ul>
            <li>Mapping of <code>token ID -> address</code></li>
            <li>Retrieved by calling <code>ownerOf(<em>tokenID</em>)</code> that returns the address of the user who owns this token</li>
        </ul>
      </td> 
    </tr>
    <tr>
      <td>What happens when the <code>mint()</code> function is called?</td>
      <td>
        <ul>
          <li>Function call <code>mint(<em>address</em>, <em>tokenAmount</em>)</code> is executed, which specifies the amount of tokens to mint for a particular user</li>
          <li>When new tokens are minted, the <code>totalSupply</code> is decremented by the amount.</li>
          <li>If the mint function is called with an amount of tokens to mint that exceeds the remaining total supply, then it will fail.</li>
          <li>When minting is successful, the mapping <code>address -> token amount</code> is updated.</li>
        </ul>
      </td>
      <td>
        <ul>
            <li>Function call <code>mint(<em>tokenID</em>, <em>address</em>)</code> is executed, which specifies the token ID to mint for a particular user.</li>
            <li>It will then attempt to update mapping <code>token ID -> address</code>.</li>
            <li>If the token ID already exists in the mapping (which means that a token has already been minted), then minting will fail.</li>
            <li>If not, then a new token ID is created and the mapping updated with the address of the token ID owner.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Other useful functions
* <code>transfer(<em>tokenAmount</em>, <em>address</em>)</code> - which transfers a specified amount of tokens from the caller's account to another user's
* <code>approve(<em>address</em>, <em>tokenAmount</em>)</code> (fungible) / <code>approve(<em>address</em>, <em>tokenID</em>)</code> (non-fungible) - the caller may approve another user to spend or transfer tokens on their behalf

#### For the full list of standard functions, see:
* [Fungible (ERC-20) token standard](https://eips.ethereum.org/EIPS/eip-20)
* [Non-fungible (ERC-721) token standard](https://eips.ethereum.org/EIPS/eip-721)

## Fungible tokens
### Use cases
* **Staking:** This process allows individuals to lock specified amounts of their tokens to earn a yield. This is not available to all cryptocurrencies, and those who offer this operate under a Proof of Stake (PoS) consensus mechanism that requires specified amounts of a token to validate transactions.
* **Voting:** Holders of tokens are often offered voting rights by DAOs, also known as Decentralized Autonomous Organizations, who control ownership of certain token contracts. There are a variety of voting mechanisms, each outlining different requirements, however, it can generally be understood that the weight of a vote is proportional to the number of tokens owned.
* **User acquisition:** Many projects reward their community with their native tokens. This practice is common within many web3 organizations, whereby constructive actions within an ecosystem may grant community members ecosystem rewards such as its native token.
* **Game rewards:** Many web3 games are governed by a proprietary native token which they leverage to reward their users. These token rewards can then be spent to purchase items and cosmetics that help to drive the in-game economy.

Consider the IMX token: It has the potential to be [staked](https://www.immutable.com/imx-token), used for [governance](https://www.immutable.com/imx-token), [trading rewards](https://www.immutable.com/trading-rewards), [developer incentivization](https://www.immutable.com/fund), and in-game rewards as seen in its native projects such as [Gods Unchained](https://godsunchained.com/) and [Guild of Guardians](https://www.guildofguardians.com/).

### Minting on Immutable X
Currently, L2 minting of fungible tokens are not supported by Immutable X. To transact with these tokens on L2, they must be minted first on L1 then [deposited](/docs/guides-new/deposits-withdrawals) to L2 to be used.

## Non-fungible tokens
### Use cases
// Insert use cases

### Minting on Immutable X
You can mint NFTs on Immutable X.

More information:
* For a conceptual overview, see [Deep dive into minting](/docs/key-concepts-new/minting)
* [Guide on how to use our API/SDKs to mint](/docs/guides-new/mint-tokens)
* [Guide to how to use the command line to mint tokens from your own collection](https://github.com/immutable/imx-examples/blob/main/docs/minting-assets.md)