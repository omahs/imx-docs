---
sidebar_position: 2
title: "Core tokenomics concepts"
slug: "/learn/core-tokenomics-concepts"
keywords: [imx-growth]
---



 In this article you will learn

- Core concepts in tokenomics
- Key decisions you'll need to make in your design
- Trade-offs for these decisions
 


## **Introduction**

This article will cover in-game and utility-focused tokenomics as these play a pivotal role in your economy design. We will explore the following concepts:

- Governance, ownership and sharing in project success
- Token count
- Allocation
- Monetary policy
- Token velocity

These concepts are interrelated and non-exhaustive - this section is intended as a high-level overview of key concepts and how design choices can impact economic outcomes. 

## Governance, ownership and sharing in project success

Tokens are usually aimed at rewarding token holders for activities that are aligned to and benefit the project. They also enables token holders to benefit from the upside in the project. As such, tokens serve as a key lever in the marketing of a project and the management of the project's stakeholder community.

Examples of ERC20 use cases:

- Grant governance over the project - Holders can vote on project decisions
- Distribute rewards based on project performance - Holders gain revenue share from the project
- Reward pro project activities - Tokens are rewarded to users that partake in activities like signing up

Considerations for your own ERC20:

- What are you trying to incentivize with this token?
- What are the legal and compliance implications?
- How are you capturing value, i.e. how will the token holders benefit from the project upside?

## Token count

Token count refers to how many distinct ERC20 tokens are in the ecosystem

- No token - No ERC20s, instead NFTs are used for economic activity
- Single token - One ERC20 for governance and in game activity
- Dual token - One ERC20 for governance and a separate one for in game activities
- 3 or more tokens - One ERC20 for governance and multiple ERC20s for in game activities

Here are some considerations for choosing your own token model:

|                  |                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Token Model**  | **Characteristics**                                                                                                                                                                                                                                                                                                                                         |
| **No tokens**    | <ul><li> Simplest to execute </li><li> Economy not vulnerable to ERC20 price changes</li><li> Simple monetisation once live: primary NFT sales and royalties on NFT trades </li><li> Off-chain resources / currencies likely required to build mature game loops </li></ul>                                                                                                                          |
| **Single token** | <ul><li> Simple to execute </li><li> In-game economy exposed to speculation on token price from investors </li><li> Can align incentives: investors and players hold and use the same token and both benefit from upside </li><li> Monetary policy decisions (adjusting emissions or supply) will impact both players and investors</li></ul>                                                        |
| **Dual token**   | <ul><li> Familiar model for the market, particularly relevant for fundraising </li><li> Isolates in-game economy from speculation on ‘governance-style’ token, isolates investors from in-game monetary policy decisions</li><li> Can separate incentives: governance tokens extract value from players and their activity, players extract value by farming and dumping currency</li></ul> |
| **3+ tokens**    | <ul><li>As above, plus:</li><li>  Additional tokens add additional controls for monetary policy and sustainability</li><li> However, they also add complexity and expose economy to unexpected outcomes </li></ul>                                                                                                                                                                |
                                                                                                                   |

## Allocation

Token allocation is an opportunity to align incentives between the team, investors, and players. As a baseline, tokens should always define the following:

- Max supply - Fixed (BTC) or uncapped (ETH)

- Distribution - Are all tokens printed and distributed, or progressively minted

- Allocation - Split of tokens between different parties.
  - **Community treasury** : retained for future distribution through governance
  - **Core Team:** founders, past and future employees
  - **Private investors** : capital providers who have purchased equity
  - **Ecosystem incentives:** earmarked for growth programs
  - **Airdrops** : delivered retroactively to users for value-adding actions
  - **Public sale:** general public

- Vesting periods - Period between tokens being available to spend and trade

**Note:** The above generally refers to governance focused tokens. We will explore in-game tokens and off-chain tokens separately.

## Monetary policy

Projects with tokenomics are run similarly to small nations - they each have their own economies and need to manage monetary policy, monitor outcomes, and implement controls. This section focuses on in-game tokens. However, learnings can be applied to governance tokens too.

Here are some general examples of how monetary policy impacts games:

- Deflationary - Reducing token supply can increase token value. However, it will slow down in game activity as if players can make fiat gains by holding tokens, they will have no incentive to interact with the game
- Inflationary - Controlling supply to hold stable token values over time. This can lead to supply exceeding demand and eventually crashing the price, provided there is no new cashflow.
- Generally, if more value is being extracted from the game (players selling items) than being input (new players joining or existing players spending money), the token price will decrease
- Another way to look at the above is that - your game cannot consist purely of earners

**Monitoring and controlling**

Similar to real-world economies, projects should establish health metrics and controls. Some examples of health metrics include: token prices, supply, earn rates, and activities. From an in-game perspective, projects can also monitor which game loops players use to generate tokens. For example is a certain action generating too much of one resource?

Here are a few examples of controls:

- Avoid tokenizing all in-game assets
- Introducing tax on in game transactions to reduce supply
- Create token sinks where players can spend their tokens

We'll explore these concepts in part 2 of this article - designing your in-game economy.

## Token Velocity

Token velocity is defined as the total transaction value divided by the average network value. It represents how frequently users trade a token compared to holding it.

' **Governance-style' tokens:** a high velocity represents a token that does not have a strong reason to be held rather than spent. An example would be a token that is required to execute a specific function (e.g. required to pay a fee), and delivers no value outside of this. High-velocity tokens are exposed to price volatility and absent speculation, will struggle to maintain long-term price appreciation

- It is important that these tokens capture and deliver benefit to holders to slow velocity
- Staking is a useful tool to slow velocity, especially while additional functionality is built out. However, if the token does not fundamentally capture value or deliver benefit, staking is equivalent to 'bribing holders with more tokens', and only defers velocity

**In-game 'utility' tokens:** an important distinction is that for in-game tokens, transactions that are inside the game economy (e.g. in-game or peer-to-peer) are notionally different from velocity outside the economy

- Creating enough depth and width (i.e. complexity) within the game economy that opportunities for trading and spending emerge helps retain value inside the game economy
- Creating friction to acquiring tokens or reducing economic openness can deter value-extractive players without impacting gameplay. Examples include making resources off-chain assets, emitting tokens to players who win (rather than just participate), adding earn limits (energy or durability) or emitting off-chain assets which can be upgraded to NFTs with in-game resources. See 'Economic Openness' section
  - Note that as mentioned above, while requiring an NFT to play increases friction, it also increases barrier to entry and reduces net new inflow of players by eliminating the curious but non-committal

