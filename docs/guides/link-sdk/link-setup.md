---
title: 'Link.setup'
slug: '/link-setup'
sidebar_position: 1
---

A user's web3 wallet (e.g. Metamask) is used to create, connect, and sign transactions on Immutable X. However, before a user can do this, they need to have registered on Immutable and be signed into their account. Both these steps can be done with a single call to `Link.setup`. If a user has already registered, this function can also be called to sign them in.

Check out our [Link reference tool](https://tools.immutable.com/link-reference/) to understand how `Link.setup` works without having to write any code.

## Parameters

```typescript
// Use the default Link.setup params (providerPreference is "metamask")
{}

// Specify the provider preference
{ 
    providerPreference: "metamask" | "none" | "magic_link" | "wallet_connect"
}
```

## Usage

```typescript
// Sample link.setup call using the default provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({})

// Specifying a provider:
const setupResponsePayload: SetupResultsCodec = await link.setup({ providerPreference: "magic_link" })
```

`Link.setup` returns the user's signed-in address and Stark public key if the setup or sign in was completed successfully.

```typescript
const SetupResultsCodec = t.intersection([
  t.type({
    address: EthAddress,
    starkPublicKey: HexadecimalString,
    ethNetwork: t.string,
    providerPreference: t.string,
  }),
  t.partial({
    email: t.string,
  }),
]);

// Sample response block
// ie. await link.setup({})
result = {
    "address": "0x...",
    "starkPublicKey": "0x...",
    "providerPreference": null,
    "ethNetwork": "ropsten"
}

// `email` field is returned in the response if the magic_link provider is requested
// ie. await link.setup({ providerPreference: "magic_link" })
{
    "address": "0x...",
    "starkPublicKey": "0x...",
    "providerPreference": "magic_link",
    "ethNetwork": "ropsten",
    "email": "name@domain.com"
}
```

# UI based on different providers

### default/metamask
![default/metamask](../../../static/img/link-setup/default-metamask.png 'default/metamask')

### none
![none](../../../static/img/link-setup/none.png 'none')

### magic_link
![magic_link](../../../static/img/link-setup/magic_link.png 'magic_link')

### wallet_connect
![wallet_connect](../../../static/img/link-setup/wallet_connect.png 'wallet_connect')


For more information about user wallet registration, see [User Registration](../user-registration.md) and [Account Management](../integrate-your-application/account-management.md).