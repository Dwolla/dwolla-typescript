# WithdrawInvalidWireBeneficiaryCountryErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryCountryErrorEmbedded } from "dwolla/models";

let value: WithdrawInvalidWireBeneficiaryCountryErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Beneficiary country must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
      path: "/wireInstructions/beneficiaryCountry",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                 | [models.WithdrawInvalidWireBeneficiaryCountryErrorError](../models/withdrawinvalidwirebeneficiarycountryerrorerror.md)[] | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |