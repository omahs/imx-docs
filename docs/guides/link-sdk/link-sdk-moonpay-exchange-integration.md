---
title: 'Link SDK Moonpay integration'
slug: '/link-sdk-moonpay-exchange-integration'
sidebar_position: 11
---

The exchange functionality is available in SDK v1.3.33+ and is a collaboration between Immutable X and Moonpay. `cryptoCurrencies` param is available in SDK v1.3.38+
:::caution Early access feature
As of January 2021 only onramping funds is supported. Offramp support will soon follow.\nOnramp functionality is available in **SDK v1.3.33+**

Onramp is in early access and will be updated and extended in the future.

API endpoints to get the exchange process status will be available in the future.
:::
The exchange process allows users to buy crypto from the Immutable X platform using a credit card. There's no gas price for purchases, only a Moonpay transaction fee.

The deposit happens directly on L2 via the transfer from Moonpay accounts.

The amount, fee and currency are selected within the Moonpay widget, and are under user's control. There's a minimal deposit amount of $20USD.

The current available cryptocurrencies are:

- USDC
- ETH

The list of supported `cryptoCurrencies` in the Link SDK:

- `ExchangeCurrency.USDC`
- `ExchangeCurrency.ETH`

:::danger Exchange requires authenticated user
`Link.fiatToCrypto({})` should only be called when user is authenticated and logged in, otherwise it will require user to reconnect
:::

To initialize the exchange process with an option to choose any available currency, marketplace needs to call the exchange function:

```typescript
await link.fiatToCrypto({})
```

This displays the Link UI with loaded Moonpay widget:

![Exchange without parameters](../../../static/img/link-sdk-moonpay/exchange-without-params.png 'Exchange without parameters')

To initialize the exchange process for a specific currency:

```typescript
await link.fiatToCrypto({ cryptoCurrencies: ['ETH'] })
```

This displays the Link UI with loaded Moonpay widget:

![Exchange with specific currency](../../../static/img/link-sdk-moonpay/exchange-with-currency-chosen.png 'Exchange with specific currency')

To initialize the exchange process when a user can choose only specific currencies:

```typescript
await link.fiatToCrypto({ cryptoCurrencies: ['ETH', 'USDC'] })
// or
await link.fiatToCrypto({ cryptoCurrencies: ['IMX', 'GODS'] })
```

:::success Testing the flow on Ropsten
To test the transactions in the Ropsten test environment, please use the following test cards:  
**CARD**: Visa  
**NUMBER**: 4000056655665556  
**DATE**: any date in the future  
**CVC**: 123  


**CARD**: Visa  
**NUMBER**: 4000020951595032  
**DATE**: 12/2022  
**CVC**: 123  
:::

## Error Messages

There are no more things that can be done by the user on Screen.

## fiatToCrypto

### 10000 - Something went wrong.

Contact support team.

### 10001 - Something went wrong.

Contact the provider (moonpay) to see why the transaction failed.

### 10002 - Connection Error.

Contact support team or try the transaction again.

### 10003 - Invalid currencies.

Contact support team.

### 10004 - Something went wrong.

Contact support team or try again the transaction.

## cryptoToFiat

### 11000 - Something went wrong

Contact support team.

### 11001 - Something went wrong.

Contact the provider (moonpay) to see why the transaction failed.

### 11002 - Connection Error.

Contact support team or try the transaction again.

### 11003 - Something went wrong.

Contact support team or try again the transaction.

### 11004 - Currencies not available.

Contact support team or try again the transaction with other currency.

### 11005 - Invalid currency amount.

Change the amount of currency.

### 11006 - Something went wrong.

Contact support team.
