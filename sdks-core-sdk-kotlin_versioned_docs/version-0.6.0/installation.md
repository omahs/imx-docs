---
description: Install Core SDK Kotlin
id: installation
slug: /installation
tags: [core-sdk-kotlin, installation, setup]
keywords: [imx-wallets]
---

# Installation

1. Add Maven Central to your repositories
```gradle
repositories {
    mavenCentral()
}
```

2. Add dependency to your app `build.gradle` file
```gradle
dependencies {
    implementation 'com.immutable.sdk:imx-core-sdk-kotlin-jvm:$version'
}
```

3. Set the correct environment (defaults to Production)
```kt
ImmutableXCore.setBase(ImmutableXBase.Ropsten)
```
