# CreateCustomerExchangeRequest

## Example Usage

```typescript
import { CreateCustomerExchangeRequest } from "dwolla-typescript/models/operations";

let value: CreateCustomerExchangeRequest = {
  id: "<id>",
  requestBody: {
    links: {
      exchangePartner: {
        href:
          "https://api.dwolla.com/exchange-partners/f53ffb32-c84f-496a-9d9d-acd100d396ef",
      },
    },
    plaid: {
      publicToken: "public-production-d5456acb-01d5-4932-9783-e4c883cf1c0c",
    },
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | The ID of the customer to create an exchange for |
| `requestBody`                                    | *operations.CreateCustomerExchangeRequestBody*   | :heavy_check_mark:                               | N/A                                              |