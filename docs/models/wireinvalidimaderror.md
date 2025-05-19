# WireInvalidImadError

## Example Usage

```typescript
import { WireInvalidImadError } from "dwolla-typescript";

let value: WireInvalidImadError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Missing or invalid IMAD.",
        path: "/imad",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | ValidationError                                                                  |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | Validation error(s) present. See embedded errors list for more details.          |
| `embedded`                                                                       | [models.WireInvalidImadErrorEmbedded](../models/wireinvalidimaderrorembedded.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |