# SenderRestrictedError

## Example Usage

```typescript
import { SenderRestrictedError } from "dwolla-typescript";

let value: SenderRestrictedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Restricted",
        message: "Sender restricted.",
        path: "/_links/source/href",
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
| `embedded`                                                                         | [models.SenderRestrictedErrorEmbedded](../models/senderrestrictederrorembedded.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |