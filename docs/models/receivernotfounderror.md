# ReceiverNotFoundError

## Example Usage

```typescript
import { ReceiverNotFoundError } from "dwolla-typescript";

let value: ReceiverNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Receiver not found.",
        path: "/_links/destination/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `code`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | ValidationError                                                                    |
| `message`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | Validation error(s) present. See embedded errors list for more details.            |
| `embedded`                                                                         | [models.ReceiverNotFoundErrorEmbedded](../models/receivernotfounderrorembedded.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |