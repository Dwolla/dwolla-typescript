# WebhookLinks

## Example Usage

```typescript
import { WebhookLinks } from "dwolla/models";

let value: WebhookLinks = {
  self: {
    href:
      "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8",
  },
  subscription: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/a0943041-7a5c-4e8f-92de-b55711ef3a83",
  },
  retry: {
    href:
      "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8/retries",
  },
  event: {
    href: "https://api.dwolla.com/events/03c7e14c-7f15-44a2-bcf7-83f2f7e95d50",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `self`                                           | [models.WebhookSelf](../models/webhookself.md)   | :heavy_minus_sign:                               | N/A                                              |
| `subscription`                                   | [models.Subscription](../models/subscription.md) | :heavy_minus_sign:                               | N/A                                              |
| `retry`                                          | [models.WebhookRetry](../models/webhookretry.md) | :heavy_minus_sign:                               | N/A                                              |
| `event`                                          | [models.WebhookEvent](../models/webhookevent.md) | :heavy_minus_sign:                               | N/A                                              |