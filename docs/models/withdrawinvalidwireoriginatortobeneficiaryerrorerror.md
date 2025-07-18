# WithdrawInvalidWireOriginatorToBeneficiaryErrorError

## Example Usage

```typescript
import { WithdrawInvalidWireOriginatorToBeneficiaryErrorError } from "dwolla/models";

let value: WithdrawInvalidWireOriginatorToBeneficiaryErrorError = {
  code: "InvalidFormat",
  message:
    "Originator to beneficiary items must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters.",
  path: "/wireInstructions/originatorToBeneficiary",
  links: {},
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                           | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | InvalidFormat                                                                                                                    |
| `message`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | Originator to beneficiary items must not exceed 35 characters and contain only alphanumeric, white space, '.' or '#' characters. |
| `path`                                                                                                                           | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | /wireInstructions/originatorToBeneficiary                                                                                        |
| `links`                                                                                                                          | [models.WithdrawInvalidWireOriginatorToBeneficiaryErrorLinks](../models/withdrawinvalidwireoriginatortobeneficiaryerrorlinks.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | {}                                                                                                                               |