# InvalidPointOfSaleAddendaDateErrorEmbedded

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaDateErrorEmbedded } from "dwolla/models";

let value: InvalidPointOfSaleAddendaDateErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Date on a Point of Sale addenda entry is required and should be ISO-8601 format: YYYY-MM-DD.",
      path: "/achDetails/source/addenda/pointOfSale/date",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                 | [models.InvalidPointOfSaleAddendaDateErrorError](../models/invalidpointofsaleaddendadateerrorerror.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |