# InvalidPointOfSaleAddendaDateErrorError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaDateErrorError } from "dwolla-typescript";

let value: InvalidPointOfSaleAddendaDateErrorError = {
  code: "InvalidFormat",
  message:
    "Date on a Point of Sale addenda entry is required and should be ISO-8601 format: YYYY-MM-DD.",
  path: "/achDetails/source/addenda/pointOfSale/date",
  links: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | InvalidFormat                                                                                          |
| `message`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | Date on a Point of Sale addenda entry is required and should be ISO-8601 format: YYYY-MM-DD.           |
| `path`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | /achDetails/source/addenda/pointOfSale/date                                                            |
| `links`                                                                                                | [models.InvalidPointOfSaleAddendaDateErrorLinks](../models/invalidpointofsaleaddendadateerrorlinks.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | {}                                                                                                     |