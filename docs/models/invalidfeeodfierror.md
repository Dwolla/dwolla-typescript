# InvalidFeeOdfiError

## Example Usage

```typescript
import { InvalidFeeOdfiError } from "dwolla-typescript";

let value: InvalidFeeOdfiError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "NotAllowed",
        message: "Transfer ineligible.",
        path: "/_links/failed-transfer/href",
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
| `embedded`                                                                     | [models.InvalidFeeOdfiErrorEmbedded](../models/invalidfeeodfierrorembedded.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |