# CannotParseAmountError

## Example Usage

```typescript
import { CannotParseAmountError } from "dwolla-typescript";

let value: CannotParseAmountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Invalid amount. The supplied amount must be a positive number.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `code`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | ValidationError                                                                      |
| `message`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | Validation error(s) present. See embedded errors list for more details.              |
| `embedded`                                                                           | [models.CannotParseAmountErrorEmbedded](../models/cannotparseamounterrorembedded.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |