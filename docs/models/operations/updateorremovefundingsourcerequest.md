# UpdateOrRemoveFundingSourceRequest

## Example Usage

```typescript
import { UpdateOrRemoveFundingSourceRequest } from "dwolla-typescript/models/operations";

let value: UpdateOrRemoveFundingSourceRequest = {
  id: "<id>",
  requestBody: {
    routingNumber: "222222226",
    accountNumber: "123456789",
    bankAccountType: "checking",
    name: "Jane Doe’s Checking",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | Funding source unique identifier                    |
| `requestBody`                                       | *operations.UpdateOrRemoveFundingSourceRequestBody* | :heavy_check_mark:                                  | Parameters to update a customer funding source      |