# WithdrawInvalidWireBeneficiaryRegionErrorEmbedded

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryRegionErrorEmbedded } from "dwolla-typescript/models";

let value: WithdrawInvalidWireBeneficiaryRegionErrorEmbedded = {
  errors: [
    {
      code: "InvalidFormat",
      message:
        "Beneficiary region must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
      path: "/wireInstructions/beneficiaryRegion",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                               | [models.WithdrawInvalidWireBeneficiaryRegionErrorError](../models/withdrawinvalidwirebeneficiaryregionerrorerror.md)[] | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |