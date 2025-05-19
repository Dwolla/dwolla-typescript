# WithdrawProcessingChannelNotSupportedError

## Example Usage

```typescript
import { WithdrawProcessingChannelNotSupportedError } from "dwolla-typescript";

let value: WithdrawProcessingChannelNotSupportedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Unsupported processing channel.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | ValidationError                                                                                                              |
| `message`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | Validation error(s) present. See embedded errors list for more details.                                                      |
| `embedded`                                                                                                                   | [models.WithdrawProcessingChannelNotSupportedErrorEmbedded](../models/withdrawprocessingchannelnotsupportederrorembedded.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |