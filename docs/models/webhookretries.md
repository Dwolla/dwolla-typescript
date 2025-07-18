# WebhookRetries

## Example Usage

```typescript
import { WebhookRetries } from "dwolla/models";

let value: WebhookRetries = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/webhooks/9ece9660-aa34-41eb-80d7-0125d53b45e8/retries",
    },
  },
  embedded: {
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
  },
  total: 1,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `links`                                                              | [models.WebhookRetriesLinks](../models/webhookretrieslinks.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `embedded`                                                           | [models.WebhookRetriesEmbedded](../models/webhookretriesembedded.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `total`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 1                                                                    |