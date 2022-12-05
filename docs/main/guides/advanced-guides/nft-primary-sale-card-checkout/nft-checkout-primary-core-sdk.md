---
id: "core-nft-checkout-primary"
title: "Implement NFT primary sale card checkout with core-sdk"
slug: "/core-nft-checkout-primary"
sidebar_position: 2
keywords: [imx-payments]
---
import ListAdmonition from '@site/src/components/ListAdmonition';

:::info Feature for managed partners only
This is a feature intended for managed partners and requires this service to be enabled for your account. As such you will need to be registered to be able to use this method.
Please refer the document [here](/docs/nft-checkout-primary-setup/) to set up and register with ImmutableX.
For more information reach out to your Partner Success Manager, or the [#dev-discussion channel in discord](https://discord.gg/7URHuYFCN4).
:::

This primary sales flow is available in Core SDK v1.0.0+ and is a collaboration between Immutable X and Moonpay. 

<ListAdmonition title="Pre-requisites" icon="🤚" type="tip">
    <ul>
        <li>Must be a managed partner and your partner success manager has set up a commercial partnership with Moonpay for you</li>
        <li>Have a deployed L1 smart contract from which tokens can be minted</li>
        <li><a href="https://docs.x.immutable.com/docs/launch-collection">Launched a collection on ImmutableX</a></li>
        <li><a href="/docs/nft-checkout-primary-setup/">Created endpoints for "getting asset info" and "triggering mint"</a></li>
    </ul>
</ListAdmonition>

## Step 1.
After registration with ImmutableX, to initialize the NFT Checkout process you need to call the createNftPrimary function:

```typescript
const nftPrimaryTxnParams: NftCheckoutPrimaryApiCreateNftPrimaryRequest = {
    createAPIRequest:{
        contract_address:'0x5d...',
        provider:'moonpay',
        offer_id:'20111212',
        user_wallet_address:'0xqw2...',
        widget:{theme:'dark'}
    }};
const nftPrimaryTxnResponse = await imxClient.createNftPrimary(nftPrimaryTxnParams)
```

Where
- `user_wallet_address` - Is the address of seller, funds will be sent to this wallet address
- `contract_address` - Is the collection address of the NFT
- `offer_id` - An identifier that represents what will be minted.
- `widget.theme` - Moonpay widget theme

Refer API request/response structure [here](https://docs.x.immutable.com/reference/#/operations/createNftPrimary)

In the cases where purchasers know what they're purchasing (such as a specific pfp) `offerId` could be the tokenId (i.e. `20111212`) and in other cases where they don't know what they're purchasing (such as a loot box) it could be something like `silver-chest`. This is simply a way to render an item in the cart, and doesnt need to tie to the actual NFT asset directly.

:::info Handling the offerID
Note that primary sales involve taking a payment before the mint occurs. Because the asset does not exist yet, we've included an `offerId` instead of an `assetID`. Therefore, in order to successfully render the checkout with the information seen below (Offer, title, and image) - you will need to be a managed partner with IMX.
:::

After creating a transaction successfully, you will be provided with a Moonpay widget url to be rendered for checkout where the user can proceed with payment.

This displays the UI with the loaded Moonpay widget:

![Moonpay checkout widget](/img/core-sdk-nft-checkout-primary/moonpay-widget-for-checkout.png 'NFT primary sale card checkout')

## Step 2.
You can check the transaction status using the transaction id from previous step.
The status value should be `created` to confirm successful transaction creation.

```typescript
const getNftPrimaryTransactionResponse = await imxClient.getNftPrimaryTransaction({
 transactionId: nftPrimaryTxnResponse.data.transaction_id
});
```
Refer API request/response structure [here](https://docs.x.immutable.com/reference/#/operations/getNftPrimaryTransaction)

## Step 3.
The user proceeds with payment on Moonpay widget.
After the payment has been received by Moonpay, the mint process will be triggered.

![Mint by fiat](/img/core-sdk-nft-checkout-primary/processing-stage.png 'Minting in process')

## Step 4.
Verify the transaction status again

```typescript
const getNftPrimaryTransactionResponse = await imxClient.getNftPrimaryTransaction({
 transactionId: nftPrimaryTxnResponse.data.transaction_id
});
```

:::note Checking transaction status
Please consider checking the transaction status in a polling fashion in the background.
The minting process can take few minutes and during that time transaction can return `pending` or `waitingPayment` status while it's still being processed.
Upon successful completion, the transaction status will be updated to `completed`.
Upon failure, the transaction status will be updated to `failed`.
:::

![Mint complete](/img/core-sdk-nft-checkout-primary/transaction-complete.png 'Mint complete')

Now that the transaction status is `completed`, your user has successfully received their NFT and you can show a message, send a notification or update any state with the successful transaction.

