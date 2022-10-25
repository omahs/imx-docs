---
description: Initialize the Client Configuration
id: initialization
slug: /initialization
tags: [core-sdk-golang, initialization]
keywords: [imx-dx]
---

# Initialization

Initialize the Core SDK client with the network on which you want your application to run (see [all networks available](https://github.com/immutable/imx-core-sdk-golang/blob/69af5db9a0be05afd9c91c6b371547cfe3bea719/imx/interface.go)):

Select one of the following Ethereum networks Immutable X platform currently supports.

| Environment | Description   |  
|-------------|---------------|
| Sandbox     | The default test network (currently, it is Goërli)  |
| Mainnet     | Ethereum network    | 

```go
import "github.com/immutable/imx-core-sdk-golang/imx/api"

const alchemyAPIKey = "alchemy api key"

func main() {
    apiConfiguration := api.NewConfiguration()
    cfg := imx.Config{
        APIConfig:     apiConfiguration,
        AlchemyAPIKey: YOUR_ALCHEMY_API_KEY,
        Environment:   imx.Sandbox,
    }
    client, err := imx.NewClient(&cfg)
    if err != nil {
        log.Panicf("error in NewClient: %v\n", err)
    }
    defer c.EthClient.Close()
}
```
