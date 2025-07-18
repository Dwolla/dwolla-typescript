# Account

## Example Usage

```typescript
import { Account } from "dwolla/models";

let value: Account = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "2e21f010-3023-4891-aced-ed726d7cd5e1",
  name: "Self Employed",
  authorizedRep: "Jane Doe",
  timezoneOffset: -6,
  email: "janedoe@mail.com",
  phone: "5555552368",
  address: {
    address1: "462 Main Street",
    address2: "Suite 124",
    city: "Des Moines",
    postalCode: "50309",
    state: "IA",
  },
  verificationStatus: "Verified",
  ownershipStatus: "Exempt",
  ownershipCertificationStatus: "Exempt",
  type: "Commercial",
  created: new Date("2021-10-25T00:39:38.283Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2e21f010-3023-4891-aced-ed726d7cd5e1                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Self Employed                                                                                 |
| `authorizedRep`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Jane Doe                                                                                      |
| `timezoneOffset`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | -6                                                                                            |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | janedoe@mail.com                                                                              |
| `phone`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 5555552368                                                                                    |
| `address`                                                                                     | [models.Address](../models/address.md)                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `verificationStatus`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Verified                                                                                      |
| `ownershipStatus`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Exempt                                                                                        |
| `ownershipCertificationStatus`                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Exempt                                                                                        |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Commercial                                                                                    |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2021-10-25T00:39:38.283Z                                                                      |