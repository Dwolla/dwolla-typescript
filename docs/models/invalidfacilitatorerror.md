# InvalidFacilitatorError

## Example Usage

```typescript
import { InvalidFacilitatorError } from "dwolla-typescript";

let value: InvalidFacilitatorError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Account cannot facilitate this transaction.",
        path: "",
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
| `embedded`                                                                             | [models.InvalidFacilitatorErrorEmbedded](../models/invalidfacilitatorerrorembedded.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |