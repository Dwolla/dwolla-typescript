# WithdrawInvalidWireOriginatorToBeneficiaryError

## Example Usage

```typescript
import { WithdrawInvalidWireOriginatorToBeneficiaryError } from "dwolla-typescript";

let value: WithdrawInvalidWireOriginatorToBeneficiaryError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Originator to beneficiary items must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/originatorToBeneficiary",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    | ValidationError                                                                                                                        |
| `message`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    | Validation error(s) present. See embedded errors list for more details.                                                                |
| `embedded`                                                                                                                             | [models.WithdrawInvalidWireOriginatorToBeneficiaryErrorEmbedded](../models/withdrawinvalidwireoriginatortobeneficiaryerrorembedded.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |