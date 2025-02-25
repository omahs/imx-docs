---
id: "user-registration"
title: "User registration"
slug: "/user-registration"
excerpt: "Prior to trading on Immutable X, all users need to be registered"
sidebar_position: 8
keywords: [imx-wallets]
---
All new Immutable X users are required to set up a Layer 2 wallet via [Link](../guides/link-sdk/index.md), which will register and associate the Layer 1 wallet address with a newly generated STARK key.

Immutable X delegates all the security and recovery functionality to the users underlying Ethereum wallet. This all takes place inside the Link, meaning the Link signs transfers, trades, cancellations, and any/all of the authenticated assets that need to be signed.

## Registration process
When you [register a user account](../guides/getting-started-guide.md#register-a-user-account), our client (SDK) performs a deterministic computation following [EIP-2645] (https://github.com/ethereum/EIPs/pull/2645). Our implementation uses your linked Ethereum key to sign a static security string embedded in the SDK. 

This signature is used as a cryptographic seed with generic path parameters defined by the proposal's derivation path for hierarchical keys: 
`m / purpose' / layer' / application' / eth_address_1' / eth_address_2' / index`

This binds the generation of your unique Layer 2 (L2) Immutable X key against your Layer 1 (L1) Ethereum key, which means your L2 security will always be at least as secure as your L1 key. 

Here's a high-level overview of the user registration process:

![User Registration](/img/user-registration.png 'User Registration')

The generated private key is then passed through an efficient grinding method to enforce distribution within Stark's elliptic curve domain. The generated key pair is what you'll be using on a day-to-day basis to interact with any Immutable X functionality.

:::warning Do not sign on any other platform
Signing the security string will expose the seed phrase for your Immutable X key so you must ensure that you **do not** sign the string on any other platform
:::

[/block]
Once your Immutable X key is generated, you can use the SDK to make a single REST POST call to: `/v1/users`
Our [registers a user](/reference#/operations/registerUser) endpoint registers you as a user with the following body as an example:
```json
{
  "ether_key": "0x...",
  "stark_key": "0x...", // your Immutable X key
  "nonce": "...",
  "stark_signature": "0x..." // your Immutable X signature
}
```
That's it, we'll handle everything else for you.

# User security
If you're integrating your application with Immutable X, you must use the [Link SDK](../guides/link-sdk/index.md) for registering new users. The same applies when [registering a user account for yourself](../guides/getting-started-guide.md#register-a-user-account).

This ensures that the L2 key that is generated for the user’s wallet is created correctly, and will work across the ecosystem. Failing to create the key correctly may result in a key that cannot be used to deposit or withdraw tokens.

Link SDK must also be used when requesting a user’s signature for an action. Not generating the key with Link may result in security issues for your users.