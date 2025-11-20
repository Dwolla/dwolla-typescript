# BeneficialOwner

Request body model for a Beneficial Owner

## Example Usage

```typescript
import { BeneficialOwner } from "dwolla/models";

let value: BeneficialOwner = {
  links: {},
  id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
  firstName: "John",
  lastName: "Doe",
  address: {
    address1: "462 Main Street",
    address2: "Suite 123",
    address3: "Unit 123",
    city: "Des Moines",
    postalCode: "50309",
    country: "USA",
    stateProvinceRegion: "IA",
  },
  verificationStatus: "verified",
  created: new Date("2022-07-23T00:18:21.419Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `links`                                                                                       | Record<string, [models.HalLink](../models/hallink.md)>                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e                                                          |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | John                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Doe                                                                                           |
| `address`                                                                                     | [models.InternationalAddress](../models/internationaladdress.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `verificationStatus`                                                                          | [models.VerificationStatus](../models/verificationstatus.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           | verified                                                                                      |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2022-07-23T00:18:21.419Z                                                                      |