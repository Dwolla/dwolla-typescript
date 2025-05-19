# CreateCustomerExchangeSession1

## Example Usage

```typescript
import { CreateCustomerExchangeSession1 } from "dwolla-typescript";

let value: CreateCustomerExchangeSession1 = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
    redirectUrl: {
      href:
        "{\"description\":\"Plaid iOS example\",\"value\":\"https://example.com/app123\"}",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `links`                                                                                        | [models.CreateCustomerExchangeSessionLinks1](../models/createcustomerexchangesessionlinks1.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |