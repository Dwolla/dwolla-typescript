# InvalidAmountForDestinationClearingTypeErrorError

## Example Usage

```typescript
import { InvalidAmountForDestinationClearingTypeErrorError } from "dwolla-typescript/models";

let value: InvalidAmountForDestinationClearingTypeErrorError = {
  code: "Restricted",
  message:
    "Amount is above the allowed threshold for the specified destination clearing type.",
  path: "/amount/value",
  links: {},
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | Restricted                                                                                                                 |
| `message`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | Amount is above the allowed threshold for the specified destination clearing type.                                         |
| `path`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | /amount/value                                                                                                              |
| `links`                                                                                                                    | [models.InvalidAmountForDestinationClearingTypeErrorLinks](../models/invalidamountfordestinationclearingtypeerrorlinks.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | {}                                                                                                                         |