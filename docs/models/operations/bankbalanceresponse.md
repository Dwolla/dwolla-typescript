# BankBalanceResponse

Response for retrieving balance of a bank account verified through Open Banking

## Example Usage

```typescript
import { BankBalanceResponse } from "dwolla/models/operations";

let value: BankBalanceResponse = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/funding-sources/42f48a64-2a9b-40df-9777-603ed2fe2764/balance",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "balance",
    },
    fundingSource: {
      href:
        "https://api.dwolla.com/funding-sources/42f48a64-2a9b-40df-9777-603ed2fe2764",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "funding-source",
    },
  },
  available: {
    value: "542.00",
    currency: "USD",
  },
  closing: {
    value: "542.00",
    currency: "USD",
  },
  lastUpdated: "2024-09-09T16:39:14.219Z",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `links`                                                                                            | [operations.GetFundingSourceBalanceLinks](../../models/operations/getfundingsourcebalancelinks.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `available`                                                                                        | [operations.Available](../../models/operations/available.md)                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `closing`                                                                                          | [operations.Closing](../../models/operations/closing.md)                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `lastUpdated`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 2024-09-09T16:39:14.219Z                                                                           |