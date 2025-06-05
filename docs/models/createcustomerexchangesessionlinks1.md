# CreateCustomerExchangeSessionLinks1

## Example Usage

```typescript
import { CreateCustomerExchangeSessionLinks1 } from "dwolla-typescript";

let value: CreateCustomerExchangeSessionLinks1 = {
  exchangePartner: {
    href:
      "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
  },
  redirectUrl: {
    href:
      "{\"description\":\"Visa example\",\"value\":\"https://www.yourdomain.com/iav-callback\"}",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `exchangePartner`                                                                                                  | [models.CreateCustomerExchangeSessionExchangePartner1](../models/createcustomerexchangesessionexchangepartner1.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `redirectUrl`                                                                                                      | [models.CreateCustomerExchangeSessionRedirectUrl](../models/createcustomerexchangesessionredirecturl.md)           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |