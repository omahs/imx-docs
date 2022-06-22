---
title: 'Link.completeWithdrawal'
slug: '/linkcompletewithdrawal'
sidebar_position: 6
---

:::note Link reference tool
Check out our **[Link reference tool](https://tools.immutable.com/link-reference/)** to understand how `Link` methods work without having to write any code.
:::

Here's how you can complete the withdrawal of ETH:

The response can be obtained by saving the results of the Promise returned by `completeWithdrawal`:

```typescript
const response = await link.completeWithdrawal({
  type: ETHTokenType.ETH,
})

console.log(response)
// returns { transactionId: '0x...' }
```

## Error Messages

### 4000 - Something went wrong when retrieving your wallet address. Check with your wallet provider.

There are no more things that can be done by the user on Screen. It will be needed to fix the provider issue and then redo the operation.

Check with provider.