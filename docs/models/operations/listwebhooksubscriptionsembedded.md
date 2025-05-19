# ListWebhookSubscriptionsEmbedded

## Example Usage

```typescript
import { ListWebhookSubscriptionsEmbedded } from "dwolla-typescript/models/operations";

let value: ListWebhookSubscriptionsEmbedded = {
  webhookSubscriptions: [
    {
      links: {
        self: {
          href:
            "https://api.dwolla.com/webhook-subscriptions/077dfffb-4852-412f-96b6-0fe668066589",
        },
        webhooks: {
          href:
            "https://api.dwolla.com/webhook-subscriptions/077dfffb-4852-412f-96b6-0fe668066589/webhooks",
        },
      },
      id: "077dfffb-4852-412f-96b6-0fe668066589",
      url: "http://myapplication.com/webhooks",
      paused: true,
      created: new Date("2022-10-28T16:20:47+00:00"),
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `webhookSubscriptions`                                              | [models.WebhookSubscription](../../models/webhooksubscription.md)[] | :heavy_minus_sign:                                                  | N/A                                                                 |