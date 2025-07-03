# DestinationProcessingChannelNotSupportedErrorError

## Example Usage

```typescript
import { DestinationProcessingChannelNotSupportedErrorError } from "dwolla-typescript/models";

let value: DestinationProcessingChannelNotSupportedErrorError = {
  code: "NotAllowed",
  message: "Destination funding source does not support processing channel",
  path: "/processingChannel/destination",
  links: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | NotAllowed                                                                                                                   |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | Destination funding source does not support processing channel                                                               |
| `path`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | /processingChannel/destination                                                                                               |
| `links`                                                                                                                      | [models.DestinationProcessingChannelNotSupportedErrorLinks](../models/destinationprocessingchannelnotsupportederrorlinks.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | {}                                                                                                                           |