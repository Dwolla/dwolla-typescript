# WebhookRetriesEmbedded

## Example Usage

```typescript
import { WebhookRetriesEmbedded } from "dwolla-typescript/models";

let value: WebhookRetriesEmbedded = {
  retries: [
    {
      links: {
        self: {
          href:
            "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8/retries/5aa27a0f-cf99-418d-a3ee-67c0ff99a494",
        },
        webhook: {
          href:
            "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8",
        },
      },
      id: "5aa27a0f-cf99-418d-a3ee-67c0ff99a494",
      timestamp: new Date("2022-11-02T17:43:26.000Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `retries`                                                        | [models.WebhookRetriesRetry](../models/webhookretriesretry.md)[] | :heavy_minus_sign:                                               | N/A                                                              |