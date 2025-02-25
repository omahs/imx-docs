---
id: "error-codes"
title: "API error codes"
slug: "/error-codes"
sidebar_position: 1
---

## contract_already_exists

The collection has already been registered. A collection can only be registered once. Check that the value of the `contract_address` field passed to the [register collection API](/reference#/operations/createCollection) is correct.

If you have previously registered a collection and want to update some of its details, view the [update collection API](/reference#/operations/updateCollection) documentation.

## missing_metadata_key

At least one *required* metadata key was not provided in the request. The `message` field of the error response specifies the specific metadata key(s) that are missing. Example:

```json
{
  "code": "missing_metadata_key",
  "message": "Missing required metadata key: name"
}
``` 

## metadata_key_already_exists

The metadata you are trying to add to a collection is already present. To update collection metadata, view the [update collection metadata API](/reference#/operations/updateCollection).

## mint_validation_failed

The mint request payload has failed validation. The `message` field has more details on the validation error.

## asset_invalid_id
`/assets/{address}/{id}` - Contract address and token id is a unique composite key.  
The contract address is not a hex (e.g.'0x02311ab2...') or the token id is not an integer. Both params stored in DB as a varchars. 

## asset_not_found

`/assets/{address}/{id}` - Contract address and token id is a unique composite key. 
The assets with such ID was not found in database (join of imx_nft + imx_collection + imx_royalty)

## asset_invalid_format

The response from DB `[]store.Asset` could not be transformed into `[]api.Asset`

## invalid_mint_id

The provided mint `id` is invalid. It was either not correctly provided as a valid integer, or there was some other issue parsing the `id`, e.g. integer overflow, negative integer.

## mint_not_found

The provided mint `id` is valid, however it does not exist. Please ensure that you are providing the `id` of a minted token.

## mint_unwithdrawable

The token attempting to be minted did not pass the validation to ensure it can be withdrawn on the L1 layer at a later stage. This is usually caused by a mismatch between the token ID/blueprint and your smart contracts `mintFor` logic.

This error will log log the token address, id and blueprint of the attempted mint.

## unique_project_error

The provided request object contains collection addresses that belong to different projects. Ensuring that the collection addresses provided belong to the same project will solve this error.

## mint_limit_exceeded

The request to mint is in danger of exceeding the allowable number of mints per project in the given timeframe. In order to increase project limits, contact the customer support team.

## collection_limit_exceeded

The request to create a collection is in danger of exceeding the allowable number of collections per project created in the given timeframe. In order to increase project limits, contact the customer support team.