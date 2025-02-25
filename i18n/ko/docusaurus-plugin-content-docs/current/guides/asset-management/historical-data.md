---
id: "historical-data"
title: "Historical Data"
slug: "historical-data"
sidebar_position: 8
keywords: [imx-dx]
---
Immutable X allows you to get a complete history of user actions on the exchange, including their deposits, withdrawals and trades. This is useful for displaying user history, calculating your application's volume and estimating asset prices. In future, we may allow users to designate certain actions as private, but we currently do not support this.

There are 5 historical endpoints, for each of the major events which occur on the exchange:

- [Get a list of deposits](/reference#/operations/listDeposits)
- [Get a list of withdrawals](/reference#/operations/listWithdrawals)
- [Get a list of transfers](/reference#/operations/listTransfers)
- [Get a list of trades](/reference#/operations/listTrades)
- [Get a list of mints](/reference#/operations/listMints)

If you're just looking to visualise a user's recent history on Immutable X, feel free to use the Immutable Link's `link.history()` function to summon up a quick view.