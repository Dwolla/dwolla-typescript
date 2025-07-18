# InvalidPointOfSaleAddendaIdentificationCodeErrorError

## Example Usage

```typescript
import { InvalidPointOfSaleAddendaIdentificationCodeErrorError } from "dwolla/models";

let value: InvalidPointOfSaleAddendaIdentificationCodeErrorError = {
  code: "InvalidFormat",
  message:
    "Identification code on a Point of Sale addenda entry is required and can be up to 6 characters.",
  path: "/achDetails/source/addenda/pointOfSale/identificationCode",
  links: {},
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | InvalidFormat                                                                                                                      |
| `message`                                                                                                                          | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | Identification code on a Point of Sale addenda entry is required and can be up to 6 characters.                                    |
| `path`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | /achDetails/source/addenda/pointOfSale/identificationCode                                                                          |
| `links`                                                                                                                            | [models.InvalidPointOfSaleAddendaIdentificationCodeErrorLinks](../models/invalidpointofsaleaddendaidentificationcodeerrorlinks.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | {}                                                                                                                                 |