# WithdrawInvalidWireOriginatorToBeneficiaryErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidWireOriginatorToBeneficiaryErrorEmbedded } from "dwolla-typescript/models";

let value: WithdrawInvalidWireOriginatorToBeneficiaryErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Originator to beneficiary items must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
      path: "/wireInstructions/originatorToBeneficiary",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                           | [models.WithdrawInvalidWireOriginatorToBeneficiaryErrorError](../models/withdrawinvalidwireoriginatortobeneficiaryerrorerror.md)[] | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |