# BeneficialOwners

Request model for list beneficial owners

## Example Usage

```typescript
import { BeneficialOwners } from "dwolla/models";

let value: BeneficialOwners = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    beneficialOwners: [
      {
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
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `links`                                                                  | Record<string, [models.HalLink](../models/hallink.md)>                   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `embedded`                                                               | [models.BeneficialOwnersEmbedded](../models/beneficialownersembedded.md) | :heavy_minus_sign:                                                       | N/A                                                                      |