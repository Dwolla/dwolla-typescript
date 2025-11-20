# Labels

## Example Usage

```typescript
import { Labels } from "dwolla/models";

let value: Labels = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    labels: [
      {
        links: {
          "key": {
            href: "https://api.dwolla.com",
            type: "application/vnd.dwolla.v1.hal+json",
            resourceType: "resource-type",
          },
        },
        id: "7e042ffe-e25e-40d2-b86e-748b98845ecc",
        created: new Date("2022-05-15T22:19:09.635Z"),
        amount: {
          value: "10.00",
          currency: "USD",
        },
      },
    ],
  },
  total: 100,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `links`                                                | Record<string, [models.HalLink](../models/hallink.md)> | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `embedded`                                             | [models.LabelsEmbedded](../models/labelsembedded.md)   | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `total`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    | 100                                                    |