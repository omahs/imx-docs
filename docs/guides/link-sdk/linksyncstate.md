---
title: 'Link.syncState'
slug: '/linksyncstate'
sidebar_position: 9
---

**SDK `v1.10.0+`** supports `link.syncState()`, a method which will emit an observable, which will stream wallet state change events (disconnect, network change, wallet change) to the consumer.
:::caution Action Required
This functionality requires your application to be whitelisted. Immutable X Customer Success will whitelist your application at the same time they register your minting contract.
:::

The intended use for this functionality is to keep track of what the user is doing inside of their connected wallet UI, and check the emitted change events, against the currently connected wallet account (which can be stored locally after a successful `link.setup()` call). If the user is found to be using a wallet address other than the one they used to onboard initially (eg the one returned by `link.setup()`) - then the client web application can then alert the user to either switch back to their original wallet, or disconnect with the old one and connect with the new one.

SyncState event types:

```typescript
enum SyncStateEventTypes {
  INIT = 'INIT',
  DISCONNECT = 'DISCONNECT',
  WALLET_CHANGE = 'WALLET_CHANGE',
  NETWORK_CHANGE = 'NETWORK_CHANGE',
}

interface BaseSyncStatePayload {
  eventType: SyncStateEventTypes;
}

type DisconnectSyncStateEvent = BaseSyncStatePayload & {
  code: number;
  reason: string;
};

type ActiveWalletChangeSyncStateEvent = BaseSyncStatePayload & {
  connectedWalletAddress: t.Branded<string, EthAddressBrand> | null;
};

type NetworkChangeSyncStateEvent = BaseSyncStatePayload & {
  connectedNetworkId: string;
};

type InitSyncStateEvent = BaseSyncStatePayload & {
  connectedNetworkId: string;
  connectedWalletAddress: string;
};

type SyncStateEventPayload =
  | InitSyncStateEvent
  | DisconnectSyncStateEvent
  | ActiveWalletChangeSyncStateEvent
  | NetworkChangeSyncStateEvent;

type SyncStateObservableStream = Observable<SyncStateEventPayload>;

Link.syncState(): Promise<SyncStateObservableStream>;
```

The observable resolved instantly by the promise `link.syncState` returns, will persist (and emit wallet related events) as long as the browsing session lasts (eg until the user goes to another website or closes the tab).

Sample consumer implementation:

```typescript
const syncStateObservable = await link.syncState()

syncStateObervable.subscribe((syncStateEvent: SyncStateEventPayload) => {
  console.log('syncStateEvent', syncStateEvent) // 'syncStateEvent', { eventType: 'INIT', connectedNetworkId: '0x3', connectedWalletAddress: '0x123456789...' }
})
```

**\*NOTE:** Once the syncState route inside of link is setup and running (this happens automatically under the hood within the SDK) - a single `INIT` event will be fired off through the observable stream (as seen above).
