# UnverifiedCustomer

Unverified customer - basic customer type with no KYC verification

## Example Usage

```typescript
import { UnverifiedCustomer } from "dwolla/models";

let value: UnverifiedCustomer = {
  links: {},
  id: "c41125c5-99c4-4303-a9f6-d066d28a61e3",
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@mail.com",
  correlationId: "CID-abe2bb3d-d2ff-433b-95a3-0debd960ed25",
  created: new Date("2022-10-07T16:46:13.023Z"),
  type: "unverified",
  status: "unverified",
  businessName: "Jane Corp llc",
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
| `type`                                                                                        | [models.UnverifiedCustomerType](../models/unverifiedcustomertype.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           | unverified                                                                                    |
| `status`                                                                                      | [models.UnverifiedCustomerStatus](../models/unverifiedcustomerstatus.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           | unverified                                                                                    |
| `businessName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Jane Corp llc                                                                                 |