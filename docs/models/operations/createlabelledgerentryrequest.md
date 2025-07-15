# CreateLabelLedgerEntryRequest

## Example Usage

```typescript
import { CreateLabelLedgerEntryRequest } from "dwolla-typescript/models/operations";

let value: CreateLabelLedgerEntryRequest = {
  id: "<id>",
  requestBody: {
    amount: {
      value: "-5.00",
      currency: "USD",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The Id of the Label to update.                                                                               |
| `requestBody`                                                                                                | [operations.CreateLabelLedgerEntryRequestBody](../../models/operations/createlabelledgerentryrequestbody.md) | :heavy_check_mark:                                                                                           | Parameters to create a label ledger entry                                                                    |