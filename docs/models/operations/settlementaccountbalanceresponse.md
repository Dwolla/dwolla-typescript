# SettlementAccountBalanceResponse

Response for retrieving balance of a settlement account with bankUsageType = card-network

## Example Usage

```typescript
import { SettlementAccountBalanceResponse } from "dwolla/models/operations";

let value: SettlementAccountBalanceResponse = {
  links: {
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
  },
  available: {
    value: "3209.55",
    currency: "USD",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `links`                                                                                              | [operations.GetFundingSourceBalanceLinks2](../../models/operations/getfundingsourcebalancelinks2.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `available`                                                                                          | [operations.Available2](../../models/operations/available2.md)                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |