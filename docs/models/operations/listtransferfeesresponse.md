# ListTransferFeesResponse

successful operation

## Example Usage

```typescript
import { ListTransferFeesResponse } from "dwolla-typescript/models/operations";

let value: ListTransferFeesResponse = {
  transactions: [
    {
      links: {
        "key": {
          href: "https://api.dwolla.com",
          type: "application/vnd.dwolla.v1.hal+json",
          resourceType: "resource-type",
        },
      },
      id: "416a2857-c887-4cca-bd02-8c3f75c4bb0e",
      status: "pending",
      amount: {
        value: "2.00",
        currency: "USD",
      },
      created: new Date("2016-02-22T20:46:38.777Z"),
    },
  ],
  total: "1",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `transactions`                                                     | [operations.Transaction](../../models/operations/transaction.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `total`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | 1                                                                  |