---
id: "link-nft-checkout-primary"
title: "Link.nftCheckoutPrimary"
slug: "/link-nft-checkout-primary"
sidebar_position: 12
keywords: [imx-payments]
---

:::info Feature for managed partners only
This is a feature intended for managed partners and requires this service to be enabled for your account. As such you will need to be registered to be able to use this method.
Please refer the document [here](/docs/nft-checkout-primary-setup/) to set up and register with IMX.
For more information reach out to your Partner Success Manager, or the [#dev-discussion channel in discord](https://discord.gg/7URHuYFCN4).
:::

Working alongside Moonpay, we have integrated their [NFT Checkout product](https://www.moonpay.com/business/nfts) which allows users to purchase an asset directly via a fiat credit card transaction (with no intermediary purchase of ETH or an ERC20)

This primary sales flow is available in SDK v1.35.7+ and is a collaboration between Immutable X and Moonpay. It requires you to register your intent to use the service with us, and to have commercial agreement between you & moonpay.

Once you have been approved, to initialize the NFT Checkout process you need to call the nftCheckoutPrimary function:

```typescript
await link.nftCheckoutPrimary({
    sellerWalletAddress: "0x001", // the wallet address of the seller 
    contractAddress: "0x002", // the collection address
    offerId: "new_offer" // the identifier for the "offer"
})
```

Where
- `sellerWalletAddress` - Is the address of seller, funds will be sent to this wallet address
- `contractAddress` - Is the collection address of the NFT
- `offerId` - An identifier that represents what will be minted. 
  
In the cases where purchasers know what they're purchasing (such as a specific pfp) `offerId` could be the tokenId (i.e. `420`) and in other cases where they dont know what they're purchasing (such as a loot box) it could be something like `silver-chest`. This is simply a way to render an item in the cart, and doesnt need to tie to the actual NFT asset directly.

:::info Handling the offerID
Note that primary sales involve taking a payment before the mint occurs. Because the asset doesnt exist yet, we've included an `offerId` instead of an `assetID`. Therefore in order to successfully render the checkout with the information seen below (Offer title, and image) - you will need to be a managed partner with IMX.
:::

This displays the Link UI with loaded Moonpay widget:

![Mint By Fiat](/img/link-sdk-nft-checkout-primary/nft-checkout-primary.png 'NFT Checkout primary')

## Errors

See error responses [here](./link-errors.md#nft-checkout-primary).