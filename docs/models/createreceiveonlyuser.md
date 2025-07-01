# CreateReceiveOnlyUser

Create a Receive Only User

## Example Usage

```typescript
import { CreateReceiveOnlyUser } from "dwolla-typescript";

let value: CreateReceiveOnlyUser = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp llc",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `firstName`                         | *string*                            | :heavy_check_mark:                  | N/A                                 | Account                             |
| `lastName`                          | *string*                            | :heavy_check_mark:                  | N/A                                 | Admin                               |
| `email`                             | *string*                            | :heavy_check_mark:                  | N/A                                 | accountAdmin@email.com              |
| `type`                              | *string*                            | :heavy_check_mark:                  | N/A                                 |                                     |
| `ipAddress`                         | *string*                            | :heavy_minus_sign:                  | N/A                                 | 143.156.7.8                         |
| `phone`                             | *string*                            | :heavy_minus_sign:                  | N/A                                 | 5555555555                          |
| `correlationId`                     | *string*                            | :heavy_minus_sign:                  | N/A                                 | fc451a7a-ae30-4404-aB95-e3553fcd733 |
| `businessName`                      | *string*                            | :heavy_minus_sign:                  | N/A                                 | Jane Corp llc                       |