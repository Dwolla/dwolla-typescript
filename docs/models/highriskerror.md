# HighRiskError

## Example Usage

```typescript
import { HighRiskError } from "dwolla-typescript";

let value: HighRiskError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Due to account restrictions, we are unable to process this transaction.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `code`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | ValidationError                                                         |
| `message`                                                               | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | Validation error(s) present. See embedded errors list for more details. |
| `embedded`                                                              | [models.HighRiskErrorEmbedded](../models/highriskerrorembedded.md)      | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |