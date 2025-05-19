# InvalidSourceBankAccountTypeError

## Example Usage

```typescript
import { InvalidSourceBankAccountTypeError } from "dwolla-typescript";

let value: InvalidSourceBankAccountTypeError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid bank account type",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | ValidationError                                                                                            |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | Validation error(s) present. See embedded errors list for more details.                                    |
| `embedded`                                                                                                 | [models.InvalidSourceBankAccountTypeErrorEmbedded](../models/invalidsourcebankaccounttypeerrorembedded.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |