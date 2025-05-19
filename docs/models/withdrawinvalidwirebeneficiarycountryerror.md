# WithdrawInvalidWireBeneficiaryCountryError

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryCountryError } from "dwolla-typescript";

let value: WithdrawInvalidWireBeneficiaryCountryError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Beneficiary country must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
        path: "/wireInstructions/beneficiaryCountry",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | ValidationError                                                                                                              |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                                      |
| `embedded`                                                                                                                   | [models.WithdrawInvalidWireBeneficiaryCountryErrorEmbedded](../models/withdrawinvalidwirebeneficiarycountryerrorembedded.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |