---
description: Install Core SDK Swift
id: installation
slug: /installation
tags: [core-sdk-swift, installation, setup]
keywords: [imx-wallets]
---

# Installation

## Prerequisites

- iOS 13.0 or macOS 10.15
- Swift 5.7

## Swift Package Manager

In your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/immutable/imx-core-sdk-swift.git", from: "1.0.0-beta.1")
]
```

## Cocoapods

In your `Podfile`:

```ruby
platform :ios, '13.0'
use_frameworks!

target 'MyApp' do
  pod 'ImmutableXCore'
end
```
