# SourceNotFoundError

## Example Usage

```typescript
import { SourceNotFoundError } from "dwolla-typescript";

let value: SourceNotFoundError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Funding source not found.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `code`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | ValidationError                                                                |
| `message`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            | Validation error(s) present. See embedded errors list for more details.        |
| `embedded`                                                                     | [models.SourceNotFoundErrorEmbedded](../models/sourcenotfounderrorembedded.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |