# UpdateRequest

## Example Usage

```typescript
import { UpdateRequest } from "dwolla-typescript/models/operations";

let value: UpdateRequest = {
  id: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | Customer unique identifier         |
| `requestBody`                      | *operations.UpdateRequestBody*     | :heavy_check_mark:                 | Parameters for updating a Customer |