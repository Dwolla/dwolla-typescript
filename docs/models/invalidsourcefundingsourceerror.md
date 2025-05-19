# InvalidSourceFundingSourceError

## Example Usage

```typescript
import { InvalidSourceFundingSourceError } from "dwolla-typescript";

let value: InvalidSourceFundingSourceError = {
  code: "ValidationError",
  message:
    "Validation error(s) present. See embedded errors list for more details.",
  embedded: {
    errors: [
      {
        code: "Invalid",
        message: "Invalid funding source.",
        path: "/_links/source/href",
        links: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | ValidationError                                                                                        |
| `message`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | Validation error(s) present. See embedded errors list for more details.                                |
| `embedded`                                                                                             | [models.InvalidSourceFundingSourceErrorEmbedded](../models/invalidsourcefundingsourceerrorembedded.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |