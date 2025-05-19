# PointOfSaleAddendaEntriesNotEnabledForAccountError

## Example Usage

```typescript
import { PointOfSaleAddendaEntriesNotEnabledForAccountError } from "dwolla-typescript";

let value: PointOfSaleAddendaEntriesNotEnabledForAccountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Supplying point of sale addenda entries is currently not enabled.",
        path: "",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          | ValidationError                                                                                                                              |
| `message`                                                                                                                                    | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                                                      |
| `embedded`                                                                                                                                   | [models.PointOfSaleAddendaEntriesNotEnabledForAccountErrorEmbedded](../models/pointofsaleaddendaentriesnotenabledforaccounterrorembedded.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |