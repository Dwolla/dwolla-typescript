# UpdateCardFundingSourceIdentification

A government identification document for the cardholder.
Supplying this value reduces the number of sanctions screening alerts raised when the card is processed.


## Example Usage

```typescript
import { UpdateCardFundingSourceIdentification } from "dwolla/models";

let value: UpdateCardFundingSourceIdentification = {
  type: "passport",
  number: "P123456",
  country: "GB",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                            | [models.UpdateCardFundingSourceType](../models/updatecardfundingsourcetype.md)                                                    | :heavy_check_mark:                                                                                                                | The kind of government identification document provided.                                                                          | passport                                                                                                                          |
| `number`                                                                                                                          | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The identification document number.                                                                                               | P123456                                                                                                                           |
| `country`                                                                                                                         | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Country that issued the identification document, as a two-letter country code (ISO 3166-1 alpha-2). Must be exactly 2 characters. | GB                                                                                                                                |