# ExchangePartnersEmbedded

## Example Usage

```typescript
import { ExchangePartnersEmbedded } from "dwolla-typescript";

let value: ExchangePartnersEmbedded = {
  exchangePartners: [
    {
      links: {
        "key": {
          href: "https://api.dwolla.com",
          type: "application/vnd.dwolla.v1.hal+json",
          resourceType: "resource-type",
        },
      },
      embedded: {},
      total: 3,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `exchangePartners`                                         | [models.ExchangePartners](../models/exchangepartners.md)[] | :heavy_minus_sign:                                         | N/A                                                        |