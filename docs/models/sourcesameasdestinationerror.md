# SourceSameAsDestinationError

## Example Usage

```typescript
import { SourceSameAsDestinationError } from "dwolla-typescript";

let value: SourceSameAsDestinationError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Receiver cannot be the owner of the source funding source.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `code`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | ValidationError                                                                                  |
| `message`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | Validation error(s) present. See embedded errors list for more details.                          |
| `embedded`                                                                                       | [models.SourceSameAsDestinationErrorEmbedded](../models/sourcesameasdestinationerrorembedded.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |