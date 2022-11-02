---
id: "link-nft-checkout-primary"
title: "Link.nftCheckoutPrimary"
slug: "/link-nft-checkout-primary"
sidebar_position: 12
keywords: [imx-payments]
---

The NFT Checkout Primary by fiat functionality is available in SDK v1.XX.XX(Add when experimental will be deleted)+ and is a collaboration between Immutable X and Moonpay.

The NFT Checkout Primary process allows users to mint NFT on the Immutable X platform using a credit card. There's no gas price for minting, only a [Moonpay transaction fee](https://support.moonpay.com/hc/en-gb/articles/360011930117-What-fees-do-you-charge-).

The mint happens directly on L2.

:::info Registration a contract Address
A contract address should be registered in IMX Exchange to be able to run minting process. For more information read [How to register for NFT Checkout Primary program](./minting-with-nft-checkout-primary)
:::

:::danger Exchange requires authenticated user
`Link.nftCheckoutPrimary` should only be called when user is authenticated and logged in, otherwise it will require user to reconnect
:::

To initialize the NFT Checkout Primary process dApp needs to call the mintByFiat function:

```typescript
await link.nftCheckoutPrimary({
    sellerWalletAddress: "0x001",
    contractAddress: "0x002",
    offerId: "new_offer"
})
```

Where
- `sellerWalletAddress` - address of seller, crypto will be sent to this wallet address
- `contractAddress` - contract address that will be used to mint NFT
- `offerId` - ID that represent offer that will be minted from partner, it can be tokenId, name of card, lottery and so on

This displays the Link UI with loaded Moonpay widget:

![Mint By Fiat](/img/link-sdk-nft-checkout-primary/nft-checkout-primary.png 'NFT Checkout primary')

## Errors

See error responses [here](./link-errors.md#nft-checkout-primary).