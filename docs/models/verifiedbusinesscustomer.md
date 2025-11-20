# VerifiedBusinessCustomer

Verified business customer (LLC, Corporation, Partnership) - distinguished from VerifiedSolePropCustomer by presence of a controller object

## Example Usage

```typescript
import { VerifiedBusinessCustomer } from "dwolla/models";

let value: VerifiedBusinessCustomer = {
  links: {},
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "business",
  status: "verified",
  address1: "123 Main Street",
  address2: "Ste 123",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
  phone: "555555555",
  website: "https://www.dwolla.com",
  businessName: "Jane Corp",
  doingBusinessAs: "Jane's Coffee and Sweets",
  businessType: "llc",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  controller: {
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `links`                                                                                          | Record<string, [models.HalLink](../models/hallink.md)>                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | c41125c5-99c4-4303-a9f6-d066d28a61e3                                                             |
| `firstName`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | Jane                                                                                             |
| `lastName`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | Doe                                                                                              |
| `email`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | janedoe@mail.com                                                                                 |
| `correlationId`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25                                                         |
| `created`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              | 2022-10-07T16:46:13.023Z                                                                         |
| `type`                                                                                           | [models.VerifiedBusinessCustomerType](../models/verifiedbusinesscustomertype.md)                 | :heavy_check_mark:                                                                               | N/A                                                                                              | business                                                                                         |
| `status`                                                                                         | [models.VerifiedBusinessCustomerStatus](../models/verifiedbusinesscustomerstatus.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              | verified                                                                                         |
| `address1`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 123 Main Street                                                                                  |
| `address2`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | Ste 123                                                                                          |
| `city`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | Des Moines                                                                                       |
| `state`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | IA                                                                                               |
| `postalCode`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 50309                                                                                            |
| `phone`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 555555555                                                                                        |
| `website`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | https://www.dwolla.com                                                                           |
| `businessName`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | Jane Corp                                                                                        |
| `doingBusinessAs`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | Jane's Coffee and Sweets                                                                         |
| `businessType`                                                                                   | [models.VerifiedBusinessCustomerBusinessType](../models/verifiedbusinesscustomerbusinesstype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              | llc                                                                                              |
| `businessClassification`                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 9ed3f670-7d6f-11e3-b1ce-5404a6144203                                                             |
| `controller`                                                                                     | [models.VerifiedBusinessCustomerController](../models/verifiedbusinesscustomercontroller.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |