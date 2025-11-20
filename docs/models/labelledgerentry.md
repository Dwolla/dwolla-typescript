# LabelLedgerEntry

## Example Usage

```typescript
import { LabelLedgerEntry } from "dwolla/models";

let value: LabelLedgerEntry = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "32d68709-62dd-43d6-a6df-562f4baec526",
  amount: {
    value: "-5.00",
    currency: "USD",
  },
  created: new Date("2019-05-16T01:54:58.062Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 32d68709-62dd-43d6-a6df-562f4baec526                                                          |
| `amount`                                                                                      | [models.LabelLedgerEntryAmount](../models/labelledgerentryamount.md)                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2019-05-16T01:54:58.062Z                                                                      |