# BeneficialOwnerWithPassport

Request body for creating and updating a Beneficial Owner with a Passport

## Example Usage

```typescript
import { BeneficialOwnerWithPassport } from "dwolla-typescript";

let value: BeneficialOwnerWithPassport = {
  firstName: "Therese",
  lastName: "Nitzsche",
  dateOfBirth: "1983-08-02",
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
    country: "Portugal",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `dateOfBirth`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `address`                                                        | [models.InternationalAddress](../models/internationaladdress.md) | :heavy_check_mark:                                               | N/A                                                              |
| `passport`                                                       | [models.Passport](../models/passport.md)                         | :heavy_check_mark:                                               | N/A                                                              |