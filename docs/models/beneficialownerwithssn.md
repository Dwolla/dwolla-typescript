# BeneficialOwnerWithSsn

Request body for creating and updating a Beneficial Owner with an SSN

## Example Usage

```typescript
import { BeneficialOwnerWithSsn } from "dwolla-typescript";

let value: BeneficialOwnerWithSsn = {
  firstName: "Jalon",
  lastName: "Reichel",
  dateOfBirth: "1958-05-16",
  address: {
    address1: "462 Main Street",
    address2: "Suite 123",
    address3: "Unit 123",
    city: "Des Moines",
    postalCode: "50309",
    country: "USA",
    stateProvinceRegion: "IA",
  },
  ssn: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `dateOfBirth`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `address`                                                        | [models.InternationalAddress](../models/internationaladdress.md) | :heavy_check_mark:                                               | N/A                                                              |
| `ssn`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |