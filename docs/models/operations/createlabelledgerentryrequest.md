# CreateLabelLedgerEntryRequest

## Example Usage

```typescript
import { CreateLabelLedgerEntryRequest } from "dwolla-typescript/models/operations";

let value: CreateLabelLedgerEntryRequest = {
  id: "<id>",
  requestBody: {
    amount: {},
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | A label unique identifier                                                                                    |
| `requestBody`                                                                                                | [operations.CreateLabelLedgerEntryRequestBody](../../models/operations/createlabelledgerentryrequestbody.md) | :heavy_check_mark:                                                                                           | Parameters to create label ledger entry                                                                      |