# IncompatibleSourceForRtpDestinationErrorEmbedded

## Example Usage

```typescript
import { IncompatibleSourceForRtpDestinationErrorEmbedded } from "dwolla-typescript/models";

let value: IncompatibleSourceForRtpDestinationErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message:
        "Transfers using the Real Time Payments processing channel must be funded by a balance",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                             | [models.IncompatibleSourceForRtpDestinationErrorError](../models/incompatiblesourceforrtpdestinationerrorerror.md)[] | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |