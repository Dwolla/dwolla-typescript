# DestinationProcessingChannelNotSupportedErrorEmbedded

## Example Usage

```typescript
import { DestinationProcessingChannelNotSupportedErrorEmbedded } from "dwolla/models";

let value: DestinationProcessingChannelNotSupportedErrorEmbedded = {
  errors: [
    {
      code: "NotAllowed",
      message: "Destination funding source does not support processing channel",
      path: "/processingChannel/destination",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                       | [models.DestinationProcessingChannelNotSupportedErrorError](../models/destinationprocessingchannelnotsupportederrorerror.md)[] | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |