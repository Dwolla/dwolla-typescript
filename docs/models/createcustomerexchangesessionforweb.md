# CreateCustomerExchangeSessionForWeb

Create exchange session for web (MX and Plaid web sessions where redirect-url is not required)

## Example Usage

```typescript
import { CreateCustomerExchangeSessionForWeb } from "dwolla-typescript/models";

let value: CreateCustomerExchangeSessionForWeb = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                  | [models.CreateCustomerExchangeSessionForWebLinks](../models/createcustomerexchangesessionforweblinks.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |