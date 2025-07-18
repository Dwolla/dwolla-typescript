# Item

## Example Usage

```typescript
import { Item } from "dwolla/models/operations";

let value: Item = {
  links: {
    destination: {
      href:
        "https://api.dwolla.com/funding-sources/9c7f8d57-cd45-4e7a-bf7a-914dbd6131db",
    },
  },
  amount: {
    value: "5.00",
    currency: "USD",
  },
  processingChannel: {
    destination: "real-time-payments",
  },
  clearing: {
    destination: "next-available",
  },
  achDetails: {
    destination: {
      addenda: {
        values: [
          "XYZ987_AddendaValue",
        ],
      },
    },
  },
  correlationId: "ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `links`                                                                                                            | [operations.ItemLinks](../../models/operations/itemlinks.md)                                                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `amount`                                                                                                           | [models.TransferAmount](../../models/transferamount.md)                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `processingChannel`                                                                                                | [operations.InitiateMassPaymentProcessingChannel](../../models/operations/initiatemasspaymentprocessingchannel.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `metadata`                                                                                                         | [operations.ItemMetadata](../../models/operations/itemmetadata.md)                                                 | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `clearing`                                                                                                         | [operations.ItemClearing](../../models/operations/itemclearing.md)                                                 | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `achDetails`                                                                                                       | [operations.ItemAchDetails](../../models/operations/itemachdetails.md)                                             | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `correlationId`                                                                                                    | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | ad6ca82d-59f7-45f0-a8d2-94c2cd4e8841                                                                               |