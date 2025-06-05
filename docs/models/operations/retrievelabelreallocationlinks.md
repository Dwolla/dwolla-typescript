# RetrieveLabelReallocationLinks

## Example Usage

```typescript
import { RetrieveLabelReallocationLinks } from "dwolla-typescript/models/operations";

let value: RetrieveLabelReallocationLinks = {
  self: {
    href:
      "https://api.dwolla.com/label-reallocations/fd36b78c-42f3-4e21-8efb-09196fccbd21",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "label-reallocation",
  },
  toLedgerEntry: {
    href:
      "https://api.dwolla.com/ledger-entries/d8a4bf7a-3fa0-48b9-873c-765d7375c59f",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "ledger-entry",
  },
  fromLedgerEntry: {
    href:
      "https://api.dwolla.com/ledger-entries/f6a44994-b4da-48e3-bd10-d3a168e6a77d",
    type: "application/vnd.dwolla.v1.hal+json",
    resourceType: "ledger-entry",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `self`                                                                                               | [operations.RetrieveLabelReallocationSelf](../../models/operations/retrievelabelreallocationself.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `toLedgerEntry`                                                                                      | [operations.ToLedgerEntry](../../models/operations/toledgerentry.md)                                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `fromLedgerEntry`                                                                                    | [operations.FromLedgerEntry](../../models/operations/fromledgerentry.md)                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |