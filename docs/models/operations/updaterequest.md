# UpdateRequest

## Example Usage

```typescript
import { UpdateRequest } from "dwolla/models/operations";

let value: UpdateRequest = {
  id: "<id>",
  requestBody: {
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    address1: "123 Main Street",
    address2: "XYZ Suite",
    city: "Des Moines",
    state: "IA",
    postalCode: "50309",
    phone: "5555555555",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | Customer unique identifier         |
| `requestBody`                      | *any*                              | :heavy_check_mark:                 | Parameters for updating a Customer |