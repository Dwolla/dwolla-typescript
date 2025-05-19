# WithdrawInvalidAmountForClearingTypeError

## Example Usage

```typescript
import { WithdrawInvalidAmountForClearingTypeError } from "dwolla-typescript";

let value: WithdrawInvalidAmountForClearingTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message:
          "Amount is above the allowed threshold for the specified clearing type.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | ValidationError                                                                                                            |
| `message`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | Validation error(s) present. See embedded errors list for more details.                                                    |
| `embedded`                                                                                                                 | [models.WithdrawInvalidAmountForClearingTypeErrorEmbedded](../models/withdrawinvalidamountforclearingtypeerrorembedded.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |