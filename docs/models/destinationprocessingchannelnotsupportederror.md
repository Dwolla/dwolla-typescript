# DestinationProcessingChannelNotSupportedError

## Example Usage

```typescript
import { DestinationProcessingChannelNotSupportedError } from "dwolla-typescript";

let value: DestinationProcessingChannelNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message:
          "Destination funding source does not support processing channel",
        path: "/processingChannel/destination",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | ValidationError                                                                                                                    |
| `message`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                | Validation error(s) present. See embedded errors list for more details.                                                            |
| `embedded`                                                                                                                         | [models.DestinationProcessingChannelNotSupportedErrorEmbedded](../models/destinationprocessingchannelnotsupportederrorembedded.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |