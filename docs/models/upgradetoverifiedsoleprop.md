# UpgradeToVerifiedSoleProp

Upgrade Unverified Customer to Verified Business Customer (Sole Proprietorship)

## Example Usage

```typescript
import { UpgradeToVerifiedSoleProp } from "dwolla-typescript/models";
import { RFCDate } from "dwolla-typescript/types";

let value: UpgradeToVerifiedSoleProp = {
  firstName: "Business",
  lastName: "Owner",
  email: "solePropBusiness@email.com",
  ipAddress: "143.156.7.8",
  type: "business",
  dateOfBirth: new RFCDate("1980-01-31"),
  ssn: "6789",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  businessType: "soleProprietorship",
  businessName: "Jane Corp",
  ein: "00-0000000",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `firstName`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | Business                             |
| `lastName`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | Owner                                |
| `email`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | solePropBusiness@email.com           |
| `ipAddress`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  | 143.156.7.8                          |
| `type`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | business                             |
| `dateOfBirth`                        | [RFCDate](../types/rfcdate.md)       | :heavy_check_mark:                   | N/A                                  | 1980-01-31                           |
| `ssn`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | 6789                                 |
| `address1`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | 99-99 33rd St                        |
| `city`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | Some City                            |
| `state`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | NY                                   |
| `postalCode`                         | *string*                             | :heavy_check_mark:                   | N/A                                  | 11101                                |
| `businessClassification`             | *string*                             | :heavy_check_mark:                   | N/A                                  | 9ed3f670-7d6f-11e3-b1ce-5404a6144203 |
| `businessType`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | soleProprietorship                   |
| `businessName`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | Jane Corp                            |
| `ein`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | 00-0000000                           |