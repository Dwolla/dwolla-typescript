# DwollaBalanceResponse

Response for retrieving balance of a Dwolla Balance funding source

## Example Usage

```typescript
import { DwollaBalanceResponse } from "dwolla/models/operations";

let value: DwollaBalanceResponse = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  balance: {
    value: "4616.87",
    currency: "USD",
  },
  total: {
    value: "4616.87",
    currency: "USD",
  },
  lastUpdated: "2017-04-18T15:20:25.880Z",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `links`                                                   | Record<string, [models.HalLink](../../models/hallink.md)> | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `balance`                                                 | [operations.Balance](../../models/operations/balance.md)  | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `total`                                                   | [operations.Total](../../models/operations/total.md)      | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `lastUpdated`                                             | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       | 2017-04-18T15:20:25.880Z                                  |