---
description: How to make a first SDK request
id: quickstart
slug: /quickstart
tags: [wallet-sdk-android, quickstart]
keywords: [imx-wallets]
---

# Quickstart

## Connect wallet

### Connect via WalletConnect

Any wallet that supports [WalletConnect v1.0](https://walletconnect.com/) can be connected

```kotlin
ImmutableXWallet.connect(
    Provider.WalletConnect(
        appUrl = "https://www.marketplace.com/",
        appName = "My NFT Marketplace",
        appDescription = "This is a marketplace where all my favorite NFTs can be traded.",
        appIcons = listOf("http://www.marketplace.com/appicon.svg")
    )
)
```
If you want to use your own bridge server instead of the default provide it via `bridgeServerUrl` when connecting. For more info on how WalletConnect and the bridge works [see here](https://docs.walletconnect.com/tech-spec).

### Handle callbacks
All the `ImmutableXWallet` methods (connect, disconnect, etc.) are asynchronous, and changes to the status are communicated via the callback.

### Set callback
```kotlin
ImmutableXWallet.setCallback(object: ImmutableXWalletCallback {
    override fun onStatus(status: ImmutableXWalletStatus?, throwable: Throwable?) {
        when (status) {
            ImmutableXWalletStatus.Connected -> { showProfileScreen() }
            ImmutableXWalletStatus.Disconnected -> { showLoginScreen() }
            ImmutableXWalletStatus.Connecting -> { showProgressScreen() }
            is ImmutableXWalletStatus.PendingConnection -> { showConnectPopup(status.intent) }
            is ImmutableXWalletStatus.PendingSignature -> { showSignaturePopup(status.intent) }
        }
    }
})
```

#### Pending states
If a wallet app has been launched to connect or sign and your app has resumed but no result has arrived, `PendingConnection` or `PendingSignature` will be sent to the callback.

This allows you to handle this scenario flexibly; you could use the provided intent to prompt the user to re-launch their wallet and complete the flow or continue showing a waiting state.

### Remove callback

```kotlin
ImmutableXWallet.removeCallback()
```

### Restart existing session
The users previous wallet sessions will be automatically restored once your first activity is launched however it can also be manually triggered.
```kotlin
ImmutableXWallet.restartSession()
```

### Disconnect wallet
```kotlin
ImmutableXWallet.disconnect()
```
