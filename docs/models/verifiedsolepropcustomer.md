# VerifiedSolePropCustomer

Shared models between all Customer types

## Example Usage

```typescript
import { VerifiedSolePropCustomer } from "dwolla/models";

let value: VerifiedSolePropCustomer = {
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
  businessName: "Jane Corp",
  businessType: "soleProprietorship",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
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
| `businessName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Jane Corp                                                                                     |
| `businessType`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | soleProprietorship                                                                            |
| `businessClassification`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 9ed3f670-7d6f-11e3-b1ce-5404a6144203                                                          |