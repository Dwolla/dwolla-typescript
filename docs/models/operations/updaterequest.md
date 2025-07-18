# UpdateRequest

## Example Usage

```typescript
import { UpdateRequest } from "dwolla/models/operations";

let value: UpdateRequest = {
  id: "<id>",
  requestBody: {
    firstName: "John",
    lastName: "Doe",
    email: "accountAdmin@email.com",
    businessName: "Jane Corp",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | Customer unique identifier         |
| `requestBody`                      | *operations.UpdateRequestBody*     | :heavy_check_mark:                 | Parameters for updating a Customer |