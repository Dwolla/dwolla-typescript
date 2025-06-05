# GetFundingSourceBalanceLinks

## Example Usage

```typescript
import { GetFundingSourceBalanceLinks } from "dwolla-typescript/models/operations";

let value: GetFundingSourceBalanceLinks = {
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `self`                                                                                           | [operations.GetFundingSourceBalanceSelf](../../models/operations/getfundingsourcebalanceself.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `fundingSource`                                                                                  | [operations.FundingSource](../../models/operations/fundingsource.md)                             | :heavy_minus_sign:                                                                               | N/A                                                                                              |