# LabelLedgerEntriesEmbedded

## Example Usage

```typescript
import { LabelLedgerEntriesEmbedded } from "dwolla/models";

let value: LabelLedgerEntriesEmbedded = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `ledgerEntries`                                            | [models.LabelLedgerEntry](../models/labelledgerentry.md)[] | :heavy_minus_sign:                                         | N/A                                                        |