# UpdateOrRemoveFundingSourceRequest

## Example Usage

```typescript
import { UpdateOrRemoveFundingSourceRequest } from "dwolla/models/operations";

let value: UpdateOrRemoveFundingSourceRequest = {
  id: "<id>",
  requestBody: {
    removed: true,
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | Funding source unique identifier                    |
| `requestBody`                                       | *operations.UpdateOrRemoveFundingSourceRequestBody* | :heavy_check_mark:                                  | Parameters to update a customer funding source      |