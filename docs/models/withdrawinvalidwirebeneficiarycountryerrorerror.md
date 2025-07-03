# WithdrawInvalidWireBeneficiaryCountryErrorError

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryCountryErrorError } from "dwolla-typescript/models";

let value: WithdrawInvalidWireBeneficiaryCountryErrorError = {
  code: "InvalidFormat",
  message:
    "Beneficiary country must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
  path: "/wireInstructions/beneficiaryCountry",
  links: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | InvalidFormat                                                                                                          |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | Beneficiary country must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.   |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | /wireInstructions/beneficiaryCountry                                                                                   |
| `links`                                                                                                                | [models.WithdrawInvalidWireBeneficiaryCountryErrorLinks](../models/withdrawinvalidwirebeneficiarycountryerrorlinks.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | {}                                                                                                                     |