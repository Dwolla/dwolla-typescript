# WithdrawAccountRestrictedError

## Example Usage

```typescript
import { WithdrawAccountRestrictedError } from "dwolla-typescript";

let value: WithdrawAccountRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Account or customer restricted.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `code`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | ValidationError                                                                                      |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | Validation error(s) present. See embedded errors list for more details.                              |
| `embedded`                                                                                           | [models.WithdrawAccountRestrictedErrorEmbedded](../models/withdrawaccountrestrictederrorembedded.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |