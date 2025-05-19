# WireAccountNotFoundError

## Example Usage

```typescript
import { WireAccountNotFoundError } from "dwolla-typescript";

let value: WireAccountNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotFound",
        message: "Account or customer invalid.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `code`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | ValidationError                                                                          |
| `message`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | Validation error(s) present. See embedded errors list for more details.                  |
| `embedded`                                                                               | [models.WireAccountNotFoundErrorEmbedded](../models/wireaccountnotfounderrorembedded.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |