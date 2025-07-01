# CreateCustomerExchangeSessionWithRedirectLinks

## Example Usage

```typescript
import { CreateCustomerExchangeSessionWithRedirectLinks } from "dwolla-typescript";

let value: CreateCustomerExchangeSessionWithRedirectLinks = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `exchangePartner`                                                                                                                        | [models.CreateCustomerExchangeSessionWithRedirectExchangePartner](../models/createcustomerexchangesessionwithredirectexchangepartner.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `redirectUrl`                                                                                                                            | [models.CreateCustomerExchangeSessionWithRedirectRedirectUrl](../models/createcustomerexchangesessionwithredirectredirecturl.md)         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |