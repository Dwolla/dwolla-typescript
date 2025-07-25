# Exchanges

## Example Usage

```typescript
import { Exchanges } from "dwolla/models";

let value: Exchanges = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {
    exchanges: [
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
        created: new Date("2022-07-23T00:18:21.419Z"),
      },
    ],
  },
  total: 3,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `links`                                                    | Record<string, [models.HalLink](../models/hallink.md)>     | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `embedded`                                                 | [models.ExchangesEmbedded](../models/exchangesembedded.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `total`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        | 3                                                          |