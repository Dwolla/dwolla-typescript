# InsufficientFundsError

## Example Usage

```typescript
import { InsufficientFundsError } from "dwolla-typescript";

let value: InsufficientFundsError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InsufficientFunds",
        message: "Insufficient funds.",
        path: "/_links/source/href",
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
| `embedded`                                                                           | [models.InsufficientFundsErrorEmbedded](../models/insufficientfundserrorembedded.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |