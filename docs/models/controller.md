# Controller

Controller JSON Object for Customer responses

## Example Usage

```typescript
import { Controller } from "dwolla-typescript";

let value: Controller = {
  firstName: "John",
  lastName: "Controller",
  title: "CEO",
  address: {
    address1: "462 Main Street",
    address2: "Suite 123",
    address3: "Unit 123",
    city: "Des Moines",
    postalCode: "50309",
    country: "USA",
    stateProvinceRegion: "IA",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `firstName`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | John                                                       |
| `lastName`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | Controller                                                 |
| `title`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | CEO                                                        |
| `address`                                                  | [models.ControllerAddress](../models/controlleraddress.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |