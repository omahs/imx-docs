---
description: How to make a first SDK request
id: quickstart
slug: /quickstart
tags: [wallet-sdk-ios, quickstart]
keywords: [imx-wallets]
---

# Quickstart

## Connect wallet

### Connect via WalletConnect

```swift
try await ImmutableXWallet.shared.connect(
    to: .walletConnect(
        config: .init(
            appURL: URL(string: "https://immutable.com")!,
            appName: "ImmutableX Sample",
            // The Universal Link or URL Scheme of the chosen wallet to be connected.
            walletDeeplink: "https://metamask.app.link"
        )
    )
)
```

> **NOTE**: the async methods that require user actions with the chosen wallet app will only complete when the requested action has been performed (i.e. accepted or denied).

If you want to use your own bridge server instead of the default provide it via `bridgeServer` when connecting. For more info on how WalletConnect and the bridge works [see here](https://docs.walletconnect.com/1.0/bridge-server).

## Restart existing session

The user's previous wallet sessions will be automatically restored when the app is launched, however it can also be manually triggered.

```swift
try await ImmutableXWallet.shared.restartSession()
```

## Disconnect wallet

```swift
try await ImmutableXWallet.shared.disconnect()
```

## Handle callbacks

All the `ImmutableXWallet` methods (connect, disconnect, etc.) are asynchronous, and changes to the status are communicated via the callback.

### Set callback

```swift
ImmutableXWallet.shared
    .setStatusCallbackForId("unique identifier") { status in
        switch status {
        case .connecting:
            // Waiting for a provider to connect or restarting a previous session.
            break

        case .pendingConnection:
            // Emitted when the app has returned to the foreground after triggering a connection request but doesn't have a
            // result yet.
            break

        case .pendingSignature:
            // Emitted when the app has returned to the foreground after triggering a signature request but doesn't have a
            // result yet.
            break

        case .connected:
            // An L1 wallet is connected and an L2 wallet is successfully derived.
            break

        case .disconnecting:
            // Waiting for a provider to disconnect.
            break

        case .disconnected:
            // A wallet moves from Connected to Disconnected. Failure to connect will throw an error.
            break
        }
}
```

### Pending states

If a wallet app has been launched to connect or sign and your app has resumed but no result has arrived, `.pendingConnection` or `.pendingSignature` will be sent to the callback.

This allows you to handle this scenario flexibly; you could re-launch their wallet and complete the flow, show a popup or continue showing a waiting state, for example.

### Remove callback

You may unregister from all callbacks

```swift
ImmutableXWallet.shared.removeAllStatusCallbacks()
```

or remove a specific one

```swift
ImmutableXWallet.shared.removeStatusCallbackForId("unique identifier")
```
