# BeneficialOwnersEmbedded

## Example Usage

```typescript
import { BeneficialOwnersEmbedded } from "dwolla-typescript";

let value: BeneficialOwnersEmbedded = {
  beneficialOwners: [
    {
      links: {
        "key": {
          href: "https://api.dwolla.com",
          type: "application/vnd.dwolla.v1.hal+json",
          resourceType: "resource-type",
        },
      },
      id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `beneficialOwners`                                       | [models.BeneficialOwner](../models/beneficialowner.md)[] | :heavy_minus_sign:                                       | N/A                                                      |