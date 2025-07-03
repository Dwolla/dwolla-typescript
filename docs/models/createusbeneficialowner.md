# CreateUSBeneficialOwner

Create a US Beneficial Owner (identified by SSN)

## Example Usage

```typescript
import { CreateUSBeneficialOwner } from "dwolla-typescript/models";

let value: CreateUSBeneficialOwner = {
  firstName: "Joe",
  lastName: "Deckow",
  dateOfBirth: "1991-04-28",
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