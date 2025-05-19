# IncompatibleSourceForRtpDestinationErrorError

## Example Usage

```typescript
import { IncompatibleSourceForRtpDestinationErrorError } from "dwolla-typescript";

let value: IncompatibleSourceForRtpDestinationErrorError = {
  code: "NotAllowed",
  message:
    "Transfers using the Real Time Payments processing channel must be funded by a balance",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | NotAllowed                                                                                                         |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | Transfers using the Real Time Payments processing channel must be funded by a balance                              |
| `path`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | /_links/destination/href                                                                                           |
| `links`                                                                                                            | [models.IncompatibleSourceForRtpDestinationErrorLinks](../models/incompatiblesourceforrtpdestinationerrorlinks.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | {}                                                                                                                 |