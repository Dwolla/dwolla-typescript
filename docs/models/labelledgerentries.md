# LabelLedgerEntries

## Example Usage

```typescript
import { LabelLedgerEntries } from "dwolla-typescript";

let value: LabelLedgerEntries = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    ledgerEntries: [
      {
        links: {
          "key": {
            href: "https://api.dwolla.com",
            type: "application/vnd.dwolla.v1.hal+json",
            resourceType: "resource-type",
          },
        },
        id: "32d68709-62dd-43d6-a6df-562f4baec526",
        amount: {
          value: "-5",
          currency: "USD",
        },
        created: new Date("2019-05-16T01:54:58.062Z"),
      },
    ],
  },
  total: 100,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `links`                                                                      | Record<string, [models.HalLink](../models/hallink.md)>                       | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `embedded`                                                                   | [models.LabelLedgerEntriesEmbedded](../models/labelledgerentriesembedded.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `total`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | 100                                                                          |