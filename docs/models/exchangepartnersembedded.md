# ExchangePartnersEmbedded

## Example Usage

```typescript
import { ExchangePartnersEmbedded } from "dwolla/models";

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
      id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
      name: "MX",
      status: "unverified",
      created: new Date("2022-07-23T00:18:21.419Z"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `exchangePartners`                                       | [models.ExchangePartner](../models/exchangepartner.md)[] | :heavy_minus_sign:                                       | N/A                                                      |