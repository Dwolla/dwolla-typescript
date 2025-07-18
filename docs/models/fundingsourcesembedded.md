# FundingSourcesEmbedded

## Example Usage

```typescript
import { FundingSourcesEmbedded } from "dwolla/models";

let value: FundingSourcesEmbedded = {
  fundingSources: [
    {
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
      fingerprint:
        "5012989b55af15400e8102f95d2ec5e7ce3aef45c01613280d80a236dd8d6c",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `fundingSources`                                     | [models.FundingSource](../models/fundingsource.md)[] | :heavy_minus_sign:                                   | N/A                                                  |