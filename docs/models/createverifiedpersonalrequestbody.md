# CreateVerifiedPersonalRequestBody

Create a Verified Personal customer

## Example Usage

```typescript
import { CreateVerifiedPersonalRequestBody } from "dwolla-typescript";

let value: CreateVerifiedPersonalRequestBody = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp llc",
  type: "personal",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  ssn: "1234",
  dateOfBirth: "1980-09-12",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `firstName`                         | *string*                            | :heavy_check_mark:                  | N/A                                 | Account                             |
| `lastName`                          | *string*                            | :heavy_check_mark:                  | N/A                                 | Admin                               |
| `email`                             | *string*                            | :heavy_check_mark:                  | N/A                                 | accountAdmin@email.com              |
| `ipAddress`                         | *string*                            | :heavy_minus_sign:                  | N/A                                 | 143.156.7.8                         |
| `phone`                             | *string*                            | :heavy_minus_sign:                  | N/A                                 | 5555555555                          |
| `correlationId`                     | *string*                            | :heavy_minus_sign:                  | N/A                                 | fc451a7a-ae30-4404-aB95-e3553fcd733 |
| `businessName`                      | *string*                            | :heavy_minus_sign:                  | N/A                                 | Jane Corp llc                       |
| `type`                              | *string*                            | :heavy_check_mark:                  | N/A                                 | personal                            |
| `address1`                          | *string*                            | :heavy_check_mark:                  | N/A                                 | 99-99 33rd St                       |
| `address2`                          | *string*                            | :heavy_minus_sign:                  | N/A                                 | 99-99 33rd St                       |
| `city`                              | *string*                            | :heavy_check_mark:                  | N/A                                 | Some City                           |
| `state`                             | *string*                            | :heavy_check_mark:                  | N/A                                 | NY                                  |
| `postalCode`                        | *string*                            | :heavy_check_mark:                  | N/A                                 | 11101                               |
| `ssn`                               | *string*                            | :heavy_check_mark:                  | N/A                                 | 1234                                |
| `dateOfBirth`                       | *string*                            | :heavy_check_mark:                  | N/A                                 | 1980-09-12                          |