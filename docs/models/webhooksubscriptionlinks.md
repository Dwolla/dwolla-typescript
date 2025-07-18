# WebhookSubscriptionLinks

## Example Usage

```typescript
import { WebhookSubscriptionLinks } from "dwolla/models";

let value: WebhookSubscriptionLinks = {
  self: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/077dfffb-4852-412f-96b6-0fe668066589",
  },
  webhooks: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/077dfffb-4852-412f-96b6-0fe668066589/webhooks",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `self`                                                                 | [models.WebhookSubscriptionSelf](../models/webhooksubscriptionself.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `webhooks`                                                             | [models.Webhooks](../models/webhooks.md)                               | :heavy_minus_sign:                                                     | N/A                                                                    |