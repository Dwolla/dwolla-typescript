# CreateLabelLedgerEntryRequestBody

Parameters to create a label ledger entry

## Example Usage

```typescript
import { CreateLabelLedgerEntryRequestBody } from "dwolla/models/operations";

let value: CreateLabelLedgerEntryRequestBody = {
  amount: {
    value: "-5.00",
    currency: "USD",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `amount`                                                                                           | [operations.CreateLabelLedgerEntryAmount](../../models/operations/createlabelledgerentryamount.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |