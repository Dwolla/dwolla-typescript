# ExchangePartners

## Example Usage

```typescript
import { ExchangePartners } from "dwolla/models";

let value: ExchangePartners = {
  links: {
    "key": {
      href: "https://api.dwolla.com",
      type: "application/vnd.dwolla.v1.hal+json",
      resourceType: "resource-type",
    },
  },
  embedded: {},
  total: 3,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `links`                                                                  | Record<string, [models.HalLink](../models/hallink.md)>                   | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `embedded`                                                               | [models.ExchangePartnersEmbedded](../models/exchangepartnersembedded.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `total`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 3                                                                        |