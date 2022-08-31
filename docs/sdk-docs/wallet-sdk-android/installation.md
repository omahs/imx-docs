---
description: Install Wallet SDK Android
id: installation
slug: /installation
tags: [wallet-sdk-android, installation, setup]
keywords: [imx-wallets]
---

# Installation

## Requirements
* Android version 8.1 (API 27) and above

## Setting up
1. Add Maven Central and JitPack to your repositories
```groovy
repositories {
    mavenCentral()
    maven { url = "https://jitpack.io" } // Needed for WalletConnect
}
``` 
2. Add dependency to your app `build.gradle` file:
```groovy
dependencies {
    implementation 'com.immutable.wallet:imx-wallet-sdk-android:$version'
}
```
3. In your `Application` class:
```kotlin
class ExampleApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    ImmutableXWallet.init(this)
  }
}
```
