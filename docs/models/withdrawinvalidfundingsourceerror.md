# WithdrawInvalidFundingSourceError

## Example Usage

```typescript
import { WithdrawInvalidFundingSourceError } from "dwolla-typescript";

let value: WithdrawInvalidFundingSourceError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message:
          "Destination funding source is either removed or does not exist.",
        path: "/_links/destination/href",
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
| `embedded`                                                                                                 | [models.WithdrawInvalidFundingSourceErrorEmbedded](../models/withdrawinvalidfundingsourceerrorembedded.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |