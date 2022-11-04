---
description: Install Wallet SDK iOS
id: installation
slug: /installation
tags: [wallet-sdk-ios, installation, setup]
keywords: [imx-wallets]
---

# Installation

## Supported Wallet Providers

* Any wallet that supports [WalletConnect v1.0](https://walletconnect.com/)

## Prerequisites

* iOS 13.0
* Swift 5.7

## Cocoapods

In your `Podfile`:

```ruby
platform :ios, '13.0'
use_frameworks!

target 'MyApp' do
  pod 'ImmutableXWallet'
end
```
