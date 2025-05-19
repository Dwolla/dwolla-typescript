# WithdrawInvalidWireBeneficiaryLocalityErrorError

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryLocalityErrorError } from "dwolla-typescript";

let value: WithdrawInvalidWireBeneficiaryLocalityErrorError = {
  code: "InvalidFormat",
  message:
    "Beneficiary locality must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
  path: "/wireInstructions/beneficiaryLocality",
  links: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | InvalidFormat                                                                                                            |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | Beneficiary locality must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.    |
| `path`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | /wireInstructions/beneficiaryLocality                                                                                    |
| `links`                                                                                                                  | [models.WithdrawInvalidWireBeneficiaryLocalityErrorLinks](../models/withdrawinvalidwirebeneficiarylocalityerrorlinks.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {}                                                                                                                       |