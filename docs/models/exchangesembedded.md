# ExchangesEmbedded

## Example Usage

```typescript
import { ExchangesEmbedded } from "dwolla/models";

let value: ExchangesEmbedded = {
  exchanges: [
    {
      links: {},
      id: "d3d6b41e-5567-4bc6-9c6e-0efd0a3e647e",
      status: "active",
      created: new Date("2022-07-23T00:18:21.419Z"),
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `exchanges`                                | [models.Exchange](../models/exchange.md)[] | :heavy_check_mark:                         | N/A                                        |