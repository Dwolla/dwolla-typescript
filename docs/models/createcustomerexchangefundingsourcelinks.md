# CreateCustomerExchangeFundingSourceLinks

## Example Usage

```typescript
import { CreateCustomerExchangeFundingSourceLinks } from "dwolla-typescript";

let value: CreateCustomerExchangeFundingSourceLinks = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `exchange`                                                                                                                               | [models.CreateCustomerExchangeFundingSourceExchange](../models/createcustomerexchangefundingsourceexchange.md)                           | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `onDemandAuthorization`                                                                                                                  | [models.CreateCustomerExchangeFundingSourceOnDemandAuthorization](../models/createcustomerexchangefundingsourceondemandauthorization.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |