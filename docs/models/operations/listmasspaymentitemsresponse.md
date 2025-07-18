# ListMassPaymentItemsResponse

successful operation

## Example Usage

```typescript
import { ListMassPaymentItemsResponse } from "dwolla/models/operations";

let value: ListMassPaymentItemsResponse = {
  links: {
    self: {
      href:
        "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563/items",
    },
    first: {
      href:
        "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563/items?limit=25&offset=0",
    },
    last: {
      href:
        "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563/items?limit=25&offset=0",
    },
  },
  embedded: {
    items: [
      {
        links: {
          self: {
            href:
              "https://api.dwolla.com/mass-payment-items/c1c7d293-63ec-e511-80df-0aa34a9b2388",
          },
          massPayment: {
            href:
              "https://api.dwolla.com/mass-payments/eb467252-808c-4bc0-b86f-a5cd01454563",
          },
          destination: {
            href:
              "https://api.dwolla.com/funding-sources/b442c936-1f87-465d-a4e2-a982164b26bd",
          },
          transfer: {
            href:
              "https://api.dwolla.com/transfers/fa3999db-41ed-e511-80df-0aa34a9b2388",
          },
        },
        id: "2f845bc9-41ed-e511-80df-0aa34a9b2388",
        status: "success",
        amount: {
          value: "1",
          currency: "USD",
        },
        metadata: {
          item1: "item1",
        },
        processingChannel: {
          destination: "real-time-payments",
        },
      },
    ],
  },
  total: 3,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `links`                                                                                            | [operations.ListMassPaymentItemsLinks](../../models/operations/listmasspaymentitemslinks.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `embedded`                                                                                         | [operations.ListMassPaymentItemsEmbedded](../../models/operations/listmasspaymentitemsembedded.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `total`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 3                                                                                                  |