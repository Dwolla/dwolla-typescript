# CreateBeneficialOwnerForCustomerRequest

## Example Usage

```typescript
import { CreateBeneficialOwnerForCustomerRequest } from "dwolla-typescript/models/operations";

let value: CreateBeneficialOwnerForCustomerRequest = {
  id: "<id>",
  requestBody: {
    firstName: "Corbin",
    lastName: "Cassin",
    dateOfBirth: "1953-03-19",
    address: {
      address1: "462 Main Street",
      address2: "Suite 123",
      address3: "Unit 123",
      city: "Des Moines",
      postalCode: "50309",
      country: "USA",
      stateProvinceRegion: "IA",
    },
    passport: {
      number: "<value>",
      country: "South Sudan",
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | Customer ID for which to create a Beneficial Owner       |
| `requestBody`                                            | *operations.CreateBeneficialOwnerForCustomerRequestBody* | :heavy_check_mark:                                       | Parameters for creating a beneficial owner               |