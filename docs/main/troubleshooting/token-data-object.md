---
id: "token-data-object"
title: "Token data object"
slug: "/token-data-object"
sidebar_position: 4
keywords: [imx-games]
---

Currently, in our API reference, we have a `token.data` object required as a parameter for a bunch of endpoints. 

**Example:**
![Token data](/img/token-data.png 'Token data param')

However, it is not clear from the API reference what this object should look like. This page is to provide that clarification.

### Endpoints requiring `token.data`:
* [getSignableOrder](https://docs.x.immutable.com/reference#/operations/getSignableOrder) 
* [getSignableTransferV1](https://docs.x.immutable.com/reference#/operations/getSignableTransferV1)
* [getSignableTransfer](https://docs.x.immutable.com/reference/#/operations/getSignableTransfer) (Get bulk details of a signable transfer)
* [getSignableWithdrawal](https://docs.x.immutable.com/reference#/operations/getSignableWithdrawal)

### token

The `token` param is made up of two fields:
* **type**
* **data**

`type` can be one of: **ETH**, **ERC20**, or **ERC721**

`data` depends on the `type` that is used. Fields are:
* **decimals** (required for ETH, ERC20)
* **token_address** (required for ERC20, ERC721)
* **token_id** (required for ERC721)

If any of the required fields are missing, the request will error out.

### Example requests:

#### type: 'ETH'

```typescript
{
  ...
  "token": {
      "type": "ETH",
      "data": {
          "decimals": 18
      }
  }
}
```

#### type: 'ERC20'

```typescript
{
  ...
  "token": {
      "type": "ERC20",
      "data": {
          "decimals": 18,
          "token_address": "0x..."
      }
  }
}
```

#### type: 'ERC721'

```typescript
{
  ...
  "token": {
      "type": "ERC721",
      "data": {
          "token_address": "0x...",
          "token_id": "123"
      }
  }
}
```
