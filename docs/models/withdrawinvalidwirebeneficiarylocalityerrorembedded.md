# WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded } from "dwolla/models";

let value: WithdrawInvalidWireBeneficiaryLocalityErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Beneficiary locality must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
      path: "/wireInstructions/beneficiaryLocality",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                   | [models.WithdrawInvalidWireBeneficiaryLocalityErrorError](../models/withdrawinvalidwirebeneficiarylocalityerrorerror.md)[] | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |