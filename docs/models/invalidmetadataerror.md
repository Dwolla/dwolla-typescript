# InvalidMetadataError

## Example Usage

```typescript
import { InvalidMetadataError } from "dwolla-typescript";

let value: InvalidMetadataError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid metadata.",
        path: "/metadata",
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
| `embedded`                                                                       | [models.InvalidMetadataErrorEmbedded](../models/invalidmetadataerrorembedded.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |