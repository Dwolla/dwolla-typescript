# InvalidPointOfSaleAddendaCityErrorEmbedded

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaCityErrorEmbedded } from "dwolla/models";

let value: InvalidPointOfSaleAddendaCityErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "City on a Point of Sale addenda entry is required and can be up to 15 characters.",
      path: "/achDetails/source/addenda/pointOfSale/city",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                 | [models.InvalidPointOfSaleAddendaCityErrorError](../models/invalidpointofsaleaddendacityerrorerror.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |