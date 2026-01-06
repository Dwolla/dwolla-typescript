# GetFundingSourceBalanceLinks2

## Example Usage

```typescript
import { GetFundingSourceBalanceLinks2 } from "dwolla/models/operations";

let value: GetFundingSourceBalanceLinks2 = {
  self: {
    href:
      "https://api.dwolla.com/funding-sources/12345678-1234-1234-1234-123456789012/balance",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "balance",
  },
  fundingSource: {
    href:
      "https://api.dwolla.com/funding-sources/12345678-1234-1234-1234-123456789012",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "funding-source",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.GetFundingSourceBalanceSelf2](../../models/operations/getfundingsourcebalanceself2.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `fundingSource`                                                                                    | [operations.FundingSource2](../../models/operations/fundingsource2.md)                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |