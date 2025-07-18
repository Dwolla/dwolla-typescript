# ListMassPaymentsRequest

## Example Usage

```typescript
import { ListMassPaymentsRequest } from "dwolla/models/operations";

let value: ListMassPaymentsRequest = {
  id: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_check_mark:                  | Account's unique identifier         |                                     |
| `limit`                             | *number*                            | :heavy_minus_sign:                  | Maximum number of results to return | 25                                  |
| `offset`                            | *number*                            | :heavy_minus_sign:                  | How many results to skip.           | 0                                   |
| `correlationId`                     | *string*                            | :heavy_minus_sign:                  | Correlation ID to search by.        |                                     |