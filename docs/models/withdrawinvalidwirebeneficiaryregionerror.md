# WithdrawInvalidWireBeneficiaryRegionError

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryRegionError } from "dwolla-typescript";

let value: WithdrawInvalidWireBeneficiaryRegionError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Beneficiary region must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/beneficiaryRegion",
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
| `embedded`                                                                                                                 | [models.WithdrawInvalidWireBeneficiaryRegionErrorEmbedded](../models/withdrawinvalidwirebeneficiaryregionerrorembedded.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |