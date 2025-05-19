# CreateReAuthExchangeSessionRequest

## Example Usage

```typescript
import { CreateReAuthExchangeSessionRequest } from "dwolla-typescript/models/operations";

let value: CreateReAuthExchangeSessionRequest = {
  id: "<id>",
  createReAuthExchangeSession: {
    links: {
      redirectUrl: {
        href:
          "{\"description\":\"Plaid iOS example\",\"value\":\"https://example.com/app123\"}",
      },
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Exchange's unique identifier                                                                                |
| `createReAuthExchangeSession`                                                                               | *models.CreateReAuthExchangeSessionUnion*                                                                   | :heavy_minus_sign:                                                                                          | Request body parameters. Required for Visa and Plaid mobile sessions, not required for Plaid Web sessions.<br/> |