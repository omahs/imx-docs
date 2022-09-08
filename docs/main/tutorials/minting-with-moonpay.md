---
id: "minting-with-moonpay"
title: "Minting with Moonpay"
slug: "/minting-with-moonpay"
sidebar_position: 1
keywords: [imx-payments]
---

This tutorial provides a guide what a partner should implement to register for mint by fiat feature.

If you get stuck at any point, reach out on the dev-faq and dev-discussion channels in our [Discord](https://discord.gg/TkVumkJ9D6). Click [here](https://docs.google.com/forms/d/e/1FAIpQLSdTLIXldLRZQB4i2YTHtQwxmrDbTkHphuxtLoVe7j-YVU7VYw/viewform) to provide feedback on the tutorial or let us know what topics you'd like to see in our documentation.

# Main flow

![Mint By Fiat Main flow](/img/tutorial/mintbyfiat-main-flow.png 'Mint by fiat main flow')

# Technical flow

![Mint By Fiat Technical flow](/img/tutorial/mintbyfiat-technical-flow.png 'Mint by fiat technical flow')

# Requirements

:::info Moonpay contract
A partner should contact Moonpay and sign a contract with them before registering to this feature on mainnet
:::

A partner should implement two endpoints for mint by fiat feature.

## Endpoint 1: Get asset info

This endpoint will be used to get information about offer:

- `offer_id` - Offer ID
- `contract_address` - Contract address that will be used for minting
- `name` - Offer name or Token name
- `collection` - Collection name
- `image_url` - Image URL
- `price` - Price of this offer
- `price_currency_code` - Currency code of this offer, for instance, "ETH", "USDC".
- `seller_address` - Address on which Moonpay will transfer crypto

```
Request: GET /:contract_address/:offer_id

Response: {
 "offer_id": "string",
 "contract_address": "string",
 "name": "string",
 "collection": "string",
 "image_url": "string",
 "price": "double",
 "price_currency_code": "string",
 "seller_address": "string",
}
```

## Endpoint 2: Trigger mint

This endpoint will be used to trigger mint:

- `IMX-Signature` - IMX Signature that should be validated
- `IMX-Timestamp` - Timestamp to validate signature
- `offer_id` - Offer ID
- `contract_address` - Contract address that will be used for minting
- `user` - User address that should get NFT
- `wallet_address` - Seller wallet address on which Moonpay will transfer crypto 
- `external_transaction_id` - Unique IMX transaction ID that can be used to get transaction info
- `token_id` - Minted token ID
- `tx_id` - Transaction ID that returns as a response of [IMX minting token](/reference#/operations/mintTokens)

```
Request: POST /mint
headers: {
  "IMX-Signature": "5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd",
  "IMX-Timestamp": "1492774577"
}

data: {
  "offer_id": "string",
  "contract_address": "string",
  "user": "string",
  "wallet_address": "string",
  "external_transaction_id": "string(UUID)",
}

Response: {
  "contract_address": "string",
  "token_id": "string",
  "tx_id": 0
}
```

IMX will send Signature and Timestamp that should be used to validate that a request was made by IMX to do it:

### Step 1: Prepare the signed_payload string
A partner need to concatenate

- IMX-Timestamp header
- The character .
- The actual JSON payload

### Step 2: Compare signature
Then a partner will need to compute a HMAC with the SHA-256 hash function using a key that we provided in a result of registration API for signed_payload and compare the signature in header and generated one.

## Register endpoints on IMX platform
When these endpoints are done, a partner should reach out on the dev-faq and dev-discussion channels in our [Discord](https://discord.gg/TkVumkJ9D6)
with the contract_address that will be used for minting and these two implementing URLs for get offer info and triggering mint.
After registration IMX will send a webhook key that will be used to validate signature on triggering mint request.
