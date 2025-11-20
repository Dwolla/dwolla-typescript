# VerifiedPersonalCustomer

Verified personal customer - fully KYC verified individual with send and receive capabilities

## Example Usage

```typescript
import { VerifiedPersonalCustomer } from "dwolla/models";

let value: VerifiedPersonalCustomer = {
  links: {},
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "personal",
  status: "verified",
  address1: "123 Main Street",
  address2: "Ste 123",
  city: "Des Moines",
  state: "IA",
  postalCode: "50309",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | c41125c5-99c4-4303-a9f6-d066d28a61e3                                                          |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Jane                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Doe                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | janedoe@mail.com                                                                              |
| `correlationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25                                                      |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2022-10-07T16:46:13.023Z                                                                      |
| `type`                                                                                        | [models.VerifiedPersonalCustomerType](../models/verifiedpersonalcustomertype.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           | personal                                                                                      |
| `status`                                                                                      | [models.VerifiedPersonalCustomerStatus](../models/verifiedpersonalcustomerstatus.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           | verified                                                                                      |
| `address1`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 123 Main Street                                                                               |
| `address2`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Ste 123                                                                                       |
| `city`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Des Moines                                                                                    |
| `state`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | IA                                                                                            |
| `postalCode`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 50309                                                                                         |