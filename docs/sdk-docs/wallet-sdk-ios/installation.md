---
description: Install Wallet SDK iOS
id: installation
slug: /installation
tags: [wallet-sdk-ios, installation, setup]
keywords: [imx-wallets]
---

# Installation

This SDK is closed source and only available as a XCTFramework through Cocoapods.

## Supported Wallet Providers

* Any wallet that supports [WalletConnect v1.0](https://walletconnect.com/)

## Prerequisites

* iOS 13.0
* Swift 5.7

## Cocoapods

In your `Podfile`:

```ruby
# Important: ensure this source is specified in the Podfile
source 'https://github.com/CocoaPods/Specs.git'

platform :ios, '13.0'
use_frameworks!

target 'MyApp' do
  pod 'ImmutableXWallet'
end
```
