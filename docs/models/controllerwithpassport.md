# ControllerWithPassport

Controller object with Passport

## Example Usage

```typescript
import { ControllerWithPassport } from "dwolla-typescript";
import { RFCDate } from "dwolla-typescript/types";

let value: ControllerWithPassport = {
  firstName: "John",
  lastName: "Controller",
  title: "CEO",
  dateOfBirth: new RFCDate("1980-01-31"),
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `firstName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | John                                                             |
| `lastName`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | Controller                                                       |
| `title`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | CEO                                                              |
| `dateOfBirth`                                                    | [RFCDate](../types/rfcdate.md)                                   | :heavy_check_mark:                                               | N/A                                                              | 1980-01-31                                                       |
| `address`                                                        | [models.InternationalAddress](../models/internationaladdress.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `passport`                                                       | [models.Passport](../models/passport.md)                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |