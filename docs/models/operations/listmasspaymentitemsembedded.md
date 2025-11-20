# ListMassPaymentItemsEmbedded

## Example Usage

```typescript
import { ListMassPaymentItemsEmbedded } from "dwolla/models/operations";

let value: ListMassPaymentItemsEmbedded = {
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
        value: "1.00",
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
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.MassPaymentItem](../../models/masspaymentitem.md)[] | :heavy_minus_sign:                                          | N/A                                                         |