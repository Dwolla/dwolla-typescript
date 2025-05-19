# InvalidPointOfSaleAddendaStateError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaStateError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaStateError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "State on a Point of Sale addenda entry is required and should be a valid 2-letter abbreviation.",
        path: "/achDetails/source/addenda/pointOfSale/state",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | ValidationError                                                                                                |
| `message`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | Validation error(s) present. See embedded errors list for more details.                                        |
| `embedded`                                                                                                     | [models.InvalidPointOfSaleAddendaStateErrorEmbedded](../models/invalidpointofsaleaddendastateerrorembedded.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |