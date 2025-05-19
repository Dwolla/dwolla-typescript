# ListWebhookSubscriptionsResponse

successful operation

## Example Usage

```typescript
import { ListWebhookSubscriptionsResponse } from "dwolla-typescript/models/operations";

let value: ListWebhookSubscriptionsResponse = {
  links: {
    self: {
      href: "https://api.dwolla.com/webhook-subscriptions",
    },
  },
  embedded: {
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
  },
  total: 1,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                    | [operations.ListWebhookSubscriptionsLinks](../../models/operations/listwebhooksubscriptionslinks.md)       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `embedded`                                                                                                 | [operations.ListWebhookSubscriptionsEmbedded](../../models/operations/listwebhooksubscriptionsembedded.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `total`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | 1                                                                                                          |