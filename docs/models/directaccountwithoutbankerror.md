# DirectAccountWithoutBankError

## Example Usage

```typescript
import { DirectAccountWithoutBankError } from "dwolla-typescript";

let value: DirectAccountWithoutBankError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "RequiresFundingSource",
        message: "Receiver requires funding source.",
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
| `embedded`                                                                                         | [models.DirectAccountWithoutBankErrorEmbedded](../models/directaccountwithoutbankerrorembedded.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |