# InvalidPointOfSaleAddendaCityError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaCityError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaCityError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "City on a Point of Sale addenda entry is required and can be up to 15 characters.",
        path: "/achDetails/source/addenda/pointOfSale/city",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | ValidationError                                                                                              |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                      |
| `embedded`                                                                                                   | [models.InvalidPointOfSaleAddendaCityErrorEmbedded](../models/invalidpointofsaleaddendacityerrorembedded.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |