# CreateUSBeneficialOwner

Create a US Beneficial Owner (identified by SSN). For US-based beneficial owners only. Use SSN for identity verification instead of passport.

## Example Usage

```typescript
import { CreateUSBeneficialOwner } from "dwolla/models";

let value: CreateUSBeneficialOwner = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | John                                                             |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | Doe                                                              |
| `dateOfBirth`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | 1980-01-31                                                       |
| `address`                                                        | [models.InternationalAddress](../models/internationaladdress.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `ssn`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | 123456789                                                        |