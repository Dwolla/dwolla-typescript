# CreateCustomerExchangeSession2

For MX and Plaid web sessions where redirect-url is not required

## Example Usage

```typescript
import { CreateCustomerExchangeSession2 } from "dwolla-typescript";

let value: CreateCustomerExchangeSession2 = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `links`                                                                                        | [models.CreateCustomerExchangeSessionLinks2](../models/createcustomerexchangesessionlinks2.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |