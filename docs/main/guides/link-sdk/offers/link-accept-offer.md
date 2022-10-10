---
id: "link-accept-offer"
title: "Link.acceptOffer"
slug: "/link-accept-offer"
excerpt: "Link can now be used to accept an offer made on your asset"
sidebar_position: 3
keywords: [trading, orderbook, offers, buy-order]
---

:::note Link reference tool
Check out our **[Link reference tool](https://tools.immutable.com/link-reference/)** to understand how `Link` methods work without having to write any code.
:::

Here's how you can accept an offer:

```typescript
import { Link, ImmutableXClient, ImmutableOrderStatus} from ‘@imtbl/imx-sdk’;
const link = new Link("https://link.sandbox.x.immutable.com")
// accept an offer by passing the orderId of the offer
await link.acceptOffer({
  orderId: '940'
});
```

Just like all other link SDK methods, **acceptOffer** returns a promise, which resolves once all operations are complete, or rejects once the link encounters a critical error.

Input parameters:
```typescript
{
  orderId: string
}
```

## Errors

See error responses [here](./../link-errors.md#offers).