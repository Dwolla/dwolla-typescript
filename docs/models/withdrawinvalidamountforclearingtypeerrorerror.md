# WithdrawInvalidAmountForClearingTypeErrorError

## Example Usage

```typescript
import { WithdrawInvalidAmountForClearingTypeErrorError } from "dwolla-typescript/models";

let value: WithdrawInvalidAmountForClearingTypeErrorError = {
  code: "Restricted",
  message:
    "Amount is above the allowed threshold for the specified clearing type.",
  path: "/amount/value",
  links: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | Restricted                                                                                                           |
| `message`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | Amount is above the allowed threshold for the specified clearing type.                                               |
| `path`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | /amount/value                                                                                                        |
| `links`                                                                                                              | [models.WithdrawInvalidAmountForClearingTypeErrorLinks](../models/withdrawinvalidamountforclearingtypeerrorlinks.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | {}                                                                                                                   |