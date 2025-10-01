# UpgradeToVerifiedBusinessController

## Example Usage

```typescript
import { UpgradeToVerifiedBusinessController } from "dwolla/models";

let value: UpgradeToVerifiedBusinessController = {
  firstName: "John",
  lastName: "Controller",
  title: "CEO",
  ssn: "6789",
  dateOfBirth: "1980-01-31",
  address: {
    address1: "1749 18th st",
    address2: "apt 12",
    city: "Des Moines",
    stateProvinceRegion: "IA",
    postalCode: "50266",
    country: "US",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `firstName`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | John                                                                                     |
| `lastName`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | Controller                                                                               |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | CEO                                                                                      |
| `ssn`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 6789                                                                                     |
| `dateOfBirth`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 1980-01-31                                                                               |
| `address`                                                                                | [models.UpgradeToVerifiedBusinessAddress](../models/upgradetoverifiedbusinessaddress.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |