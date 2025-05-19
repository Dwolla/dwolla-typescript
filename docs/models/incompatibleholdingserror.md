# IncompatibleHoldingsError

## Example Usage

```typescript
import { IncompatibleHoldingsError } from "dwolla-typescript";

let value: IncompatibleHoldingsError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Receiver cannot receive from sender.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `code`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | ValidationError                                                                            |
| `message`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | Validation error(s) present. See embedded errors list for more details.                    |
| `embedded`                                                                                 | [models.IncompatibleHoldingsErrorEmbedded](../models/incompatibleholdingserrorembedded.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |