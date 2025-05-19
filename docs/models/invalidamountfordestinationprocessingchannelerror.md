# InvalidAmountForDestinationProcessingChannelError

## Example Usage

```typescript
import { InvalidAmountForDestinationProcessingChannelError } from "dwolla-typescript";

let value: InvalidAmountForDestinationProcessingChannelError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message:
          "Amount is greater than the allowed threshold for the specified destination processing channel.",
        path: "/amount/value",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        | ValidationError                                                                                                                            |
| `message`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        | Validation error(s) present. See embedded errors list for more details.                                                                    |
| `embedded`                                                                                                                                 | [models.InvalidAmountForDestinationProcessingChannelErrorEmbedded](../models/invalidamountfordestinationprocessingchannelerrorembedded.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |