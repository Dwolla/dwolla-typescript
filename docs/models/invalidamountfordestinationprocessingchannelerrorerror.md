# InvalidAmountForDestinationProcessingChannelErrorError

## Example Usage

```typescript
import { InvalidAmountForDestinationProcessingChannelErrorError } from "dwolla-typescript";

let value: InvalidAmountForDestinationProcessingChannelErrorError = {
  code: "Restricted",
  message:
    "Amount is greater than the allowed threshold for the specified destination processing channel.",
  path: "/amount/value",
  links: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  | Restricted                                                                                                                           |
| `message`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  | Amount is greater than the allowed threshold for the specified destination processing channel.                                       |
| `path`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  | /amount/value                                                                                                                        |
| `links`                                                                                                                              | [models.InvalidAmountForDestinationProcessingChannelErrorLinks](../models/invalidamountfordestinationprocessingchannelerrorlinks.md) | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  | {}                                                                                                                                   |