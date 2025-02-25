---
id: "link-iframe-support"
title: "Link iFrame Support"
slug: "/link-iframe-support"
sidebar_position: 3
keywords: [imx-wallets]
---

## How to trigger link inside an iframe

:::caution Action Required
This functionality requires your application to be whitelisted. Immutable X Customer Success will whitelist your application at the same time they register your minting contract.
:::

The link supports iframe embedding.

Simply supply an additional options object when you construct Link:

```typescript
type IframePositionKeys = 'left' | 'right' | 'top' | 'bottom'

type IframePositionOptions = {
  [key in IframePositionKeys]?: string
}

type IframeSizeOptions = {
  width: number
  height: number
}

type ConfigurableIframeOptions = null | {
  position?: IframePositionOptions
  className?: string
  containerElement?: HTMLElement
  protectAgainstGlobalStyleBleed?: boolean
}
const linkIframeOptions: ConfigurableIframeOptions = { className: 'my-link-iframe' }
const link = new Link('https://link.dev.x.immutable.com', linkIframeOptions)
```
