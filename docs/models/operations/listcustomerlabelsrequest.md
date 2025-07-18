# ListCustomerLabelsRequest

## Example Usage

```typescript
import { ListCustomerLabelsRequest } from "dwolla/models/operations";

let value: ListCustomerLabelsRequest = {
  id: "<id>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `id`                       | *string*                   | :heavy_check_mark:         | ID of customer             |
| `limit`                    | *string*                   | :heavy_minus_sign:         | How many results to return |
| `offset`                   | *string*                   | :heavy_minus_sign:         | How many results to skip   |