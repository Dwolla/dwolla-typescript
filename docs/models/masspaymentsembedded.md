# MassPaymentsEmbedded

## Example Usage

```typescript
import { MassPaymentsEmbedded } from "dwolla-typescript";

let value: MassPaymentsEmbedded = {
  massPayments: [
    {
      links: {
        "key": {
          href: "https://api.dwolla.com",
          type: "application/vnd.dwolla.v1.hal+json",
          resourceType: "resource-type",
        },
      },
      id: "11ac4051-7b76-44fc-87ab-ae23012393f0",
      status: "complete",
      created: new Date("2022-01-20T17:41:41.000Z"),
      total: {
        value: "5.00",
        currency: "USD",
      },
      totalFees: {
        value: "5.00",
        currency: "USD",
      },
      correlationId: "CID-8a2cdc8d-629d-4a24-98ac-40b735229fe2",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `massPayments`                                   | [models.MassPayment](../models/masspayment.md)[] | :heavy_minus_sign:                               | N/A                                              |