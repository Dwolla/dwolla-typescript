# RtpUnverifiedSenderNotSupportedError

## Example Usage

```typescript
import { RtpUnverifiedSenderNotSupportedError } from "dwolla-typescript";

let value: RtpUnverifiedSenderNotSupportedError = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | ValidationError                                                                                                  |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | Validation error(s) present. See embedded errors list for more details.                                          |
| `embedded`                                                                                                       | [models.RtpUnverifiedSenderNotSupportedErrorEmbedded](../models/rtpunverifiedsendernotsupportederrorembedded.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |