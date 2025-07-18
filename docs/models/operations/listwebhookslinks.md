# ListWebhooksLinks

## Example Usage

```typescript
import { ListWebhooksLinks } from "dwolla/models/operations";

let value: ListWebhooksLinks = {
  self: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/a0943041-7a5c-4e8f-92de-b55711ef3a83/webhooks",
  },
  first: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/a0943041-7a5c-4e8f-92de-b55711ef3a83/webhooks?limit=25&offset=0",
  },
  last: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/a0943041-7a5c-4e8f-92de-b55711ef3a83/webhooks?limit=25&offset=150",
  },
  next: {
    href:
      "https://api.dwolla.com/webhook-subscriptions/a0943041-7a5c-4e8f-92de-b55711ef3a83/webhooks?limit=25&offset=25",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `self`                                                                       | [operations.ListWebhooksSelf](../../models/operations/listwebhooksself.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `first`                                                                      | [operations.ListWebhooksFirst](../../models/operations/listwebhooksfirst.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `last`                                                                       | [operations.ListWebhooksLast](../../models/operations/listwebhookslast.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `next`                                                                       | [operations.Next](../../models/operations/next.md)                           | :heavy_minus_sign:                                                           | N/A                                                                          |