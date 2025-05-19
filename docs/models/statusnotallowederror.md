# StatusNotAllowedError

## Example Usage

```typescript
import { StatusNotAllowedError } from "dwolla-typescript";

let value: StatusNotAllowedError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Status not allowed.",
        path: "/status",
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
| `embedded`                                                                         | [models.StatusNotAllowedErrorEmbedded](../models/statusnotallowederrorembedded.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |