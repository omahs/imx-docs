---
id: "generate-imx-signature"
title: "Generate IMX-Signature"
slug: "/generate-imx-signature"
sidebar_position: 5
keywords: [imx-games]
---

Some of our API endpoints require **IMX-Signature** in the Headers:
* **collections**
    * [createCollection](https://docs.x.immutable.com/reference#/operations/createCollection)
    * [updateCollection](https://docs.x.immutable.com/reference#/operations/updateCollection)
* **metadata**
    * [addMetadataSchemaToCollection](https://docs.x.immutable.com/reference#/operations/addMetadataSchemaToCollection)
    * [updateMetadataSchemaByName](https://docs.x.immutable.com/reference#/operations/updateMetadataSchemaByName)
* **projects**
    * [getProjects](https://docs.x.immutable.com/reference#/operations/getProjects)
    * [getProject](https://docs.x.immutable.com/reference#/operations/getProject)
    * [createProject](https://docs.x.immutable.com/reference#/operations/createProject)

### How to get the `IMX-Signature`?
IMX-Signature consists of a **Unix epoch timestamp** (ie. "1654483072") signed with the project owner's **ETH key (wallet address)** (ie. "0x...").

#### How are `timestamp` and `signature` generated?
```typescript
const timestamp = Math.floor(Date.now() / 1000).toString();
const signature = await signRaw(timestamp, signer); // IMX-Signature
```

where:
* **signer**: Signer from [@ethersproject/abstract-signer](https://www.npmjs.com/package/@ethersproject/abstract-signer)
* **signRaw**: function in [imx-core-sdk](https://github.com/immutable/imx-core-sdk/blob/main/src/utils/crypto/crypto.ts#L79-L85)

