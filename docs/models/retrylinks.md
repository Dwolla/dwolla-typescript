# RetryLinks

## Example Usage

```typescript
import { RetryLinks } from "dwolla/models";

let value: RetryLinks = {
  self: {
    href:
      "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8/retries/5aa27a0f-cf99-418d-a3ee-67c0ff99a494",
  },
  webhook: {
    href:
      "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `self`                                                             | [models.RetrySelf](../models/retryself.md)                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `webhook`                                                          | [models.WebhookRetriesWebhook](../models/webhookretrieswebhook.md) | :heavy_minus_sign:                                                 | N/A                                                                |