---
description: Install Core SDK Kotlin
id: installation
slug: /installation
tags: [core-sdk-kotlin, installation, setup]
---

# Installation

1. Create an Access Token [(see here)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `read:packages` enabled.

2. Add the GitHub package as a repository either in your `build.gradle` file or `settings.gradle` if you have one:

  ```gradle
  repositories {
      maven {
          name = "imx-core-sdk-kotlin-jvm"
          url = uri("https://maven.pkg.github.com/immutable/imx-core-sdk-kotlin-jvm")
          credentials {
              username = "<github username>"
              password = "<access token>"
          }
      }
  }
  ```

  Note: will look to have this accessible directly via the `mavenCentral()` repository in the future.

3. Add dependency to your app `build.gradle` file:

  ```gradle
  dependencies {
      implementation 'com.immutable.sdk:imx-core-sdk-kotlin-jvm:$version'
  }
  ```

4. Set the correct environment (Ropsten or Production/Mainnet)

  ```kt
  ImmutableXCore.setBase(ImmutableXBase.Ropsten)
  ```
