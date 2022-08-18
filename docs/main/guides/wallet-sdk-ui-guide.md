---
id: "wallet-sdk-ui-guide"
title: "Wallet-SDK UI/UX Guide"
slug: "/wallet-sdk-ui-guide"
sidebar_position: 10
keywords: [imx-wallets]
---

# Wallet SDK UI/UX Guide

This guide is aimed to provide some clarity on the minimum requirements needed to ensure the Core SDK and Wallet SDK workflows are functional. Beyond the partner must haves, the rest is up to the partner to design.

# Connect Wallet

<table>
        <tr>
            <th>Flow</th>
            <th>Link UI / Immutable marketplace example</th>
            <th>Requirements</th>
        </tr>
        <tr>
            <td>Provider List</td>
            <td><img src="/img/wallet-sdk-ui-guide/list.png" alt="Provider List" width="70%" height="70%" /></td>
            <td>
                <strong>Parter must</strong>
                <ul>
                    <li>Provide some mechanism to surface the wallet options</li>
                    <li>Include user acceptance of Immutable’s T&C and privacy policy</li>
                </ul>    
            </td>
        </tr>
        <tr>
            <td>Email Login</td>
            <td><img src="/img/wallet-sdk-ui-guide/email.png" alt="Email Login" width="70%" height="70%" /></td>
            <td>
                If partner chooses to surface the email wallet (provided by Magic), then the partner must:
                <ul>
                    <li>Provide some way to obtaining the user’s email / partner to pass through</li>
                    <li>Include Magic’s T&C and Privacy policy</li>
                </ul>    
            </td>
        </tr>
        <tr>
            <td>MetaMask + GameStop</td>
            <td><img src="/img/wallet-sdk-ui-guide/sign.png" alt="Signature Request" width="70%" height="70%" /></td>
            <td>
                Useful to include:
                <ul>
                    <li>Explanation of why there are multiple signature requests from the non-custodial wallet</li>
                    <ul>
                        <li>Connecting an account</li>
                        <li>Signature request for access</li>
                        <li>Setting up a IMX Key (needed on the first time only)</li>
                    </ul>
                    <li>If having both Metamask and Gamestop as wallet options, explain somehow that having both plugins at the same time can cause issues to the wallet connection</li>
                </ul>    
            </td>
        </tr>
        <tr>
            <td>Wallet Connected</td>
            <td></td>
            <td>
                Useful to include:
                <ul>
                    <li>User feedback that wallet is successfully connected</li>
                </ul>    
            </td>
        </tr>
</table>

# Disconnect Wallet

<table>
    <tr>
            <th>Flow</th>
            <th>Link UI / Immutable marketplace example</th>
            <th>Requirements</th>
        </tr>
        <tr>
            <td>Disconnect Wallet</td>
            <td><img src="/img/wallet-sdk-ui-guide/disconnect.png" alt="Disconnect Wallet" width="70%" height="70%" /></td>
            <td>
                <strong>Partner must</strong>
                <ul>
                    <li>provide some exit point for user to disconnect their wallet</li>
                </ul>    
            </td>
        </tr>
</table>

# List Asset

<table>
    <tr>
            <th>Flow</th>
            <th>Link UI / Immutable marketplace example</th>
            <th>Requirements</th>
        </tr>
        <tr>
            <td>Listing Screen</td>
            <td>
                <img src="/img/wallet-sdk-ui-guide/list-1.png" alt="List asset 1" width="50%" height="50%" /><br/>
                <img src="/img/wallet-sdk-ui-guide/list-2.png" alt="List asset 2" width="70%" height="70%" />
            </td>
            <td>
                <strong>Partner must</strong>
                <ul>
                    <li>Collect listing price</li>
                    <li>Collect listing currency (assuming you support multiple currencies)</li>
                    <li>Maker / taker fee breakdown</li>
                </ul>
                Useful to have:
                <ul>
                    <li>Processing indicator</li>
                    <li>User feedback that listing was successful</li>
                </ul>    
            </td>
        </tr>
</table>

# Buy Asset

<table>
    <tr>
            <th>Flow</th>
            <th>Link UI / Immutable marketplace example</th>
            <th>Requirements</th>
        </tr>
        <tr>
            <td>Asset Screen</td>
            <td>
                <img src="/img/wallet-sdk-ui-guide/buy.png" alt="Buy Asset Screen" width="70%" height="70%" />
            </td>
            <td>
                <strong>Partner must</strong>
                <ul>
                    <li>Surface purchase price</li>
                    <li>Surface purchase currency (assuming you support multiple currencies)</li>
                    <li>Maker / taker fee breakdown</li>
                </ul>
                Useful to have:
                <ul>
                    <li>User feedback that purchase was successful</li>
                    <li>Send users to add funds flow if they have insufficient funds</li>
                </ul>    
            </td>
        </tr>
</table>

Requirement for custom UI:

- View asset listing amount
- Payment flow entry points (Deposit from L1, Onramp with Moonpay, Pay with CC through Moonpay).

# L1 to L2 Deposit

<table>
    <tr>
            <th>Flow</th>
            <th>Link UI / Immutable marketplace example</th>
            <th>Requirements</th>
        </tr>
        <tr>
            <td>Add funds flow</td>
            <td>
                <img src="/img/wallet-sdk-ui-guide/add-funds.png" alt="Add Funds" width="50%" height="50%" />
            </td>
            <td>
                <strong>Partner must</strong>
                <ul>
                    <li>Surface add funds flow</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Deposit flow</td>
            <td>
                <img src="/img/wallet-sdk-ui-guide/deposit.png" alt="Deposit Screen" width="50%" height="50%" />
            </td>
            <td>
                <strong>Partner must</strong>
                <ul>
                    <li>Collect currency type (assuming multiple currencies available)</li>
                    <li>Collect amount to be deposited</li>
                </ul>
                Useful to have:
                <ul>
                    <li>Icon for different currency types</li>
                    <li>Available L1 balance to be deposited</li>
                    <li> User feedback that deposit was successful</li>
                </ul>    
            </td>
        </tr>
</table>

# L2 to L1 Withdraw

<table>
    <tr>
        <th>Flow</th>
        <th>Link UI / Immutable marketplace example</th>
        <th>Requirements</th>
    </tr>
    <tr>
        <td>Withdraw flow</td>
        <td>
            <img src="/img/wallet-sdk-ui-guide/withdraw-1.png" alt="Withdraw Screen" width="50%" height="50%" /><br/>
            <img src="/img/wallet-sdk-ui-guide/withdraw-2.png" alt="Withdraw Confirmation" width="50%" height="50%" />
        </td>
        <td>
            <strong>Partner must</strong>
            <ul>
                <li>Surface withdrawal flow</li>
                <li>Collect currency type (assuming multiple currencies available to be withdrawn)</li>
                <li>Collect amount to be withdrawn</li>
            </ul>
            Useful to have:
            <ul>
                <li>Icon for different currency types</li>
                <li>Available L2 balance to be deposited</li>
                <li>Notice that withdrawal will require L1 gas to be paid</li>
                <li>Notice that withdrawal has 2 stage: preparation & execution of withdrawal (more information available <a href="https://support.immutable.com/hc/en-us/articles/1500003550482">here</a>)</li>
            </ul>
        </td>
    </tr>
</table>

# Fiat On-Ramp [ workflow to be added ]

<table>
    <tr>
        <th>Flow</th>
        <th>Link UI / Immutable marketplace example</th>
        <th>Requirements</th>
    </tr>
    <tr>
        <td>Fiat onramp</td>
        <td>
            <img src="/img/wallet-sdk-ui-guide/fiat-onramp.png" alt="Add Funds" width="50%" height="50%" />
        </td>
        <td>
            <strong>Partner must</strong>
            <ul>
                <li>Trigger the onramp flow</li>
            </ul>
            Moonpay widget will take care of the rest
        </td>
    </tr>
</table>

# Crypto to Fiat (Off-Ramp) [workflow to be added]

<table>
    <tr>
        <th>Flow</th>
        <th>Link UI / Immutable marketplace example</th>
        <th>Requirements</th>
    </tr>
    <tr>
        <td>Crypto offramp</td>
        <td>
            <img src="/img/wallet-sdk-ui-guide/fiat-offramp.png" alt="Withdraw to bank account" width="50%" height="50%" />
        </td>
        <td>
            <strong>Partner must</strong>
            <ul>
                <li>Trigger the offramp flow</li>
            </ul>
            Moonpay widget will take care of the rest.<br/>
            Useful to have:
            <ul>
                <li>Moonpay Offramp is only available to users in the US, UK, and EU</li>
            </ul>
        </td>
    </tr>
</table>

# Error States

<table>
    <tr>
        <th>Flow</th>
        <th>Link UI / Immutable marketplace example</th>
        <th>Requirements</th>
    </tr>
    <tr>
        <td>Error states</td>
        <td>
            <img src="/img/wallet-sdk-ui-guide/errors.png" alt="Error screens" width="50%" height="50%" />
        </td>
        <td>
            <strong>Partner must</strong>
            <ul>
                <li>Provide user feedback about specific errors</li>
                <li> Error list can be found <a href="https://docs.x.immutable.com/docs/link-errors/">here</a></li>
            </ul>
            Useful to have:
            <ul>
                <li>Link to Immutable support page</li>
            </ul>
        </td>
    </tr>
</table>

# Transaction History

<table>
    <tr>
        <th>Flow</th>
        <th>Link UI / Immutable marketplace example</th>
        <th>Requirements</th>
    </tr>
    <tr>
        <td>Transaction History</td>
        <td>
            <img src="/img/wallet-sdk-ui-guide/transaction-history.png" alt="Transaction history screen" width="50%" height="50%" />
        </td>
        <td>
            <strong>Partner must</strong>
            <ul>
                <li>Provide entry point for transactions</li>
                <li>Transaction ID</li>
                <li>Asset</li>
                <li>Action</li>
                <li>Cost</li>
            </ul>
        </td>
    </tr>
</table>
