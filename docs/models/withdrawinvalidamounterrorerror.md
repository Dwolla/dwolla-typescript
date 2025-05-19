# WithdrawInvalidAmountErrorError

## Example Usage

```typescript
import { WithdrawInvalidAmountErrorError } from "dwolla-typescript";

let value: WithdrawInvalidAmountErrorError = {
  code: "Invalid",
  message: "Invalid amount.",
  path: "/amount/value",
  links: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `code`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | Invalid                                                                                |
| `message`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | Invalid amount.                                                                        |
| `path`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | /amount/value                                                                          |
| `links`                                                                                | [models.WithdrawInvalidAmountErrorLinks](../models/withdrawinvalidamounterrorlinks.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    | {}                                                                                     |