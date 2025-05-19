# InvalidPointOfSaleAddendaDateError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaDateError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaDateError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Date on a Point of Sale addenda entry is required and should be ISO-8601 format: YYYY-MM-DD.",
        path: "/achDetails/source/addenda/pointOfSale/date",
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
| `embedded`                                                                                                   | [models.InvalidPointOfSaleAddendaDateErrorEmbedded](../models/invalidpointofsaleaddendadateerrorembedded.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |