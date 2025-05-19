# IncompatibleSourceForRtpDestinationError

## Example Usage

```typescript
import { IncompatibleSourceForRtpDestinationError } from "dwolla-typescript";

let value: IncompatibleSourceForRtpDestinationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Transfers using the Real Time Payments processing channel must be funded by a balance",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | ValidationError                                                                                                          |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      | Validation error(s) present. See embedded errors list for more details.                                                  |
| `embedded`                                                                                                               | [models.IncompatibleSourceForRtpDestinationErrorEmbedded](../models/incompatiblesourceforrtpdestinationerrorembedded.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |