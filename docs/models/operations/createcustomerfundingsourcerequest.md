# CreateCustomerFundingSourceRequest

## Example Usage

```typescript
import { CreateCustomerFundingSourceRequest } from "dwolla-typescript/models/operations";

let value: CreateCustomerFundingSourceRequest = {
  id: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Customer's unique identifier              |
| `createCustomerFundingSource`             | *models.CreateCustomerFundingSourceUnion* | :heavy_check_mark:                        | Parameters for creating a funding source  |