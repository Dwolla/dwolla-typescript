# WithdrawRtpUnverifiedSenderNotSupportedErrorEmbedded

## Example Usage

```typescript
import { WithdrawRtpUnverifiedSenderNotSupportedErrorEmbedded } from "dwolla-typescript";

let value: WithdrawRtpUnverifiedSenderNotSupportedErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Real Time Payments does not currently support unverified senders",
      path: "",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                     | [models.WithdrawRtpUnverifiedSenderNotSupportedErrorError](../models/withdrawrtpunverifiedsendernotsupportederrorerror.md)[] | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |