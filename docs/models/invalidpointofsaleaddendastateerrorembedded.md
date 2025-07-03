# InvalidPointOfSaleAddendaStateErrorEmbedded

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaStateErrorEmbedded } from "dwolla-typescript/models";

let value: InvalidPointOfSaleAddendaStateErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "State on a Point of Sale addenda entry is required and should be a valid 2-letter abbreviation.",
      path: "/achDetails/source/addenda/pointOfSale/state",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                   | [models.InvalidPointOfSaleAddendaStateErrorError](../models/invalidpointofsaleaddendastateerrorerror.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |