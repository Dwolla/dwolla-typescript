# ReceiverRestrictedError

## Example Usage

```typescript
import { ReceiverRestrictedError } from "dwolla-typescript";

let value: ReceiverRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Receiver restricted.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `code`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | ValidationError                                                                        |
| `message`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | Validation error(s) present. See embedded errors list for more details.                |
| `embedded`                                                                             | [models.ReceiverRestrictedErrorEmbedded](../models/receiverrestrictederrorembedded.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |