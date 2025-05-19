# InvalidPointOfSaleAddendaAddressError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaAddressError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaAddressError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Address on a Point of Sale addenda entry is required and can be up to 27 characters.",
        path: "/achDetails/source/addenda/pointOfSale/address",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | ValidationError                                                                                                    |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | Validation error(s) present. See embedded errors list for more details.                                            |
| `embedded`                                                                                                         | [models.InvalidPointOfSaleAddendaAddressErrorEmbedded](../models/invalidpointofsaleaddendaaddresserrorembedded.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |