# CreateCustomerExchangeSessionRequest

## Example Usage

```typescript
import { CreateCustomerExchangeSessionRequest } from "dwolla-typescript/models/operations";

let value: CreateCustomerExchangeSessionRequest = {
  id: "<id>",
  createCustomerExchangeSession: {
    links: {
      exchangePartner: {
        href:
          "https://api.dwolla.com/exchange-partners/292317ec-e252-47d8-93c3-2d128e037aa4",
      },
    },
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Customer's unique identifier                |
| `createCustomerExchangeSession`             | *models.CreateCustomerExchangeSessionUnion* | :heavy_check_mark:                          | Parameters for creating an exchange session |