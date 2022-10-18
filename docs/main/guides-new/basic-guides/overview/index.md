---
title: "Guides"
slug: "/guides-new/overview"
keywords: [imx-dx]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Guides provide information on how to execute key functionality of the Immutable X platform using our developer tools.

[**Read more about our SDKs and how they work together >**](/docs/sdks)

### Each guide provides information for building on:
* [StarkEx settlement layer](/docs/overview-new/immutable-layer-2#layer-2s-on-immutable-x), using our:
  * [Core SDK](/docs/sdks#core-sdks) (with [Wallet SDK](/docs/sdks#wallet-sdks) for obtaining user signatures)
  * [JS SDK](npmjs.com/package/@imtbl/imx-sdk) (with the [Link SDK](/docs/sdks/#link-sdk) for obtaining user signatures)
    :::caution To be deprecated soon - do not start using!
    JS and Link SDKs will be deprecated soon. If you have not yet started building, **do not** build on these. If you have already started building with this, please make plans to switch over to the [Core SDK](/docs/sdks).
    :::
* [StarkNet settlement layer](/docs/overview-new/immutable-layer-2#layer-2s-on-immutable-x), by extending or integrating wtih our StarkNet contracts.

## Guides:
<DocCardList items={useCurrentSidebarCategory().items}/>