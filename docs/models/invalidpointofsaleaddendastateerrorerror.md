# InvalidPointOfSaleAddendaStateErrorError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaStateErrorError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaStateErrorError = {
  code: "InvalidFormat",
  message:
    "State on a Point of Sale addenda entry is required and should be a valid 2-letter abbreviation.",
  path: "/achDetails/source/addenda/pointOfSale/state",
  links: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | InvalidFormat                                                                                            |
| `message`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | State on a Point of Sale addenda entry is required and should be a valid 2-letter abbreviation.          |
| `path`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | /achDetails/source/addenda/pointOfSale/state                                                             |
| `links`                                                                                                  | [models.InvalidPointOfSaleAddendaStateErrorLinks](../models/invalidpointofsaleaddendastateerrorlinks.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | {}                                                                                                       |