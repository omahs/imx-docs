---
description: Initialize the Client Configuration
id: initialization
slug: /initialization
tags: [core-sdk-ts, initialization]
keywords: [imx-dx]
---

# Initialization

Initialize the Core SDK client with the network on which you want your application to run (see [all networks available](https://github.com/immutable/imx-core-sdk/blob/v1.0.0-beta.1/src/config/config.ts#L43)):

| Param | Description |
| -- | -- |
| `Config.SANDBOX` | The default test network (currently, it is Goërli) |
| `Config.ROPSTEN` | Ropsten test network (to be deprecated soon) |
| `Config.PRODUCTION` | Ethereum network |

```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';

const config = Config.SANDBOX; // Or PRODUCTION or ROPSTEN
const client = new ImmutableX(config);
```
