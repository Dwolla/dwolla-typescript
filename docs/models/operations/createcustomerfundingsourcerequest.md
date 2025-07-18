# CreateCustomerFundingSourceRequest

## Example Usage

```typescript
import { CreateCustomerFundingSourceRequest } from "dwolla/models/operations";

let value: CreateCustomerFundingSourceRequest = {
  id: "<id>",
  createCustomerFundingSource: {
    name: "My First VAN",
    type: "virtual",
    bankAccountType: "checking",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | Customer's unique identifier             |
| `createCustomerFundingSource`            | *models.CreateCustomerFundingSource*     | :heavy_check_mark:                       | Parameters for creating a funding source |