# ListAccountMassPaymentsRequest

## Example Usage

```typescript
import { ListAccountMassPaymentsRequest } from "dwolla-typescript/models/operations";

let value: ListAccountMassPaymentsRequest = {
  id: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `id`                         | *string*                     | :heavy_check_mark:           | Account ID                   |                              |
| `limit`                      | *number*                     | :heavy_minus_sign:           | How many results to return.  | 25                           |
| `offset`                     | *number*                     | :heavy_minus_sign:           | How many results to skip.    | 0                            |
| `correlationId`              | *string*                     | :heavy_minus_sign:           | Correlation ID to search by. |                              |