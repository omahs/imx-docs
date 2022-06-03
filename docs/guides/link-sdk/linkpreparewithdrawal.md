---
title: 'Link.prepareWithdrawal'
slug: '/linkpreparewithdrawal'
sidebar_position: 5
---

Here's how you can prepare ETH for withdrawal:

The response to this request can be obtained by saving the results of the Promise returned by `prepareWithdrawal`:

```typescript
const response = await link.prepareWithdrawal({
  type: ETHTokenType.ETH,
  amount: '0.001', //The amount of the token to withdraw
})

console.log(response)
// returns { withdrawalId: 123456 }
```

Check out our [Link reference tool](https://tools.immutable.com/link-reference/) to understand how `Link.prepareWithdrawal` works without having to write any code.
