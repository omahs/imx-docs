---
title: "Overview"
slug: "/guides/overview"
sidebar_position: 1
---

# Guides overview

Guides contain step-by-step instructions on how to achieve a specific goal. They utilize Immutable's developer tools, such as our API and SDKs. Each guide contains multiple options based on the tools we have in different languages or frameworks.

## Developer tools
Developer tools make it easy to carry out the functionality that the Immutable X platform provides. See [here](#) for an overview of the Immutable X platform.

* [API](#api)
* [SDKs to facilitate user transactions](#sdks-for-user-transactions)
* [SDK for core Immutable functionality](#core-sdks)

### API

Immutable provides an API that enables all of the platform's key capabilities. See the [full API reference](#).

### SDKs for user transactions
On Immutable X, these are generally transactions that deal with changes in asset ownership that require the approval of asset owners. These are transactions that update the 'state' of things on the blockchain, as opposed to just reading information.

User accounts (a.k.a. 'wallets'), are used to authorize transactions. In order for users to transact on L2, they need an L2 wallet. User registration on Immutable creates this L2 wallet for them.

| SDK                                     | Language/s                  | Functionality provided |
| ---------------------------------------- | ------------------------- | ----------- |
| Link SDK | [Typescript](https://www.npmjs.com/package/@imtbl/imx-sdk) | Provides end-to-end user wallet connection and registration, complete with a UI |
| Wallet SDK | [Typescript](https://github.com/immutable/imx-wallet-sdk-web), [Android](https://github.com/immutable/imx-wallet-sdk-android) | Provides a connection to users' L1 and L2 wallets and returns 'signers' that can be used to sign transactions. No UI. |

### Core SDK
The core SDKs make it easy to access Immutable X core functionality from within whatever application you're using. We currently have Core SDKs in the following languages:
* [Typescript](#)
* [Golang](#)
* [Kotlin (JVM)](#)
* [Swift](#)

## How do the SDKs work together?

### Example functionality matrix

<table>
    <tbody>
        <tr>
            <th></th>
            <th colspan="5">Actions requiring user signatures</th>
            <th colspan="4">Actions not requiring user signatures</th>
        </tr>
        <tr>
            <th></th>
            <th>Sign transactions</th>
            <th>Register users</th>
            <th>Create orders and trades</th>
            <th>L1-L2 transfers (deposits and withdrawals)</th>
            <th>Mint tokens on L2</th>
            <th>Get list of assets</th>
            <th>Get orders</th>
            <th>Get trades</th>
            <th>Get user balances</th>
        </tr>  
        <tr>
            <th>API</th>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <th>Wallet SDK</th>
            <td>✅</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <th>Link SDK</th>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>        
        </tr>
        <tr>
            <th>Core SDK</th>
            <td>❌</td>
            <td>✅<br/>(When used with Wallet SDK)</td>
            <td>✅<br/>(When used with Wallet SDK)</td>
            <td>✅<br/>(When used with Wallet SDK)</td>
            <td>✅<br/>(When used with Wallet SDK)</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
    </tbody>
</table>