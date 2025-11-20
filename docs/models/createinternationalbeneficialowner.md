# CreateInternationalBeneficialOwner

Create an International Beneficial Owner (identified by Passport). For non-US beneficial owners who don't have a US SSN. Requires passport information for identity verification.

## Example Usage

```typescript
import { CreateInternationalBeneficialOwner } from "dwolla/models";

let value: CreateInternationalBeneficialOwner = {
  firstName: "Jane",
  lastName: "Smith",
  dateOfBirth: "1985-03-15",
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | Jane                                                             |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | Smith                                                            |
| `dateOfBirth`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | 1985-03-15                                                       |
| `address`                                                        | [models.InternationalAddress](../models/internationaladdress.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `passport`                                                       | [models.Passport](../models/passport.md)                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |