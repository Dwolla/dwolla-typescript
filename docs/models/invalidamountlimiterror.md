# InvalidAmountLimitError

## Example Usage

```typescript
import { InvalidAmountLimitError } from "dwolla-typescript";

let value: InvalidAmountLimitError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message:
          "Invalid amount. The supplied amount is greater than your transaction limit.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `code`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | ValidationError                                                                        |
| `message`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Validation error(s) present. See embedded errors list for more details.                |
| `embedded`                                                                             | [models.InvalidAmountLimitErrorEmbedded](../models/invalidamountlimiterrorembedded.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |