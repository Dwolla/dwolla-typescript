# UpdateBeneficialOwnerRequest

## Example Usage

```typescript
import { UpdateBeneficialOwnerRequest } from "dwolla/models/operations";

let value: UpdateBeneficialOwnerRequest = {
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

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `id`                                          | *string*                                      | :heavy_check_mark:                            | Beneficial owner unique identifier            |
| `requestBody`                                 | *operations.UpdateBeneficialOwnerRequestBody* | :heavy_check_mark:                            | Parameters for updating a beneficial owner    |