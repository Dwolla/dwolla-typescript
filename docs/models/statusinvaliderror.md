# StatusInvalidError

## Example Usage

```typescript
import { StatusInvalidError } from "dwolla-typescript";

let value: StatusInvalidError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Status invalid.",
        path: "/status",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | ValidationError                                                              |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | Validation error(s) present. See embedded errors list for more details.      |
| `embedded`                                                                   | [models.StatusInvalidErrorEmbedded](../models/statusinvaliderrorembedded.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |