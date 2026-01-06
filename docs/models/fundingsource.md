# FundingSource

## Example Usage

```typescript
import { FundingSource } from "dwolla/models";

let value: FundingSource = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
  status: "unverified",
  type: "bank",
  bankAccountType: "checking",
  name: "My bank",
  created: new Date("2022-07-23T00:18:21.419Z"),
  removed: true,
  channels: [
    "ach",
  ],
  bankName: "SANDBOX TEST BANK",
  fingerprint: "5012989b55af15400e8102f95d2ec5e7ce3aef45c01613280d80a236dd8d6c",
  bankUsageType: "card-network",
  cardDetails: {
    brand: "Visa",
    lastFour: "1234",
    expirationMonth: 12,
    expirationYear: 2026,
    nameOnCard: "John Doe",
    bin: "40247644",
    billingAddress: {
      address1: "552 test",
      address2: "Apt 4B",
      address3: "Unit 101",
      city: "Des Moines",
      stateProvinceRegion: "IA",
      country: "US",
      postalCode: "50310",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                    | Record<string, [models.HalLink](../models/hallink.md)>                                                     | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e                                                                       |
| `status`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | unverified                                                                                                 |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | bank                                                                                                       |
| `bankAccountType`                                                                                          | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | checking                                                                                                   |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | My bank                                                                                                    |
| `created`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | 2022-07-23T00:18:21.419Z                                                                                   |
| `removed`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | true                                                                                                       |
| `channels`                                                                                                 | [models.FundingSourceChannel](../models/fundingsourcechannel.md)[]                                         | :heavy_minus_sign:                                                                                         | Payment processing channels supported by this funding source                                               |                                                                                                            |
| `bankName`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | SANDBOX TEST BANK                                                                                          |
| `fingerprint`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | 5012989b55af15400e8102f95d2ec5e7ce3aef45c01613280d80a236dd8d6c                                             |
| `bankUsageType`                                                                                            | [models.BankUsageType](../models/bankusagetype.md)                                                         | :heavy_minus_sign:                                                                                         | The usage type of the bank account. Indicates if this is a settlement account for card network processors. | card-network                                                                                               |
| `cardDetails`                                                                                              | [models.FundingSourceCardDetails](../models/fundingsourcecarddetails.md)                                   | :heavy_minus_sign:                                                                                         | Card-specific details. Only present when type is 'card'.                                                   |                                                                                                            |