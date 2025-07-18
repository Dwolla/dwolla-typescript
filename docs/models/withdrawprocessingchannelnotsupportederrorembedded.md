# WithdrawProcessingChannelNotSupportedErrorEmbedded

## Example Usage

```typescript
import { WithdrawProcessingChannelNotSupportedErrorEmbedded } from "dwolla/models";

let value: WithdrawProcessingChannelNotSupportedErrorEmbedded = {
  errors: [
    {
      code: "Invalid",
      message: "Unsupported processing channel.",
      path: "/_links/destination/href",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `errors`                                                                                                                 | [models.WithdrawProcessingChannelNotSupportedErrorError](../models/withdrawprocessingchannelnotsupportederrorerror.md)[] | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |