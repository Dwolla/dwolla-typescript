# MassPayments

## Example Usage

```typescript
import { MassPayments } from "dwolla-typescript/models";

let value: MassPayments = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
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
  },
  total: 100,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `links`                                                          | Record<string, [models.HalLink](../models/hallink.md)>           | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `embedded`                                                       | [models.MassPaymentsEmbedded](../models/masspaymentsembedded.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `total`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 100                                                              |