# ExchangesEmbedded

## Example Usage

```typescript
import { ExchangesEmbedded } from "dwolla-typescript";

let value: ExchangesEmbedded = {
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
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `exchanges`                                | [models.Exchange](../models/exchange.md)[] | :heavy_minus_sign:                         | N/A                                        |