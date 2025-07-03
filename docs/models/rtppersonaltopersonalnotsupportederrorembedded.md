# RtpPersonalToPersonalNotSupportedErrorEmbedded

## Example Usage

```typescript
import { RtpPersonalToPersonalNotSupportedErrorEmbedded } from "dwolla-typescript/models";

let value: RtpPersonalToPersonalNotSupportedErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Real Time Payments does not currently support transfers between personal accounts",
      path: "",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                         | [models.RtpPersonalToPersonalNotSupportedErrorError](../models/rtppersonaltopersonalnotsupportederrorerror.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |