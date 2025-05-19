# UpdateRequest

## Example Usage

```typescript
import { UpdateRequest } from "dwolla-typescript/models/operations";
import { RFCDate } from "dwolla-typescript/types";

let value: UpdateRequest = {
  id: "<id>",
  requestBody: {
    firstName: "Account",
    lastName: "Admin",
    email: "accountAdmin@email.com",
    ipAddress: "143.156.7.8",
    type: "business",
    address1: "99-99 33rd St",
    city: "Some City",
    state: "NY",
    postalCode: "11101",
    controller: {
      firstName: "John",
      lastName: "Controller",
      title: "CEO",
      ssn: "6789",
      dateOfBirth: new RFCDate("1980-01-31"),
      address: {
        address1: "1749 18th st",
        address2: "apt 12",
        city: "Des Moines",
        stateProvinceRegion: "IA",
        postalCode: "50266",
        country: "US",
      },
    },
    businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
    businessType: "llc",
    businessName: "Jane Corp",
    ein: "00-0000000",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | Customer unique identifier         |
| `requestBody`                      | *operations.UpdateRequestBody*     | :heavy_check_mark:                 | Parameters for updating a Customer |