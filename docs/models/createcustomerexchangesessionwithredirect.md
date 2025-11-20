# CreateCustomerExchangeSessionWithRedirect

Create exchange session with redirect URL (required for mobile sessions with Plaid)

## Example Usage

```typescript
import { CreateCustomerExchangeSessionWithRedirect } from "dwolla/models";

let value: CreateCustomerExchangeSessionWithRedirect = {
  links: {
    exchangePartner: {
      href:
        "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
    },
    redirectUrl: {
      href: "https://example.com/app123",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                              | [models.CreateCustomerExchangeSessionWithRedirectLinks](../models/createcustomerexchangesessionwithredirectlinks.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |