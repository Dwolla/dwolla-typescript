# CardMissingRequiredFieldsErrorEmbedded

## Example Usage

```typescript
import { CardMissingRequiredFieldsErrorEmbedded } from "dwolla/models";

let value: CardMissingRequiredFieldsErrorEmbedded = {
  errors: [
    {
      code: "Required",
      message: "Card token is required.",
      path: "/cardToken",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `errors`                                                                                         | [models.CardMissingRequiredFieldsErrorError](../models/cardmissingrequiredfieldserrorerror.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |