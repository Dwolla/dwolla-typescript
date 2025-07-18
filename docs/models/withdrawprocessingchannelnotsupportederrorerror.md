# WithdrawProcessingChannelNotSupportedErrorError

## Example Usage

```typescript
import { WithdrawProcessingChannelNotSupportedErrorError } from "dwolla/models";

let value: WithdrawProcessingChannelNotSupportedErrorError = {
  code: "Invalid",
  message: "Unsupported processing channel.",
  path: "/_links/destination/href",
  links: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | Invalid                                                                                                                |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | Unsupported processing channel.                                                                                        |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | /_links/destination/href                                                                                               |
| `links`                                                                                                                | [models.WithdrawProcessingChannelNotSupportedErrorLinks](../models/withdrawprocessingchannelnotsupportederrorlinks.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | {}                                                                                                                     |