# WebhookSubscription

## Example Usage

```typescript
import { WebhookSubscription } from "dwolla-typescript";

let value: WebhookSubscription = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | [models.WebhookSubscriptionLinks](../models/webhooksubscriptionlinks.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 077dfffb-4852-412f-96b6-0fe668066589                                                          |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | http://myapplication.com/webhooks                                                             |
| `paused`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | true                                                                                          |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-10-28T16:20:47+00:00                                                                     |