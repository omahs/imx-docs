---
id: "link-errors"
title: "Link Errors"
slug: "/link-errors"
sidebar_position: 13
keywords: [imx-wallets]
---

Find below the list of errors that can be displayed in Link.

## General Errors

| Error Code | Likely Scenario                                             | Displayed Error Message                                                                    | Possible User Actions                                                            | Possible Developer Actions                      |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1000       | Failed to instantiate SDK IMX Client when connecting wallet | Something went wrong.                                                                      | Contact the Customer Support team.                                               | Check SDK Settings.                             |
| 1001       | Unable to retrieve tokens list                              | Something went wrong retrieving your tokens list: ${apiError}                              | Retry the operation/Refresh the page or Contact support team                     | Try to replicate the issue.                     |
| 1002       | Failed to retrieve the wallet address                       | Something went wrong when retrieving your wallet address. Check with your wallet provider. | Check wallet connection with IMX.Check wallet provider.Contact Customer Support. | Try to replicate the issue. Check console logs. |

## Deposits

| Error Code | Likely Scenario                       | Displayed Error Message                                                                    | Possible User Actions                                                   | Possible Developer Actions                      |
| ---------- | ------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------- |
| 2000       | Failed to retrieve the wallet address | Something went wrong when retrieving your wallet address. Check with your wallet provider. | Check wallet connection with IMX.Contact Customer Support.              | Try to replicate the issue. Check console logs. |
| 2001       | Provided invalid ERC20 token          | Token not available in IMX.                                                                | Retry the transaction.Contact support team to report the invalid token. | Try to replicate the issue. Check console logs. |
| 2002       | Insufficient funds                    | Insufficient funds.                                                                        | Add funds to L1 wallet.                                                 | N/A                                             |

## Complete Withdrawal

| Error Code | Likely Scenario                       | Displayed Error Message                                                                    | Possible User Actions                                                            | Possible Developer Actions                      |
| ---------- | ------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------------------------------------------- |
| 4000       | Failed to retrieve the wallet address | Something went wrong when retrieving your wallet address. Check with your wallet provider. | Check wallet connection with IMX.Check wallet provider.Contact Customer Support. | Try to replicate the issue. Check console logs. |

## Buy

| Error Code | Likely Scenario                  | Displayed Error Message                                             | Possible User Actions                                                                           | Possible Developer Actions                      |
| ---------- | -------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 5000       | Failed to retrieve order details | Something went wrong.-Additional error message provided by the API. | Check wallet connection with IMX.Retry operation.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs. |
| 5001       | Failed to retrieve asset details | Something went wrong.-Additional error message provided by the API. | Check wallet connection with IMX.Retry operation.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs. |
| 5002       | Failed trade request             | Something went wrong.-Additional error message provided by the API. | Check wallet connection with IMX.Retry operation.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs. |

## Sell

| Error Code | Likely Scenario                             | Displayed Error Message                                                     | Possible User Actions                                                                             | Possible Developer Actions                                                      |
| ---------- | ------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 6000       | Unable to retrieve asset details            | Something went wrong.-Additional details/error message provided by the API. | Retry operation.If continue to fail, contact Customer Support.                                    | Try to replicate the issue. Check console logs.                                 |
| 6001       | Unable to list asset for sale               | Unable to list asset-Additional details/error message provided by the API.  | Retry operation.Check if asset is already listed.If continue to fail, contact Customer Support.   | Try to replicate the issue. Check console logs.                                 |
| 6002       | Asset is already listed for sale            | Asset is unavailable.                                                       | Retry operation.Confirm if asset is already listed.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs.                                 |
| 6003       | Invalid currency provided as query param    | Unknown currency.                                                           | Retry operation.If continue to fail, contact Customer Support.                                    | Confirm tokens available in IMX.Try to replicate the issue. Check console logs. |
| 6004       | Invalid asset price provided as query param | Price should be at least ${minPrice}                                        | Retry operation with different price.If continue to fail, contact Customer Support.               | N/A                                                                             |

## Transfer

| Error Code | Likely Scenario                             | Displayed Error Message                                                                                     | Possible User Actions                                          | Possible Developer Actions                                                      |
| ---------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 7000       | Failed to retrieve transfer token details   | Something went wrong retrieving token details.                                                              | Retry operation.If continue to fail, contact Customer Support. | Confirm tokens available in IMX.Try to replicate the issue. Check console logs. |
| 7001       | Failed to retrieve user token balance       | Something went wrong retrieving your ${tokenType} token balance                                             | Retry operation.If continue to fail, contact Customer Support. | Confirm tokens available in IMX.Try to replicate the issue. Check console logs. |
| 7002       | Invalid data found before starting transfer | Transfers have failed validation.The following validation errors were identified:${listOfFailedValidations} | Retry operation.If continue to fail, contact Customer Support. | Try to repliace the issue.Check error details.                                  |
| 7003       | API rejected transfers                      | The API rejected the transfer: ${details}                                                                   | Retry operation.If continue to fail, contact Customer Support. | Try to repliace the issue.Check error details.                                  |

## History

| Error Code | Likely Scenario                    | Displayed Error Message                                      | Possible User Actions                                                                  | Possible Developer Actions                      |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 8000       | Failed to retrieve any transaction | Something went wrong retrieving the transactions: ${details} | Retry operation.Check wallet connection.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs. |

## Cancel

| Error Code | Likely Scenario                      | Displayed Error Message                            | Possible User Actions                                          | Possible Developer Actions                      |
| ---------- | ------------------------------------ | -------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| 9000       | Failed to retrieve the order details | Something went wrong retrieving the order details. | Retry operation.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs. |
| 9001       | Failed to retrieve token details     | Something went wrong retrieving the token details. | Retry operation.If continue to fail, contact Customer Support. | Try to replicate the issue. Check console logs. |

## Fiat to Crypto

| Error Code | Likely Scenario                    | Displayed Error Message | Possible User Actions                                          | Possible Developer Actions                 |
| ---------- | ---------------------------------- | ----------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| 10001      | Exchange status is failed          | Something went wrong.   | Retry operation.If continue to fail, contact Customer Support. | Check transaction status with IMX/Moonpay. |
| 10002      | Unable to retrieve exchange status | Connection Error.       | Retry operation.If continue to fail, contact Customer Support. | Check transaction status with IMX/Moonpay. |
| 10003      | Invalid crypto currencies          | Invalid currencies.     | Retry operation.If continue to fail, contact Customer Support. | Check supported tokens for Fiat to Crypto. |
| 10004      | Could not get currencies           | Something went wrong.   | Retry operation.If continue to fail, contact Customer Support. | Check supported tokens for Fiat to Crypto. |

## Crypto to Fiat

| Error Code | Likely Scenario                    | Displayed Error Message  | Possible User Actions                                                                | Possible Developer Actions                      |
| ---------- | ---------------------------------- | ------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 11001      | Exchange status is failed          | Something went wrong.    | Retry operation.If continue to fail, contact Customer Support.                       | Check transaction status with IMX/Moonpay.      |
| 11002      | Unable to retrieve exchange status | Connection Error.        | Retry operation.If continue to fail, contact Customer Support.                       | Check transaction status with IMX/Moonpay.      |
| 11003      | Could not get currencies           | Something went wrong.    | Retry operation.If continue to fail, contact Customer Support.                       | Check supported tokens for Crypto to Fiat.      |
| 11004      | No currencies left after filtering | Currencies not available | Retry operation.If continue to fail, contact Customer Support.                       | Check supported tokens for Crypto to Fiat.      |
| 11005      | Invalid currency amount            | Invalid currency amount  | Retry operation with different amount.If continue to fail, contact Customer Support. | Check supported tokens for Crypto to Fiat.      |
| 11006      | Incorrect transaction format       | Something went wrong.    | Retry operation.If continue to fail, contact Customer Support.                       | Try to replicate the issue. Check console logs. |
