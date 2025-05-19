# InvalidCorrelationIdError

## Example Usage

```typescript
import { InvalidCorrelationIdError } from "dwolla-typescript";

let value: InvalidCorrelationIdError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "InvalidFormat",
        message:
          "Correlation id must be at least one character and up to 255 characters when supplied.",
        path: "/correlationId",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `code`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | ValidationError                                                                            |
| `message`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | Validation error(s) present. See embedded errors list for more details.                    |
| `embedded`                                                                                 | [models.InvalidCorrelationIdErrorEmbedded](../models/invalidcorrelationiderrorembedded.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |