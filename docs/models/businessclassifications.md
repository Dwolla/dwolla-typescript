# BusinessClassifications

## Example Usage

```typescript
import { BusinessClassifications } from "dwolla/models";

let value: BusinessClassifications = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    massPayments: [
      {
        links: {
          self: {
            href: "https://api.dwolla.com",
            type: "application/vnd.dwolla.v1.hal+json",
            resourceType: "resource-type",
          },
        },
        embedded: {
          industryClassifications: [
            {
              id: "9ed3f66b-7d6f-11e3-95ac-5404a6144203",
              name: "Wineries",
            },
          ],
        },
        id: "9ed3f669-7d6f-11e3-b545-5404a6144203",
        name: "Food retail and service",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `links`                                                                                | Record<string, [models.HalLink](../models/hallink.md)>                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `embedded`                                                                             | [models.BusinessClassificationsEmbedded](../models/businessclassificationsembedded.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |