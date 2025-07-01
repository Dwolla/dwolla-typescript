# CreateInternationalBeneficialOwner

Create an International Beneficial Owner (identified by Passport)

## Example Usage

```typescript
import { CreateInternationalBeneficialOwner } from "dwolla-typescript";

let value: CreateInternationalBeneficialOwner = {
  firstName: "Josie",
  lastName: "Watsica",
  dateOfBirth: "1988-10-24",
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `dateOfBirth`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `address`                                                        | [models.InternationalAddress](../models/internationaladdress.md) | :heavy_check_mark:                                               | N/A                                                              |
| `passport`                                                       | [models.Passport](../models/passport.md)                         | :heavy_check_mark:                                               | N/A                                                              |