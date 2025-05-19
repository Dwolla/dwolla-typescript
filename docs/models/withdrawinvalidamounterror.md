# WithdrawInvalidAmountError

## Example Usage

```typescript
import { WithdrawInvalidAmountError } from "dwolla-typescript";

let value: WithdrawInvalidAmountError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid amount.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `code`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | ValidationError                                                                              |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | Validation error(s) present. See embedded errors list for more details.                      |
| `embedded`                                                                                   | [models.WithdrawInvalidAmountErrorEmbedded](../models/withdrawinvalidamounterrorembedded.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |