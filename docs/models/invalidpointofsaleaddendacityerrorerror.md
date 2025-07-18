# InvalidPointOfSaleAddendaCityErrorError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaCityErrorError } from "dwolla/models";

let value: InvalidPointOfSaleAddendaCityErrorError = {
  code: "InvalidFormat",
  message:
    "City on a Point of Sale addenda entry is required and can be up to 15 characters.",
  path: "/achDetails/source/addenda/pointOfSale/city",
  links: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | InvalidFormat                                                                                          |
| `message`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | City on a Point of Sale addenda entry is required and can be up to 15 characters.                      |
| `path`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | /achDetails/source/addenda/pointOfSale/city                                                            |
| `links`                                                                                                | [models.InvalidPointOfSaleAddendaCityErrorLinks](../models/invalidpointofsaleaddendacityerrorlinks.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    | {}                                                                                                     |