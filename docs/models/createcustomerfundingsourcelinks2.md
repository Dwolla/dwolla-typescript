# CreateCustomerFundingSourceLinks2

## Example Usage

```typescript
import { CreateCustomerFundingSourceLinks2 } from "dwolla-typescript";

let value: CreateCustomerFundingSourceLinks2 = {
  exchange: {
    href:
      "https://api-sandbox.dwolla.com/exchanges/6bc9109a-04fd-49b6-ace6-ca06fd282d65",
  },
  onDemandAuthorization: {
    href:
      "https://api-sandbox.dwolla.com/on-demand-authorizations/30e7c028-0bdf-e511-80de-0aa34a9b2388",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `exchange`                                                                                                                 | [models.CreateCustomerFundingSourceExchange](../models/createcustomerfundingsourceexchange.md)                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `onDemandAuthorization`                                                                                                    | [models.CreateCustomerFundingSourceOnDemandAuthorization2](../models/createcustomerfundingsourceondemandauthorization2.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |