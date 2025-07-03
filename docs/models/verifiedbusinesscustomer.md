# VerifiedBusinessCustomer

Shared models between all Customer types

## Example Usage

```typescript
import { VerifiedBusinessCustomer } from "dwolla-typescript/models";

let value: VerifiedBusinessCustomer = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  type: "business",
  status: "verified",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | c41125c5-99c4-4303-a9f6-d066d28a61e3                                                          |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Jane                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Doe                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | janedoe@mail.com                                                                              |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | business                                                                                      |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | verified                                                                                      |
| `correlationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25                                                      |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2022-10-07T16:46:13.023Z                                                                      |
| `address1`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 123 Main Street                                                                               |
| `address2`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Ste 123                                                                                       |
| `city`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Des Moines                                                                                    |
| `state`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | IA                                                                                            |
| `postalCode`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 50309                                                                                         |
| `phone`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 555555555                                                                                     |
| `website`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | https://www.dwolla.com                                                                        |
| `businessName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Jane Corp                                                                                     |
| `doingBusinessAs`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Jane's Coffee and Sweets                                                                      |
| `businessType`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | llc                                                                                           |
| `businessClassification`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 9ed3f670-7d6f-11e3-b1ce-5404a6144203                                                          |
| `controller`                                                                                  | [models.VerifiedBusinessCustomerController](../models/verifiedbusinesscustomercontroller.md)  | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |