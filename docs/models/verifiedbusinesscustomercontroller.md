# VerifiedBusinessCustomerController

## Example Usage

```typescript
import { VerifiedBusinessCustomerController } from "dwolla/models";

let value: VerifiedBusinessCustomerController = {
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

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `firstName`                            | *string*                               | :heavy_check_mark:                     | N/A                                    | John                                   |
| `lastName`                             | *string*                               | :heavy_check_mark:                     | N/A                                    | Controller                             |
| `title`                                | *string*                               | :heavy_check_mark:                     | N/A                                    | CEO                                    |
| `address`                              | [models.Address](../models/address.md) | :heavy_check_mark:                     | N/A                                    |                                        |