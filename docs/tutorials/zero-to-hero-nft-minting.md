---
title: "Zero to Hero NFT Minting Tutorial"
slug: "/zero-to-hero-nft-minting"
sidebar_position: 1
---
Immutable X is the easiest way to mint NFTs 100% gas-free on Layer 2. Our APIs abstract much of the complexity you'd have to navigate on other blockchains. Follow this tutorial and you'll have a solid foundation to ship an NFT collection on Immutable X. 

To complete this tutorial, you will not need any coding experience - we will give you everything you need at each step. This is the most straightforward implementation of the minting primitive; check out the rest of the documentation for information on what else you can do with Immutable X. 

There are slight differences between following this tutorial on a Mac and a PC. These will be called out throughout the tutorial. 

Finally, if you get stuck along the way, visit us on [Discord](https://discord.gg/TkVumkJ9D6) and the Immutable team and community will be happy to help you along the way. 

## Concepts covered in this tutorial

* [Tools and Packages](#tools-and-packages)
* [Prepare your collection](#collection-preparation)
* [Deploy your smart contract](#deploy-your-smart-contract)
* [Onboard your smart contract](#onboard-your-smart-contract)
* [Register an account with Immutable X](#register-a-user-account-with-imx)
* [Create your project](#create-your-project)
* [Create your collection](#create-your-collection)
* [Create metadata schema](#create-metadata-schema)
* [Mint your NFTs](#mint-your-nfts) 
* [List your NFT](#list-your-nft)

:::info Completing this tutorial
In order to be able to launch your collection, you need to sign up for a few services and download some packages and tools. The services, packages, and tools in this guide are just suggestions, and we are in no way endorsing or partnering with these services
:::

## Tools and Packages

To complete this tutorial, the first step is to download some tools and packages. In this section, we will step through those pre-requisites.

### Download [Homebrew](https://brew.sh/) 
::: info Only for Mac OS
This step is only required for Mac users
:::

Homebrew installs the packages you need for this tutorial that Apple (or your Linux system) didn’t. Copy the command on the [Homebrew website](https://brew.sh/), then run in the terminal. 

### Download [NodeJS](https://nodejs.org/)

NodeJS allows you to use JavaScript on the backend to build and run applications, for example, to mint NFTs on Immutable X. To download, NodeJS head to the [NodeJS website](https://nodejs.org/). 

:::danger Nodejs Version
Ensure that you get the latest LTS version or you may experience issues following the turorial"
:::

![Node js version](../../static/img/zero-to-hero/nodejs-version.png 'Node js version')

For PC users, check that NodeJS is working by opening powershell or command line and executing the command:

```shell
npm -v
```

For Mac users, open up the terminal and run 
```shell
brew install node@16
``` 

### Install Yarn

The next step is to install yarn, the open-source package manager.

For PC users, to install run the following command in powershell.
```shell
npm install yarn -g
```

For Mac users, run the following command in the terminal.
```shell
brew install yarn
```

### Download [Visual Studio Code](https://code.visualstudio.com/)

The next step is to download Visual Studio Code, which is the code editor that we will be using for this tutorial. Head to their [website](https://code.visualstudio.com/), download the application and unzip to install. 

### MetaMask

We need an Ethereum account to send and receive transactions. For this tutorial, we're using the Immutable X compatible wallet MetaMask, a virtual wallet in the browser used to manage your Ethereum account address. If you want to understand more about how transactions on Ethereum work, check out [this page](https://ethereum.org/en/developers/docs/transactions/) from the Ethereum foundation.

You can download and create a Metamask account for free [here](https://metamask.io/download/). You will need a browser that allows extensions, such as Chrome or Firefox. When you are creating an account, or if you already have an account, make sure to switch over to the “Ropsten Test Network” in the upper right (so that your collection is deployed on the testnet).

###  Add rEth from the faucet

In order to deploy our smart contract to the test network, we’ll need some test Eth. To get test Eth you can go to the [Ropsten faucet](https://faucet.dimensions.network/) and enter your Ropsten account address, then click “Send Ropsten Eth.” You should see Eth in your Metamask account soon after!

If this faucet doesn't work, you can try alternate faucets here: 
* [Ropsten testnet faucet](https://faucet.egorfine.com/)
* [Test Ether Faucet](https://faucet.metamask.io/)
* [IMX Faucet](https://imxfaucet.xyz/)

## Collection Preparation

In the spirit of decentralization, we’ll be using IPFS to host our images and metadata. The InterPlanetary File System (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system (from Wikipedia). IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices. So each file uploaded to IPFS has a unique identifier of the format `QmTVVUvBhYdiGJ8Wh3HqkhJfZms7ficvWBuBH6SjfKEtQ8`.

How do you access a file with that unique identifier? There are a few public “gateways” that allow access to files with their identifier. Without using an IPFS gateway, the only way to access content on the IPFS network is by running your own IPFS node. 

Pinata is an IPFS gateway and pinning service. It simplifies the process of uploading and managing files on IPFS. Pinning a file in IPFS allows you to retain the file for posterity. Services like Pinata guarantee that your file is pinned for a fee. You can learn more about pinning [here](https://docs.ipfs.io/concepts/persistence/#persistence-versus-permanence).

### Sign up to [Pinata](https://www.pinata.cloud/)

Sign up to Pinata by heading to the [website](https://www.pinata.cloud/). For this tutorial, you can just get the free version, but for your real collection, we highly suggest that you create a paid account to ensure your images can be loaded. 

Choose 3 images to upload as your NFT images. You can use images from [This Person Does Not Exist](https://this-person-does-not-exist.com/en) (refresh to get another image), or alternatively provide your own images, just be aware that they will be publically hosted on IPFS. 

To upload, press "+ Upload" and select file, then upload the image you have chosen. Do this for each of your 3 images. 

![Pinata Upload File](../../static/img/zero-to-hero/pinata-upload-file.png 'Pinata Upload File')

Once done, click on the images you just uploaded and note down the URL for each file

![Note the URL](../../static/img/zero-to-hero/pinata-upload-file.png 'Note the URL of the uploaded file')

Your URLs should have the format `https://gateway.pinata.cloud/ipfs/QmPLrvyVbx6mYzzH7K8MLj9ADMoNhid2dAzSuzPQWXLV8G`

### Create Metadata

Each NFT needs metadata, which you will create now. In VS Code, create a new folder (Open folder > New folder) then create 3 files within the folder, named 1, 2 and 3. 

Populate each file with the metadata for the corresponding NFT. You can use the following metadata for your test collection, just make sure that you replace each `image_URL` with the URLs that you created earlier to host your NFT images.

```json "Metadata File 1"
{
  "name": "1st NFT",
  "description": "This is your 1st nft",
  "image_url":"<replace this with your own IPFS picture link>",
  "attack": 123,
  "collectable": true,
  "class": "EnumValue1"   
}
```
```json "Metadata File 2"
{
  "name": "2nd NFT",
  "description": "This is your 2nd nft",
  "image_url":"<replace this with your own IPFS picture link>",
  "attack": 223,
  "collectable": true,
  "class": "EnumValue2"   
}
```

```json "Metadata File 3"
{
  "name": "3rd NFT",
  "description": "This is your 3rdnft",
  "image_url":"<replace this with your own IPFS picture  link>",
  "attack": 323,
  "collectable": true,
  "class": "EnumValue3"   
}
```

Once you have created your files, upload the folder into Pinata. 

![Upload Folder](../../static/img/zero-to-hero/upload-folder.png 'Upload Folder')

Once completed, the folder will look like this

![Folder Appearance](../../static/img/zero-to-hero/folder-appearance.png 'Folder Appearance')

Click on the folder and note down the resulting URL. This is your metadata API URL, which is the endpoint that the metadata crawler looks to add metadata to your NFTs when they are minted. 
:::warning
 Be sure to remove `?preview=1` if it appears at the end of your URL
:::

The resulting URL should have the format `https://gateway.pinata.cloud/ipfs/QmTSQLBNg94WuP56as1HwYjHtZZ7F6ryJD4q2q1EZ8TP6q`. The crawler adds `/{token-id}` to the end of the metadata API URL. You can test it by adding `/1` to the end of the URL and pasting it into your browser. It should return JSON. 

### Create an Etherscan API Key

Next, sign up to Etherscan and get an API key to verify your smart contract’s source code.

1. Head to [Etherscan](https://etherscan.io/), the Ethereum block explorer
2. Sign in (or create a new account) 
3. Navigate to `API-KEYS` and add a new key
4. Note down the API key that is generated


![Etherscan API Key](../../static/img/zero-to-hero/etherscan-api-key.png 'Etherscan API Key')

![Etherscan Add API Key](../../static/img/zero-to-hero/etherscan-add-api-key.png 'Etherscan Add API Key')

![Etherscan Note API Key](../../static/img/zero-to-hero/etherscan-note-api-key.png 'Etherscan Note API Key')

## Deploy your smart contract

Now the fun begins! It's time to deploy your smart contract. 

To start, clone or download the [imx-contracts](https://github.com/immutable/imx-contracts) code from github.

![Download Zip](../../static/img/zero-to-hero/etherscan-note-api-key.png 'Download Zip')

Unzip the file and open it up in Visual Studio Code

![Open Folder](../../static/img/zero-to-hero/open-folder.png 'Open Folder')

### Rename .env file and update variables

Rename .env.example to .env and fill in details in the file. Don't forget to press save.

1. `DEPLOYER_ROPSTEN_PRIVATE_KEY` is your `CONTRACT_OWNER_ADDRESS` wallet’s private key so you can programmatically sign transactions. 
2.`ETHERSCAN_API_KEY` is the Etherscan API key you noted down in a previous step
3. `DEPLOYER_MAINNET_PRIVATE_KEY` is the same as `DEPLOYER_ROPSTEN_PRIVATE_KEY`
4. `CONTRACT_OWNER_ADDRESS` is the address of the wallet which will be deploying the contract (your metamask wallet address)
5. `CONTRACT_NAME` is the name of your NFT Collection and `CONTRACT_SYMBOL` is the shortened and capitalized symbol or “ticker” for your NFT collection. 
6. You can use the `ALCHEMY_API_KEY` that is pre-populated for the sake of this tutorial

![Fill the .env file](../../static/img/zero-to-hero/fill-env-file.png 'Fill the .env file')

### Build and install the dev library

The next step is to build and install the dev library. To start, in node.js, right-click on any file in the explorer pane, then select "Open in Integrated Terminal". 

![Open the integrated terminal](../../static/img/zero-to-hero/fill-env-file.png 'Open the integrated terminal')

In the terminal, run `npm install --include=dev` and wait until the installation is completed. For mac users, save your work. 

### Deploy contract

To deploy your contract, run the yard command `yarn hardhat run deploy/asset.ts --network ropsten`. It will take ~5 minutes to deploy your contract as you are simultaneously deploying your contract and verifying it and publishing the smart contract to [Ropsten Etherscan](https://ropsten.etherscan.io/). When it’s done, copy the Deployed Contract Address that is created and displayed on the terminal after executing this command. 

![Deploying the contract](../../static/img/zero-to-hero/deploying-the-contract.png 'Deploying the contract')

You can then search on your deployed contract address (highlighted above) on [Ropsten Etherscan](https://ropsten.etherscan.io/). 

🥳 You have just put something on the (test) blockchain!

## Onboard your smart contract

In this step, we will onboard your smart contract, which is registering it with Immutable X. 

1. To start, download the [imx-examples repo](https://github.com/immutable/imx-examples) from Github, then open that folder in Visual Studio Code, the same way as you did for the imx-contracts repo. 

2. Again, locate the .env.example file and rename it to .env. Then provide values for the following: 
  i. In the “General” section, enter a value for `ALCHEMY_API_KEY`, you can use the value used in the .env file in imx-contracts. 
  ii. In the “Onboarding” section, provide values for:

* `OWNER_ACCOUNT_PRIVATE_KEY` - This is your MetaMask wallet, Ropsten Test Network, private key.
* `COLLECTION_CONTRACT_ADDRESS` - The Deployed Contract Address you generated previously. 

  Save your changes.

3. Again in Visual Studio Code, right-click on any file in the explorer pane, then select Open in Integrated Terminal and run the command `npm install`. 

# Register a user account with IMX

In order to create a collection, developers (you, in this case) first need to register as an Immutable X user. This just means connecting your MetaMask wallet to Ropsten test network via the [Immutable X Test Marketplace](https://market.ropsten.x.immutable.com/ ). You can do this by accessing the marketplace and linking your account, or you can register a user account programmatically. 

## Register a user account programmatically

In the integrated terminal, run the command `npm run onboarding:user-registration` to register your wallet with Immutable X. 

## Create your project

To create an NFT collection in Immutable X, you need to first create a project, then register your collection to that project. To learn more about this, visit the [Onboard Guide](../guides/onboarding/index.md). 

Navigate to *src/onboarding/2-create-project.ts* file and add values for the following:

1. `name` - your project’s name. For example, God's Unchained's project name would be: God's Unchained.  
2. `company_name` - name of your company
3. `contact_email` - your business contact email address

![Onboarding Project](../../static/img/zero-to-hero/onboarding-project.png 'Onboarding Project')

Remember to save your changes. 

In the integrated terminal, run the command `npm run onboarding:create-project` to register your project. This will generate a project ID. Copy that number across to the .env file in the "Onboarding" section, the press save. 

![Add Project ID](../../static/img/zero-to-hero/add-project-id.png 'Add Project ID')

## Create your collection

Navigate to the *src/onboarding/3-create-collections.ts* file and populate the following values:

* `name` the name of your collection on the marketplace
* `description` the description for your collection
* `icon_url` the icon that displays on the Immutable X marketplace. For test purposes you can use one of the image URLs from Pinata.
* `metadata_api_url` the metadata API URL that you generated earlier in the tutorial. Make sure there is no trailing / at the end of the URL.
* `collection_image_url` the image of your collection that displays on the Immutable X marketplace.  For test purposes you can use one of the image URLs from Pinata.

To register the collection, run the command `npm run onboarding:create-collection`. 

:::info
Remember to remove the prepending double slashes ”//” in relation to the fields described below as these comment out the code.
:::

## Create metadata schema

Each NFT collection needs a metadata schema. For more information on metadata schemas, check out the [Metadata Schema Guide](../guides/onboarding/metadata-schema-registration.mdx).

Navigate to the *src/onboarding/4-add-metadata-schema.ts* file and update metadata on line 43:

![Add Metadata](../../static/img/zero-to-hero/add-metadata.png 'Add Metadata')

You can use the example metadata schema provided here, or use your own. Copy and paste the code below into line 43, as shown in the above image. 

```json "Example Metadata Schema"
{
  name :  'name' ,
  type :  MetadataTypes.Text
    
},

{
  name :  'description' ,
  type :  MetadataTypes.Text  
},

{
  name :  'image_url' ,
  type :  MetadataTypes.Text  
},

{
  name :  'attack' ,
  type :  MetadataTypes.Discrete,
  filterable : true
},

{
  name :  'collectable' ,
  type :  MetadataTypes.Boolean,
  filterable : true
},

{
  name : 'class' ,
  type :  MetadataTypes.Enum ,
  filterable : true
}
```

To add metadata schema to the collection, run the command `npm run onboarding:add-metadata-schema` in the integrated terminal. 

## Mint your NFTs

You have now deployed and registered your smart contract, created your project and collection, and created metadata and a metadata schema. The final step in creating your collection is to mint your NFTs!

Update .env file again, this time filling in values for the “Bulk Minting” details:

* `PRIVATE_KEY1` this is again asking for your MetaMask wallet, Ropsten Test Network, private key. Copy-paste it from OWNER_ACCOUNT_PRIVATE_KEY in the “Onboarding” section in this same file. 
* `TOKEN_ID` enter 1 as the TOKEN_ID if this is the first time you’re minting from your collection. If you have already minted a few NFTs, then take the TOKEN_ID of the last minted NFT, and increment it by 1 and enter it here.
* `TOKEN_ADDRESS` this is asking for your COLLECTION_CONTRACT_ADDRESS, but in a different way. Copy-paste it from the “Onboarding” section in this same file. 
* `BULK_MINT_MAX`for the purpose of this walkthrough, just enter 50 as shown below. This allows you to configure the maximum number of NFTs that can be minted in bulk in one go.

![Specify Metadata](../../static/img/zero-to-hero/add-metadata.png 'Specify Metadata')

To mint, run the command `npm run bulk-mint -- -n <number of tokens to mint> -w <your wallet address>` where

* `<number of tokens to mint>` is the number of NFTs you wish to mint. This cannot exceed BULK_MINT_MAX in .env. In this tutorial, this number is 3. 
* `<your wallet address>` is the MetaMask wallet you’re minting your NFTs to. For each contract (in other words, for each TOKEN_ADDRESS) you are minting tokens for, remember to set the TOKEN_ID in .env to the latest incremented index.

## List your NFT 

Congrats, you’ve done it! Visit the [Ropsten IMX Marketplace](https://market.ropsten.x.immutable.com/) and click Connect Wallet to view your inventory on Immutable X (Ropsten) marketplace. 

It can take a little while to appear. Click Inventory after connecting your wallet, or after signing in again if you’ve previously connected. List your NFT for sale by clicking through to one in your collection. You’ll see the LIST FOR SALE button below the description. 

## Celebrate 🥳 🥳 🥳

Congratulations - you have now minted 3 NFTs! 

This tutorial has shown you how to mint an NFT on the Ropsten test network. When you are ready to launch your project live on mainnet, you can use this tutorial, with a few small changes: 

* Changing the Ropsten variable to Ethereum as necessary
* Change your MetaMask to the Ethereum network