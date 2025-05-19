# WithdrawInvalidWireBeneficiaryLocalityError

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryLocalityError } from "dwolla-typescript";

let value: WithdrawInvalidWireBeneficiaryLocalityError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Beneficiary locality must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/beneficiaryLocality",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | ValidationError                                                                                                                |
| `message`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            | Validation error(s) present. See embedded errors list for more details.                                                        |
| `embedded`                                                                                                                     | [models.WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded](../models/withdrawinvalidwirebeneficiarylocalityerrorembedded.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |