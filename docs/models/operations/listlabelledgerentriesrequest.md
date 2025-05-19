# ListLabelLedgerEntriesRequest

## Example Usage

```typescript
import { ListLabelLedgerEntriesRequest } from "dwolla-typescript/models/operations";

let value: ListLabelLedgerEntriesRequest = {
  id: "<id>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `id`                       | *string*                   | :heavy_check_mark:         | A label unique identifier  |
| `limit`                    | *string*                   | :heavy_minus_sign:         | How many results to return |
| `offset`                   | *string*                   | :heavy_minus_sign:         | How many results to skip   |