# WithdrawRtpPersonalWithdrawalNotSupportedError

## Example Usage

```typescript
import { WithdrawRtpPersonalWithdrawalNotSupportedError } from "dwolla-typescript";

let value: WithdrawRtpPersonalWithdrawalNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments withdrawal from a personal account is currently not supported",
        path: "",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  | ValidationError                                                                                                                      |
| `message`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  | Validation error(s) present. See embedded errors list for more details.                                                              |
| `embedded`                                                                                                                           | [models.WithdrawRtpPersonalWithdrawalNotSupportedErrorEmbedded](../models/withdrawrtppersonalwithdrawalnotsupportederrorembedded.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |