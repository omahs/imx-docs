---
title: "Asset deposits and withdrawals"
slug: "/how-to-enable-deposits-withdrawals"
keywords: [imx-wallets, imx-dx]
---

import ListAdmonition from '@site/src/components/ListAdmonition';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Applications may want to enable users to:
* Deposit assets on L1 to L2 (note these [pre-requisites](#deposit-pre-requisites))
* Withdraw assets from L2 to L1

For more information and use cases, see our explanatory article, [Deep dive into deposits and withdrawals](../../../key-concepts/deep-dive-deposits-withdrawals.md).

#### Deposit pre-requisites:
* The user depositing the asset must be [registered with ImmutableX](../register-users/index.md)
* The user must own the asset on L1
* The L1 smart contract holding the asset must be [registered as a collection](../mint-assets/index.md#3-register-a-collection)

<ListAdmonition label="Guides">
    <ul>
        <li><a href="#core-sdk">Core SDK</a></li>
        <li>Link SDK:</li>
          <ul>
            <li><a href="./link-deposit-options">Deposits</a></li>
            <li><a href="./linkpreparewithdrawal">Prepare withdrawal</a> and <a href="./linkcompletewithdrawal">complete withdrawal</a></li>
          </ul>
    </ul>
</ListAdmonition>

## Core SDK

### 1. Initialize the Core SDK
In order to use the Core SDK, you need to [initialize it](../install-initialize/index.md#core-sdk).

### 2. Generate signers
Enabling users to transfer assets requires a user's signature, so your application will need to create signers. See the guide on [how to generate signers](../generate-signers/index.md).

### 3. Deposit assets onto L2
<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-ts/1.0.0-beta.3/classes/immutablex.immutablex#deposit">deposit</a></li>
      </ul>
  </ListAdmonition>

The function below will deposit ETH from L1 to L2. If you wish to deposit a different asset, you can change `type` to either `ERC20` or `ERC721` and specify the asset address as an additional parameter.

```ts
(async(): Promise<void> => {
    // Create deposit
    const deposit = await client.deposit(ethSigner, {
        // ethSigner obtained from generating signer

        type: 'ETH', // There are three avaible types: ETH, ERC20, ERC721
        amount: '50000000000000000', // Amount in wei, this currently is 0.05 ETH
    });
    // console.log(deposit); // Uncomment to see the deposit object

})().catch(e => {
    log.error(component, e);
});
```
### Example response
```ts
{
  type: 2, // Transaction type, currently 2 means EIP-1559
  chainId: 5, // The Chain ID of the network, 5 is the Chain ID for Goerli.
  nonce: 5, // The nonce of the transaction used 
  maxPriorityFeePerGas: BigNumber { _hex: '0x59682f00', _isBigNumber: true }, // Maximum fee to bribe miners into giving this transaction priority
  maxFeePerGas: BigNumber { _hex: '0x5968cf94', _isBigNumber: true }, // The maximum fee per gas that the sender is willing to pay
  gasPrice: null, // The gas price of the transaction determined by the network
  gasLimit: BigNumber { _hex: '0x013617', _isBigNumber: true }, // The maximum amount of gas that the transaction can use
  to: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623', // The address of the recipient
  value: BigNumber { _hex: '0xb1a2bc2ec50000', _isBigNumber: true }, // The amount of ETH to send in wei
  data: '0x00aeef8a02f9a87a2eae83e024312ea33e2bec5df10cdef1470f6aaf5d5adb23f735a60002705737cd248ac819034b5de474c8f0368224f72a0fda9e031499d519992d9e000000000000000000000000000000000000000000000000000000000001ed7a', // Data included in this log
  accessList: [], // Optional list of addresses and storage keys the transaction can access
  hash: '0x357d6e1c09cf09b5746279bb77377b2353deb1c538eb18c8c9fa9e2363aa3d58', // The hash of the transaction
  v: 0, // The recovery ID of the ECDSA signature
  r: '0xc02c07ff0f80405f34917c9e300abff5da7dda319828fe1843a06f041cd3cbf5', // The first 32 bytes of the ECDSA signature
  s: '0x5c08b76a9ab9f766b82e6f273a1503d064d1604b8e071d7267a6735c5900bb1c', // The second 32 bytes of the ECDSA signature
  from: '0xF656956cA54778056f1191791876db54Aa6eb61B', // The address of the sender
  confirmations: 0, // The number of confirmations that the transaction has received
  wait: [Function (anonymous)] // A function that returns a promise that resolves when the transaction is mined
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-kotlin/0-6-0/imx-core-sdk-kotlin-jvm/com.immutable.sdk.api/-deposits-api/index.html">Deposits API</a></li>
      </ul>
  </ListAdmonition>

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-swift/0-4-0/documentation/immutablexcore/depositsapi">Deposits API</a></li>
      </ul>
  </ListAdmonition>

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li>ETH deposit:</li>
          <ul>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#NewETHDeposit">NewETHDeposit</a></li>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#ETHDeposit.Deposit">(*ETHDeposit) Deposit</a></li>
          </ul>
          <li>ERC20 deposit:</li>
          <ul>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#NewERC20Deposit">NewERC20Deposit</a></li>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#ERC20Deposit.Deposit">(*ERC20Deposit) Deposit</a></li>
          </ul>
          <li>ERC721 deposit:</li>
          <ul>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#NewERC721Deposit">NewERC721Deposit</a></li>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#ERC721Deposit.Deposit">(*ERC721Deposit) Deposit</a></li>
          </ul>
      </ul>
  </ListAdmonition>

  </TabItem>
</Tabs>

### 4. Withdraw assets to L1
<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-ts/1.0.0-beta.3/classes/immutablex.immutablex#prepareWithdrawal">prepareWithdrawal</a></li>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-ts/1.0.0-beta.3/classes/immutablex.immutablex#completeWithdrawal">completeWithdrawal</a></li>
      </ul>
  </ListAdmonition>

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-kotlin/0-6-0/imx-core-sdk-kotlin-jvm/com.immutable.sdk.api/-withdrawals-api/create-withdrawal.html">createWithdrawal</a></li>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-kotlin/0-6-0/imx-core-sdk-kotlin-jvm/com.immutable.sdk.api/-withdrawals-api/get-signable-withdrawal.html">getSignableWithdrawal</a></li>
      </ul>
  </ListAdmonition>

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-swift/0-4-0/documentation/immutablexcore/withdrawalsapi/getsignablewithdrawal(getsignablewithdrawalrequest:)">getSignableWithdrawal</a></li>
          <li><a href="https://docs.x.immutable.com/sdk-references/core-sdk-swift/0-4-0/documentation/immutablexcore/withdrawalsapi/createwithdrawal(ximxethaddress:ximxethsignature:createwithdrawalrequest:)">createwithdrawal</a></li>
      </ul>
  </ListAdmonition>

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">

  <ListAdmonition label="SDK reference">
      <ul>
          <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#Client.PrepareWithdrawal">PrepareWithdrawal</a></li>
          <li>Complete withdrawal for token types:</li>
          <ul>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#EthWithdrawal.CompleteWithdrawall">(*EthWithdrawal) CompleteWithdrawal</a></li>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#ERC20Withdrawal.CompleteWithdrawal">(*ERC20Withdrawal) CompleteWithdrawal</a></li>
              <li><a href="https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.1/imx#ERC721Withdrawal.CompleteWithdrawal">(*ERC721Withdrawal) CompleteWithdrawal</a></li>
          </ul>
      </ul>
  </ListAdmonition>

  <ListAdmonition label="Example">
      <ul>
          <li><a href="https://github.com/immutable/imx-core-sdk-golang/blob/main/imx/examples/withdrawal/main.go">Withdrawal</a></li>
      </ul>
  </ListAdmonition>

  </TabItem>
</Tabs>