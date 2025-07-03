# WithdrawInvalidWireBeneficiaryRegionErrorError

## Example Usage

```typescript
import { WithdrawInvalidWireBeneficiaryRegionErrorError } from "dwolla-typescript/models";

let value: WithdrawInvalidWireBeneficiaryRegionErrorError = {
  code: "InvalidFormat",
  message:
    "Beneficiary region must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
  path: "/wireInstructions/beneficiaryRegion",
  links: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | InvalidFormat                                                                                                        |
| `message`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | Beneficiary region must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.  |
| `path`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | /wireInstructions/beneficiaryRegion                                                                                  |
| `links`                                                                                                              | [models.WithdrawInvalidWireBeneficiaryRegionErrorLinks](../models/withdrawinvalidwirebeneficiaryregionerrorlinks.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | {}                                                                                                                   |