# WithdrawRtpUnverifiedSenderNotSupportedError

## Example Usage

```typescript
import { WithdrawRtpUnverifiedSenderNotSupportedError } from "dwolla-typescript";

let value: WithdrawRtpUnverifiedSenderNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Real Time Payments does not currently support unverified senders",
        path: "",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              | ValidationError                                                                                                                  |
| `message`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              | Validation error(s) present. See embedded errors list for more details.                                                          |
| `embedded`                                                                                                                       | [models.WithdrawRtpUnverifiedSenderNotSupportedErrorEmbedded](../models/withdrawrtpunverifiedsendernotsupportederrorembedded.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |