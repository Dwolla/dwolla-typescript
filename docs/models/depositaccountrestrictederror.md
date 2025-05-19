# DepositAccountRestrictedError

## Example Usage

```typescript
import { DepositAccountRestrictedError } from "dwolla-typescript";

let value: DepositAccountRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Account is restricted.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `code`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | ValidationError                                                                                    |
| `message`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | Validation error(s) present. See embedded errors list for more details.                            |
| `embedded`                                                                                         | [models.DepositAccountRestrictedErrorEmbedded](../models/depositaccountrestrictederrorembedded.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |