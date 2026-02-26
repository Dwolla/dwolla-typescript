# CardMissingRequiredFieldsErrorEmbedded

## Example Usage

```typescript
import { CardMissingRequiredFieldsErrorEmbedded } from "dwolla/models";

let value: CardMissingRequiredFieldsErrorEmbedded = {
  errors: [
    {
      code: "Required",
      message: "Token is required.",
      path: "/token",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `errors`                                                                                         | [models.CardMissingRequiredFieldsErrorError](../models/cardmissingrequiredfieldserrorerror.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |