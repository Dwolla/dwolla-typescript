# UpdateAlertRequest

## Example Usage

```typescript
import { UpdateAlertRequest } from "dwolla/models/operations";

let value: UpdateAlertRequest = {
  id: "d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42",
  updateAlert: {
    status: "resolved",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The alert's unique identifier.                    | d4bd3a1e-7c6e-4e8a-9a5c-3b2f9d7e1a42              |
| `updateAlert`                                     | [models.UpdateAlert](../../models/updatealert.md) | :heavy_check_mark:                                | Parameters to resolve an alert                    |                                                   |