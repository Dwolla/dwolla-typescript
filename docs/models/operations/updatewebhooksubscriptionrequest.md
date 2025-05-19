# UpdateWebhookSubscriptionRequest

## Example Usage

```typescript
import { UpdateWebhookSubscriptionRequest } from "dwolla-typescript/models/operations";

let value: UpdateWebhookSubscriptionRequest = {
  id: "<id>",
  requestBody: {
    paused: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Webhook unique identifier                                                                                          |
| `requestBody`                                                                                                      | [operations.UpdateWebhookSubscriptionRequestBody](../../models/operations/updatewebhooksubscriptionrequestbody.md) | :heavy_check_mark:                                                                                                 | Parameters to update a webhook subscription                                                                        |