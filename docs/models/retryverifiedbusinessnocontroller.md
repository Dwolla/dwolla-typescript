# RetryVerifiedBusinessNoController

Retry Verification for Verified Business Customer where only Business Details need to be retried

## Example Usage

```typescript
import { RetryVerifiedBusinessNoController } from "dwolla/models";

let value: RetryVerifiedBusinessNoController = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  type: "business",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessType: "llc",
  businessName: "Jane Corp",
  ein: "00-0000000",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `firstName`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | Account                              |
| `lastName`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | Admin                                |
| `email`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | accountAdmin@email.com               |
| `ipAddress`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  | 143.156.7.8                          |
| `type`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | business                             |
| `address1`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | 99-99 33rd St                        |
| `city`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | Some City                            |
| `state`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | NY                                   |
| `postalCode`                         | *string*                             | :heavy_check_mark:                   | N/A                                  | 11101                                |
| `businessClassification`             | *string*                             | :heavy_check_mark:                   | N/A                                  | 9ed3f670-7d6f-11e3-b1ce-5404a6144203 |
| `businessType`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | llc                                  |
| `businessName`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | Jane Corp                            |
| `ein`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | 00-0000000                           |