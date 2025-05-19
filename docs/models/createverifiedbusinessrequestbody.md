# CreateVerifiedBusinessRequestBody

Create a Verified Business customer

## Example Usage

```typescript
import { CreateVerifiedBusinessRequestBody } from "dwolla-typescript";
import { RFCDate } from "dwolla-typescript/types";

let value: CreateVerifiedBusinessRequestBody = {
  firstName: "Account",
  lastName: "Admin",
  email: "accountAdmin@email.com",
  ipAddress: "143.156.7.8",
  phone: "5555555555",
  correlationId: "fc451a7a-ae30-4404-aB95-e3553fcd733",
  businessName: "Jane Corp",
  type: "business",
  address1: "99-99 33rd St",
  address2: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  ssn: "1234",
  dateOfBirth: "1980-09-12",
  businessClassification: "9ed3f670-7d6f-11e3-b1ce-5404a6144203",
  doingBusinessAs: "Jane's Electronics",
  ein: "00-0000000",
  website: "https://www.domain.com",
  controller: {
    firstName: "John",
    lastName: "Controller",
    title: "CEO",
    dateOfBirth: new RFCDate("1980-01-31"),
    address: {
      address1: "462 Main Street",
      address2: "Suite 123",
      address3: "Unit 123",
      city: "Des Moines",
      postalCode: "50309",
      country: "USA",
      stateProvinceRegion: "IA",
    },
    ssn: "1234",
  },
  businessType: "llc",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `firstName`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | Account                              |
| `lastName`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | Admin                                |
| `email`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | accountAdmin@email.com               |
| `ipAddress`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  | 143.156.7.8                          |
| `phone`                              | *string*                             | :heavy_minus_sign:                   | N/A                                  | 5555555555                           |
| `correlationId`                      | *string*                             | :heavy_minus_sign:                   | N/A                                  | fc451a7a-ae30-4404-aB95-e3553fcd733  |
| `businessName`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | Jane Corp                            |
| `type`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | business                             |
| `address1`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | 99-99 33rd St                        |
| `address2`                           | *string*                             | :heavy_minus_sign:                   | N/A                                  | 99-99 33rd St                        |
| `city`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | Some City                            |
| `state`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | NY                                   |
| `postalCode`                         | *string*                             | :heavy_check_mark:                   | N/A                                  | 11101                                |
| `ssn`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | 1234                                 |
| `dateOfBirth`                        | *string*                             | :heavy_check_mark:                   | N/A                                  | 1980-09-12                           |
| `businessClassification`             | *string*                             | :heavy_check_mark:                   | N/A                                  | 9ed3f670-7d6f-11e3-b1ce-5404a6144203 |
| `doingBusinessAs`                    | *string*                             | :heavy_minus_sign:                   | N/A                                  | Jane's Electronics                   |
| `ein`                                | *string*                             | :heavy_check_mark:                   | N/A                                  | 00-0000000                           |
| `website`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  | https://www.domain.com               |
| `controller`                         | *models.ControllerUnion*             | :heavy_check_mark:                   | N/A                                  |                                      |
| `businessType`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | llc                                  |