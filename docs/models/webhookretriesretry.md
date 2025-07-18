# WebhookRetriesRetry

## Example Usage

```typescript
import { WebhookRetriesRetry } from "dwolla/models";

let value: WebhookRetriesRetry = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | [models.RetryLinks](../models/retrylinks.md)                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 5aa27a0f-cf99-418d-a3ee-67c0ff99a494                                                          |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-11-02T17:43:26.000Z                                                                      |