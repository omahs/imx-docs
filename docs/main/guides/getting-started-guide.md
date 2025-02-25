---
id: "getting-started-guide"
title: "Getting started"
slug: "/getting-started-guide"
excerpt: "Register with ImmutableX and prepare for testing"
sidebar_position: 1
keywords: [imx-wallets]
---
These are the core components of the ImmutableX stack: 
- **API** - Our API contains both the read and write functionality required to build applications without building a backend.
- **ImmutableX SDK** - Our TypeScript SDK implementation makes it easy for you to integrate the protocol easily into websites. 
- **Link** - ImmutableX projects can embed the Link UI directly into their site’s transaction flow.
- **ZK-Rollups** - ImmutableX combines NFT-specific exchange and proof logic with the cutting edge rollup technology developed by [StarkWare](https://starkware.co/).

**[Learn more about ImmutableX architecture](../overview/architecture-overview.md)** 

## Prepare to test
No matter what your goal is for building on ImmutableX — for example: drop an NFT collection, launch a marketplace or ecosystem product, integrate with your crypto game — there are three things you’ll need to get started:

## Wallet
To hold tokens or trade on ImmutableX, you need an Ethereum wallet. Currently we support [MetaMask](https://metamask.io/), which is a crypto-wallet that’s accessible as a browser extension. It allows you to store and transact Ethereum, and access the services of decentralized applications, known as **dApps**.

MetaMask also makes it really easy to access testnet blockchains like Goerli, which is what we use, and provides you with a wallet address, which you’ll need to [register an account with us](#register-a-user-account). 

To create a MetaMask wallet:
1. Open [metamask.io](https://metamask.io/) to install the browser extension.
2. Follow the steps in the plugin to create a new wallet, then record and store your seed phrase in a safe location.
3. Change the network selection from Main Ethereum Network to **Goerli Test Network**.

Again, be mindful of how you store your seed phrase. If you lose this, you will lose access to your wallet forever, and neither we nor MetaMask are able to restore it for you.
:::tip Already have a wallet?
If you already have an Ethereum wallet, you can [import it into MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account).
:::
## Test ETH
In order to make transactions while testing on Goerli, you’ll need to fund your wallet with some ETH. Here are some faucets where you can get some:
- https://goerlifaucet.com/
- https://goerli-faucet.pk910.de/
- https://goerli-faucet.mudit.blog/

Sometimes all faucets are dried up at once. There are others. [Join the conversation](https://discord.gg/TkVumkJ9D6) in Discord for help or advice on stuff like this. 

## Register a user account
To begin testing, you need to register as a user with ImmutableX. Registration sets up an account using the [private key from your MetaMask wallet](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).

To register, visit the [testnet version of our marketplace](https://market.sandbox.immutable.com/), then click **Connect Wallet** and follow the prompts. You'll need to repeat these steps again when registering on mainnet, by visiting: https://market.immutable.com/ 

Registration enables you to use our authentication system, which protects your project's administrative-level assets from being accessed or updated by someone else. [Learn more about user security](../guides/user-registration.md#user-security).