# CreateBeneficialOwnerForCustomerRequest

## Example Usage

```typescript
import { CreateBeneficialOwnerForCustomerRequest } from "dwolla/models/operations";

let value: CreateBeneficialOwnerForCustomerRequest = {
  id: "<id>",
  requestBody: {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1980-01-31",
    address: {
      address1: "462 Main Street",
      address2: "Suite 123",
      address3: "Unit 123",
      city: "Des Moines",
      postalCode: "50309",
      country: "USA",
      stateProvinceRegion: "IA",
    },
    ssn: "123456789",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Customer ID for which to create a Beneficial Owner       |
| `requestBody`                                            | *operations.CreateBeneficialOwnerForCustomerRequestBody* | :heavy_check_mark:                                       | Parameters for creating a beneficial owner               |