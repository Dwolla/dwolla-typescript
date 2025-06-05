# CreateBeneficialOwnerForCustomerRequest

## Example Usage

```typescript
import { CreateBeneficialOwnerForCustomerRequest } from "dwolla-typescript/models/operations";

let value: CreateBeneficialOwnerForCustomerRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Customer ID for which to create a Beneficial Owner       |
| `requestBody`                                            | *operations.CreateBeneficialOwnerForCustomerRequestBody* | :heavy_check_mark:                                       | Parameters for creating a beneficial owner               |