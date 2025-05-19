# ListWebhooksRequest

## Example Usage

```typescript
import { ListWebhooksRequest } from "dwolla-typescript/models/operations";

let value: ListWebhooksRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Webhook subscription unique identifier                                       |
| `limit`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | How many results to return                                                   |
| `offset`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | How many results to skip                                                     |
| `startDate`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Only include webhooks created after this date. ISO-8601 format `YYYY-MM-DD`  |
| `endDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Only include webhooks created before this date. ISO-8601 format `YYYY-MM-DD` |